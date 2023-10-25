const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("./middleware");
const passport = require("passport");
// 각 부서의 데이터 모델을 가져온다
const { an_dep, bal_dep, gam_dep, ja_dep, jung_dep } = require("../../models");
const bcrypt = require("bcrypt"); // 비밀번호 해싱을 위한 라이브러리
const LocalStrategy = require("passport-local").Strategy; // Passport의 로컬 전략 사용

// 로그인 요청 처리 라우터
router.post("/login", isNotLoggedIn, async (req, res, next) => {
  console.log("main.js /login :", req.body);

  // Passport의 local 전략을 이용하여 인증을 진행
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      // 인증 과정에서 에러 발생 시 처리
      console.error(authError);
      return next(authError);
    }

    if (!user) {
      // 유저 정보가 없는 경우(로그인 실패)
      return res.status(400).send(info);
    }

    return req.login(user, (loginError) => {
      if (loginError) {
        // login 과정에서 에러 발생 시 처리
        console.error(loginError);
        return next(loginError);
      }

      console.log("login success");

      // 성공적으로 로그인 되었다면 메인 페이지로 리다이렉트
      return res.redirect("/main");
    });
  })(req, res, next);
});

// 로그아웃 요청 처리 라우터
router.get("/logout", isLoggedIn, async (req, res, next) => {
  req.logout((err) => {
    // Passport의 logout 메소드로 세션에서 사용자 정보 제거
    if (err) {
      return next(err);
    }
  });

  /* logout 후에는 홈페이지('/')로 redirect */
  res.redirect("/");
});

// 각 부서별 칼럼 이름 매핑
// 실제 데이터베이스 테이블의 컬럼 이름과 연결시키기 위한 객체
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
// 사용자가 어떤 부서에 속하는지에 따라 적절한 모델을 선택하기 위한 객체
const departmentModels = {
  안전부서: an_dep,
  발전부서: bal_dep,
  감독부서: gam_dep,
  자재부서: ja_dep,
  정비부서: jung_dep,
};

// Passport local strategy for signup
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "id", // id를 username으로 사용
      passwordField: "pw", // pw를 password로 사용
      passReqToCallback: true, // 요청 객체를 콜백 함수로 전달하도록 설정 이렇게 하면 req.body에서 데이터를 가져올 수 있다
    },
    async function (req, id, pw, done) {
      console.log("signup post data : ", req.body);

      const departmentName = req.body.department; // 부서 이름 추출
      const UserModel = departmentModels[departmentName]; // 해당 부서의 모델 선택
      console.log(UserModel);

      // 각 부서별 칼럼 이름 매핑
      const columnNames = departmentColumnNames[departmentName]; // 수정된 라인
      console.log("columnNames :", columnNames);
      if (!UserModel || !columnNames) {
        /* 만약 유효하지 않은 부서명일 경우,
         * null과 false를 반환하여 에러 처리. */
        return done(null, false);
      }

      const searchCondition = {};

      // 아이디 칼럼 이름(own_num)으로 검색 조건 설정
      searchCondition[columnNames.own_num] = parseInt(id);
      console.log("searchCondition : ", searchCondition);

      try {
        const existingUser = await UserModel.findOne({
          where: searchCondition,
        });
        console.log(existingUser);
        if (existingUser) {
          console.log("existingUser error");
          return done(null, false);
          /* 이미 같은 아이디를 가진 유저가 있다면,
           * null과 false를 반환하여 에러 처리. */
        }
        const columnNames = departmentColumnNames[departmentName]; // 해당 부서의 칼럼 이름 선택
        console.log(columnNames);
        if (!columnNames) {
          return done(null, false); // 유효하지 않은 부서 이름인 경우 처리
        }

        const hashedPassword = await bcrypt.hash(pw, 10);

        const newUserDetails = {};

        newUserDetails[columnNames.own_num] = req.body.id;
        newUserDetails[columnNames.name] = req.body.name;
        newUserDetails[columnNames.position] = req.body.position;
        newUserDetails[columnNames.sub_dep] = req.body.sub_dep;
        newUserDetails[columnNames.pw] = hashedPassword;

        const newUser = await UserModel.create(newUserDetails);
        console.log("create user data : ", newUser);
        // newUser.department = departmentName;
        return done(null, newUser);
      } catch (error) {
        console.error(error);
        return done(error);
      }
    }
  )
);

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
  })
);

module.exports = router;
