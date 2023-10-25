const Sequelize = require("sequelize");

module.exports = class inspection_req_info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        ir_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        ir_notify_content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ir_specital_content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ir_oth_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ir_jung_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "inspection_req_info",
        tableName: "inspection_req_info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.inspection_req_info.hasMany(db.jung_dep, {
      foreignKey: "ir_jung_num",
      sourceKey: "jung_own_num",
    });
    db.inspection_req_info.hasMany(db.order_info, {
      foreignKey: "ir_jung_num",
      sourceKey: "ir_ord_num",
    });
    db.inspection_req_info.belongsTo(db.ir_list, {
      foreignKey: "irl_idx",
      targetKey: "ir_l_ir_idx",
    });
    db.inspection_req_info.belongsTo(db.ir_docu, {
      foreignKey: "ir_docu_idx",
      targetKey: "ir_docu_ir_idx",
    });
    db.inspection_req_info.belongsTo(db.ir_decision, {
      foreignKey: "ir_d_idx",
      targetKey: "ir_d_ir_idx",
    });
  }
};