const Sequelize = require("sequelize");

module.exports = class safe_work_jsa extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        s_jsa_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        s_jsa_step: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        s_jsa_factor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        s_jsa_method: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        s_jsa_improve: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        s_jsa_safe_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "safe_work_jsa",
        tableName: "safe_work_jsa",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};