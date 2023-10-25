const Sequelize = require("sequelize");

module.exports = class gam_dep extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        gam_own_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        gam_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        gam_position: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        gam_sub_dep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        gam_pw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "gam_dep",
        tableName: "gam_dep",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.gam_dep.hasMany(db.tm_info, {
      foreignKey: "gam_own_num",
      sourceKey: "gam_own_num",
    });
  }
};
