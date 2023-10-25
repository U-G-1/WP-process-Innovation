const Sequelize = require("sequelize");

module.exports = class order_aft_decision extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        order_alt_d_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        odr_alt_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ord_gam_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ord_alt_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "order_aft_decision",
        tableName: "order_aft_decision",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};