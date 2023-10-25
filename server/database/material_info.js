const Sequelize = require("sequelize");

module.exports = class material_info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        mat_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        mat_part: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        mat_category: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        mat_num: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mat_nameNstd: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mat_unit: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mat_dAmount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        mat_unitPrice: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        mat_price: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        mat_basis: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mat_start_date: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        mat_due_date: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        mat_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        mat_ord_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "material_info",
        tableName: "material_info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};