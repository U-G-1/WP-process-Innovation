// passport.js

const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const bcrypt = require("bcrypt");
// const an_dep = require("../database/an_dep");
const { an_dep, bal_dep, gam_dep, ja_dep, jung_dep } = require("../models");

// 각 부서별 칼럼 이름 매핑
const departmentColumnNames = {
  안전부서: {
    own_num: "an_own_num",
    name: "an_name",
    position: "an_position",
    sub_dep: "an_sub_dep",
    pw: "an_pw",
  },
  발전부서: {
    own_num: "bal_own_num",
    name: "bal_name",
    position: "bal_position",
    sub_dep: "bal_sub_dep",
    pw: "bal_pw",
  },
  감독부서: {
    own_num: "gam_own_num",
    name: "gam_name",
    position: "gam_position",
    sub_dep: "gam_sub_dep",
    pw: "gam_pw",
  },
  자재부서: {
    own_num: "ja_own_num",
    name: "ja_name",
    position: "ja_position",
    sub_dep: "ja_sub_dep",
    pw: "ja_pw",
  },
  정비부서: {
    own_num: "jung_own_num",
    name: "jung_name",
    position: "jung_position",
    sub_dep: "jung_sub_dep",
    pw: "jung_pw",
  },
};
// 각 부서 이름과 해당 모델을 매핑
const departmentModels = {
  안전부서: an_dep,
  발전부서: bal_dep,
  감독부서: gam_dep,
  자재부서: ja_dep,
  정비부서: jung_dep,
};

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "id",
        passwordField: "pw",
        passReqToCallback: true, // req 객체를 callback 함수로 전달
      },
      function (req, id, pw, done) {
        console.log("passport req body :", req.body);
        const departmentName = req.body.department; // 부서 이름 추출
        console.log("login post dep_name : ", departmentName);
        const UserModel = departmentModels[departmentName]; // 해당 부서의 모델 선택
        console.log("userModel", UserModel);

        // 각 부서별 칼럼 이름 매핑
        const columnNames = departmentColumnNames[departmentName];
        console.log("columnNames :", columnNames);
        if (!UserModel || !columnNames) {
          return done(null, false);
        }

        const searchCondition = {};

        // 아이디 칼럼 이름(own_num)으로 검색 조건 설정
        searchCondition[columnNames.own_num] = parseInt(id);
        console.log("searchCondition : ", searchCondition);
        UserModel.findOne({ where: searchCondition })
          .then((user) => {
            console.log("FindOne User : ", user);
            if (!user) {
              return done(null, false);
            }

            bcrypt
              .compare(pw, user.dataValues[columnNames.pw])
              .then((isMatch) => {
                if (isMatch) {
                  console.log("matching success pw");
                  return done(null, user);
                } else {
                  return done(null, false);
                }
              });
          })
          .catch((err) => done(err));
      }
    )
  );

  // passport.serializeUser: 사용자가 로그인에 성공하면, 이 함수가 호출
  // 이 함수에서 사용자 정보 중 일부(또는 전체)를 세션에 저장
  passport.serializeUser(function (user, cb) {
    console.log("serializeUser user", user.dataValues);

    // Determine the department of the user
    let departmentName;

    // 각 부서별 칼럼 이름 매핑에서 해당 사용자가 어느 부서에 속해 있는지 찾는다
    for (const [depName, columnNames] of Object.entries(
      departmentColumnNames
    )) {
      if (columnNames.own_num in user.dataValues) {
        departmentName = depName;
        break;
      }
    }

    console.log("departmentName :", departmentName);

    if (!departmentName || !departmentColumnNames[departmentName]) {
      console.error(`Invalid or missing department name: ${departmentName}`);

      // 유효하지 않은 부서명일 경우 에러를 반환
      return cb(
        new Error(`Invalid or missing department name: ${departmentName}`)
      );
    }

    const subDepColumnName = departmentColumnNames[departmentName].sub_dep;

    // id와 sub_dep 및 부서명 정보 결합하여 저장
    const idAndSubDepAndDepartment =
      user.dataValues.id +
      "-" +
      user.dataValues[subDepColumnName] +
      "-" +
      departmentName;

    // 이 정보를 세션에 저장
    cb(null, idAndSubDepAndDepartment);
  });

  // passport.deserializeUser: 페이지 접근 시마다 로그인한 사용자인지 확인하기 위해 호출되는 함수
  // serializeUser에서 세션에 저장했던 데이터를 바탕으로 필요한 정보를 DB 등에서 조회하는 작업을 수행
  passport.deserializeUser(function (idAndSubDepAndDepartmentStringified, cb) {
    const [idStringified, subDep, departmentName] =
      idAndSubDepAndDepartmentStringified.split("-");

    const id = parseInt(idStringified);
    const UserModel = departmentModels[departmentName];

    if (!UserModel) {
      console.error(`Invalid department name: ${departmentName}`);

      // 유효하지 않은 부서명일 경우 에러를 반환
      return cb(new Error(`Invalid department name: ${departmentName}`));
    }

    UserModel.findByPk(id)
      .then((user) => {
        if (user) {
          // 유저 객체에 다시 부서명 추가하기
          user.department = departmentName;
        }

        // 사용자 정보를 반환하여 req.user에 저장합니다.
        return cb(null, user);
      })
      .catch((err) => cb(err)); // 에러 발생 시 처리
  });
};
