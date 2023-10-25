const Sequelize = require("sequelize");

module.exports = class safety_info extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        safe_idx: {
          type: Sequelize.INTEGER.UNSIGNED,
          unique: true,
          allowNull: false,
        },
        safe_imp_work: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        safe_prim_work: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        safe_oth_work: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        safe_env_work: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        safe_mema: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        safe_start_date: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        safe_due_date: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
        },
        safe_ok_hour: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        safe_whole_hour: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        safe_option: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        safe_gear_list: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        safe_status: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
        safe_ord_num: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        paranoid: false,
        modelName: "safety_info",
        tableName: "safety_info",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};