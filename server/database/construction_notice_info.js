const Sequelize = require("sequelize");

module.exports = class construction_notice_info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        cn_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        cn_quality_category: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        cn_content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cn_drr_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        cn_ord_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "construction_notice_info",
        tableName: "construction_notice_info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
