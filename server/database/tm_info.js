const Sequelize = require("sequelize");

module.exports = class tm_info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        tm_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        tm_equip: {
          //설비번호
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        tm_equip_name: {
          //설비명
          type: Sequelize.STRING,
          allowNull: false,
        },
        tm_req_title: {
          //요청명
          type: Sequelize.STRING,
          allowNull: false,
        },
        tm_req_date: {
          //요청일시 - 발행일 자동입력? ex)20231007+시간까지?
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        tm_req_sym: {
          //요청부서
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        tm_sym_name: {
          //요청증상?
          type: Sequelize.STRING,
          allowNull: false,
        },
        tm_req_txt: {
          //요청내용
          type: Sequelize.STRING,
          allowNull: false,
        },
        gam_own_num: {
          //감독부서-감독관(참조)
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "tm_info",
        tableName: "tm_info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.tm_info.belongsTo(db.gam_dep, {
      foreignKey: "gam_own_num",
      taegetKey: "gam_own_num",
    });
    db.tm_info.hasMany(db.tm_Decision, {
      foreignKey: "tm_idx",
      sourceKey: "tm_num",
    });
  }
};
