'use strict';
module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: DataTypes.STRING,
        finalPaymentDate: DataTypes.DATEONLY,
        initialPaymentDate: DataTypes.DATEONLY,
        saleQuantity: DataTypes.INTEGER,
        saleValue: DataTypes.DOUBLE,
        state: DataTypes.STRING,
        totalSaleValue: DataTypes.DOUBLE
    }, {});
    Sale.associate = function(models){
        Sale.belongsTo(models.Product, { as: "product", foreignKey: "product_id"});
        Sale.belongsTo(models.Customer, {as: "customer", foreignKey: "customer_id"});
        Sale.belongsTo(models.User, { as: "user", foreignKey: "user_id" });
    };

    return Sale;
};