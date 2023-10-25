const Sequelize = require("sequelize");

module.exports = class tm_decision extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        tm_deci_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        bal_d_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        tm_d_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        tm_d_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        tm_d_status_comment: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "tm_decision",
        tableName: "tm_decision",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.tm_decision.belongsTo(db.bal_dep, {
      foreignKey: "bal_num",
      targetKey: "bal_d_num",
    });
    db.tm_decision.belongsTo(db.tm_info, {
      foreignKey: "tm_idx",
      targetKey: "tm_d_num",
    });
  }
};
