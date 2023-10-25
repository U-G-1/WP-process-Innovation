const Sequelize = require("sequelize");

module.exports = class device_result_report_info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        drr_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        drr_title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        drr_ord_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "device_result_report_info",
        tableName: "device_result_report_info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
