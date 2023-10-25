const Sequelize = require("sequelize");

module.exports = class safe_decision extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        s_d_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        s_d_gam_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        s_d_bal_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        s_d_safe_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        s_d_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        s_d_an_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "safe_decision",
        tableName: "safe_decision",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};