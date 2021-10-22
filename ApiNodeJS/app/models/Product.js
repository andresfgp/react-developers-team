'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER,
    type: DataTypes.TEXT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Supplier, { as: "supplier", foreignKey: "supplier_id" });
    Product.hasMany(models.Sale, { as: "product", foreignKey: "product_id"});

  };
  return Product;
};