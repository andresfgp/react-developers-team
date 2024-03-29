'use strict';
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING(50),
        phone: DataTypes.STRING(11),
        address: DataTypes.STRING(50)
    }, {});
    Customer.associate = function(models) {
        Customer.hasMany(models.Sale, { as: "customer", foreignKey: "customer_id"});
    };

    return Customer;
};