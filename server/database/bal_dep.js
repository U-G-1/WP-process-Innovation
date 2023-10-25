const Sequelize = require("sequelize");

module.exports = class bal_dep extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        bal_own_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        bal_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bal_position: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        bal_sub_dep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bal_pw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "bal_dep",
        tableName: "bal_dep",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.bal_dep.hasMany(db.tm_Decision, {
      foreignKey: "bal_own_num",
      sourceKey: "bal_d_num",
    });
  }
};
