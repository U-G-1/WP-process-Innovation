const Sequelize = require("sequelize");
const an_dep = require("../database/an_dep");
const bal_dep = require("../database/bal_dep");
const gam_dep = require("../database/gam_dep");
const ja_dep = require("../database/ja_dep");
const jung_dep = require("../database/jung_dep");
const tm_decision = require("../database/tm_decision");
const tm_info = require("../database/tm_info");

const env = process.env.NODE_ENV || "test";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.an_dep = an_dep;
db.bal_dep = bal_dep;
db.gam_dep = gam_dep;
db.ja_dep = ja_dep;
db.jung_dep = jung_dep;
db.tm_info = tm_info;
db.tm_decision = tm_decision;

an_dep.init(sequelize);
bal_dep.init(sequelize);
gam_dep.init(sequelize);
ja_dep.init(sequelize);
jung_dep.init(sequelize);
tm_info.init(sequelize);
tm_decision.init(sequelize);

// an_dep.associate(db);
// bal_dep.associate(db);
// gam_dep.associate(db);
// ja_dep.associate(db);
// jung_dep.associate(db);
// tm_info.associate(db);
// tm_decision.associate(db);

module.exports = db;
