exports.isLoggedIn = (req, res, next) => {
  console.log("isLogged", req);
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/"); // 로그인 페이지로 리다이렉트
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/main"); // 이미 로그인된 경우 메인 페이지로 리다이렉트
  }
};