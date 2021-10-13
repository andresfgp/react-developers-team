'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: DataTypes.DOUBLE,
        subtotal: DataTypes.DOUBLE,
        total: DataTypes.DOUBLE,
        fechaPago: DataTypes.STRING
    }, {});
    Sale.associate = function(models){
        Sale.belongsTo(models.Product, { as: "product", foreignKey: "product_id"});
        Sale.belongsTo(models.Customer, {as: "customer", foreignKey: "customer_id"});
        Sale.belongsTo(models.User, { as: "user", foreignKey: "user_id" });
    };

    return Sale;
};