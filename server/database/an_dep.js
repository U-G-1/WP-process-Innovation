const Sequelize = require("sequelize");

module.exports = class an_dep extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        an_own_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        an_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        an_position: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        an_sub_dep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        an_pw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "an_dep",
        tableName: "an_dep",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
