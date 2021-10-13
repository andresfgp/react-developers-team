'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    valor: DataTypes.DOUBLE,
    peso: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Category, { as: "category", foreignKey: "category_id" });
    Product.hasMany(models.Sale, { as: "product", foreignKey: "product_id"});

  };
  return Product;
};