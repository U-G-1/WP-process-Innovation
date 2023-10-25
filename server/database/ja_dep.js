const Sequelize = require("sequelize");

module.exports = class ja_dep extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        ja_own_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        ja_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ja_position: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        ja_sub_dep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ja_pw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "ja_dep",
        tableName: "ja_dep",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
