const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("./middleware");

// 메인 페이지 라우터
// 로그인 상태가 아니면 접근이 불가능하도록 isLoggedIn 미들웨어를 사용
router.get("/main", isLoggedIn, async (req, res) => {
  // 로그인 상태라면 메인 페이지를 렌더링
  res.render("../views/index1.ejs");
});

// 로그인 페이지 라우터
// 이미 로그인 상태라면 접근이 불가능하도록 isNotLoggedIn 미들웨어를 사용
router.get("/", isNotLoggedIn, async (req, res) => {
  // 로그아웃 상태라면 로그인 페이지를 렌더링
  res.render("../views/sign-in.ejs");
});
//// 회원가입 라우터
router.get("/register", async (req, res) => {
  res.render("../views/sign-up.ejs");
});

router.get("/tm", isLoggedIn, async (req, res) => {
  // 로그인 상태라면 메인 페이지를 렌더링
  // req.user 데이터도 함께 전달
  console.log("tm log data", req.user);
  res.render("../views/tm.ejs", { user: req.user });
});

module.exports = router;
