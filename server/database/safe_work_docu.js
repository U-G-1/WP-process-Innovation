const Sequelize = require("sequelize");

module.exports = class safe_work_docu extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        s_w_d_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        s_w_d_category: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        s_w_d_location: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        s_w_d_safe: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "safe_work_docu",
        tableName: "safe_work_docu",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};