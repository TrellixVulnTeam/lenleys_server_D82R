"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubCategoryItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SubCategoryItem.belongsTo(models.SubCategory, {
        foreignKey: "id",
        as: "sub-nav-item",
      });
    }
  }
  SubCategoryItem.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      categoryID: {
        type: DataTypes.INTEGER,
      },
      subCategoryID: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "SubCategoryItem",
    }
  );
  return SubCategoryItem;
};
