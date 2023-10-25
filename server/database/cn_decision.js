const Sequelize = require("sequelize");

module.exports = class cn_decision extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cn_d_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        cn_d_gam_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        cn_d_cn_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        cn_d_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "cn_decision",
        tableName: "cn_decision",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
