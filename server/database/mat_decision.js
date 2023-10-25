const Sequelize = require("sequelize");

module.exports = class mat_decision extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        mat_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        m_ja_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        m_mat_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        m_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "mat_decision",
        tableName: "mat_decision",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};