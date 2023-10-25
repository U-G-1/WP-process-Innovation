const Sequelize = require("sequelize");

module.exports = class order_decision extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        ord_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        gam_d_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        order_d_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        bal_od_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        o_d_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        od_finish_start_date: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        od_finish_due_date: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        od_finish_result: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        od_finish_result_detail: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "order_decision",
        tableName: "order_decision",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};