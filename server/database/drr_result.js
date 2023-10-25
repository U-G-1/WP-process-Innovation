const Sequelize = require("sequelize");

module.exports = class drr_result extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        drrr_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        drrr_where: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        drrr_content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        drrr_result: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        drrr_import_content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        drrr_drr_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "drr_result",
        tableName: "drr_result",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
