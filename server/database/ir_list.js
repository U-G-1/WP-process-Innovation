const Sequelize = require("sequelize");

module.exports = class ir_list extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        irl_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        irl_category: {
            type: Sequelize.INTEGER.UNSIGNED,
            unique: true,
            allowNull: false,
        },
        irl_nameNstd: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        irl_unit: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        irl_plan_amount: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        irl_req_amount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        irl_plan_amount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        irl_ok_amount: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ir_l_ir_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "ir_list",
        tableName: "ir_list",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.ir_list.hasMany(db.inspection_req_info, {
      foreignKey: "irl_idx",
      sourceKey: "ir_l_ir_idx",
    });
  }
};