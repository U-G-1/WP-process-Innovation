const Sequelize = require("sequelize");

module.exports = class order_after_info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        order_alt_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        odr_alt_location: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ord_alt_content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ord_alt_cause: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ord_alt_future: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ord_alt_all_contents: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ord_numm: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "order_after_info",
        tableName: "order_after_info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};