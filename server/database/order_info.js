const Sequelize = require("sequelize");

module.exports = class order_info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        ord_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        ord_slc1: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ord_slc2: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ord_start_date: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ord_due_date: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ord_equip_num: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ord_equip_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ord_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ord_rt_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        jung_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "order_info",
        tableName: "order_info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.order_info.belongsTo(db.inspection_req_info, {
      foreignKey: "ord_idx",
      sourceKey: "ord_idx",
    });
  }
};