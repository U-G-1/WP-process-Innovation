const Sequelize = require("sequelize");

module.exports = class ir_decision extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        ir_d_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        ir_d_ir_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ir_d_gam_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ir_d_gam_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "ir_decision",
        tableName: "ir_decision",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.ir_decision.hasMany(db.inspection_req_info, {
      foreignKey: "ir_d_idx",
      sourceKey: "ir_d_ir_idx",
    });
  }
};
