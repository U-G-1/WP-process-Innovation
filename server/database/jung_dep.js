const Sequelize = require("sequelize");

module.exports = class jung_dep extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        jung_own_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        jung_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        jung_position: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        jung_sub_detail: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        jung_pw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "jung_dep",
        tableName: "jung_dep",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.jung_dep.belongsTo(db.inspection_req_info, {
      foreignKey: "jung_own_num",
      sourceKey: "ir_jung_num",
    });
  }
};
