const express = require("express");
const session = require("express-session");
const router = express.Router();
const path = require("path");
const { sequelize } = require('./models');
let app = express();
let bodyParser = require("body-parser");
let passport = require("passport");

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Session Middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.log(err);
    });

sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

app.use(passport.initialize());
app.use(passport.session());

require("./passport/passport")(passport);

// ==== 뷰 엔진은 ejs로 설정 ==== //
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// ==== static 경로 설정 ==== //
app.use(express.static(path.join(__dirname, "www")));
app.use(
  "/assets",
  express.static(path.join(__dirname, "..", "front", "dist", "assets"))
);
app.use(
  "/docs",
  express.static(path.join(__dirname, "..", "front", "dist", "docs"))
);
app.use(
  "/css",
  express.static(path.join(__dirname, "..", "front", "dist", "assets", "css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "..", "front", "dist", "assets", "js"))
);
app.use(
  "/img",
  express.static(path.join(__dirname, "..", "front", "src", "img"))
);
app.use(
  "/scss",
  express.static(path.join(__dirname, "..", "front", "dist", "assets", "scss"))
);


// routes
const mainRouter = require("./src/routes/main");
const userRouter = require("./src/routes/user");
const tmRouter = require("./src/routes/tmRequest");
app.use("/", mainRouter);
app.use("/user", userRouter);
app.use("/tmRq", tmRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
