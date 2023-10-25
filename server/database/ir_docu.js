const Sequelize = require("sequelize");

module.exports = class ir_docu extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        ir_docu_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        ir_docu_fileLoca: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ir_docu_ir_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "ir_docu",
        tableName: "ir_docu",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.ir_docu.hasMany(db.inspection_req_info, {
      foreignKey: "ir_docu_idx",
      sourceKey: "ir_docu_idx",
    });
  }
};