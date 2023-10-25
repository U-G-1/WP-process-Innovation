const Sequelize = require("sequelize");

module.exports = class red_tag extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        rt_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        rt_equip_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        rt_equip_name: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        rt_status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        rt_step: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        rt_order_num: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "red_tag",
        tableName: "red_tag",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};