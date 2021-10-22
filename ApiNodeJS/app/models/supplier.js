'use strict';
module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define('Supplier', {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
    },
    supplier_name: DataTypes.STRING
  }, {});
  Supplier.associate = function(models) {
    // associations can be defined here
    Supplier.hasMany(models.Product, { as: "supplier", foreignKey: "supplier_id" });
  };
  return Supplier;
};