const Sequelize = require("sequelize");

module.exports = class drr_decision extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        drr_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        drr_d_drr_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        drr_d_jung_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        drr_d_gam_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        drr_d_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "drr_decision",
        tableName: "drr_decision",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
