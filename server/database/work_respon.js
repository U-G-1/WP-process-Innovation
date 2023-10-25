const Sequelize = require("sequelize");

module.exports = class g_expense_info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        g_e_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        g_e_category: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        g_e_detail: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        g_e_unit: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        g_e_vol: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        g_e_unit_price: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        g_e_price: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        g_e_basis: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        g_e_order: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "g_expense_info",
        tableName: "g_expense_info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};