const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("./middleware");
const passport = require("passport");
const { tm_info } = require("../../models");

router.post("/transfer", isLoggedIn, async (req, res, next) => {
  console.log("tm transfer data :", req.body);
  try {
    // 요청으로부터 필요한 데이터 추출
    const {
      tm_equip,
      tm_equip_name,
      tm_req_title,
      tm_req_sym,
      sup_dept_num_1,
      sup_dept_name_1,
      sup_dept_num_2,
      sup_dept_name_2,
      sup_dept_num_3,
      sup_dept_name_3,
      symptom_num,
      symptom_name,
    } = req.body;
    // 데이터베이스에 저장할 정보 구성
    // 요청 내용 추출
    const tm_req_txt = req.body.tm_req_txt || "";

    // 데이터베이스에서 마지막 tm_idx 조회
    const lastTM = await tm_info.findOne({
      order: [["tm_idx", "DESC"]],
    });
    let nextTMIdx;
    if (lastTM) {
      nextTMIdx = lastTM.tm_idx + 1;
    } else {
      nextTMIdx = 1;
    }

    // gam_own_names을 배열 형태로 구성
    const gamOwnNumsArray = [sup_dept_num_1, sup_dept_num_2, sup_dept_num_3];
    let gamOwnNums = [];
    for (let i = 0; i < gamOwnNumsArray.length; i++) {
      if (gamOwnNumsArray[i]) {
        gamOwnNums.push(gamOwnNumsArray[i]);
      }
    }
    // Get current date
    let now = new Date();
    // Format date as YYYYMMDD
    let tm_req_date =
      now.getFullYear() * 1000000 + // for YYYY
      (now.getMonth() + 1) * 10000 + // for MM
      now.getDate() * 100 + // for DD
      now.getHours(); // for HH
    console.log("now date : ", tm_req_date);

    const tmData = {
      tm_idx: nextTMIdx,
      tm_equip: parseInt(tm_equip), // 설비번호
      tm_equip_name: tm_equip_name, // 설비명
      tm_req_title: tm_req_title, // 요청명
      tm_req_date: tm_req_date, // 요청시간
      tm_req_sym: 1, //요청부서
      tm_sym_name: symptom_name, //요청 증상
      tm_req_txt: tm_req_txt, //요청 내용
      gam_own_num: gamOwnNums.join(",") || sup_dept_num_1, // 감독부서
    };

    // gam_own_num: {
    //   //감독부서-감독관(참조)
    //   type: Sequelize.INTEGER.UNSIGNED,
    //   allowNull: false,
    // },
    // integer로 이뤄져있다. 여러 부서를 입력 할 시 , 로 구분되기 때문에 생성에 어려움이 있다.
    // table의 컬럼 type 변경이 필요해 보인다. 질문하고 답변주기

    // 데이터베이스에 저장
    const createdTM = await tm_info.create(tmData);

    console.log("Created TM:", createdTM);

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
