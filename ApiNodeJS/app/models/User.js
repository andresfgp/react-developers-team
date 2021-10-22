'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        status: DataTypes.STRING
    },{});
    User.associate = function(models) {
        User.hasMany(models.Sale, { as: "user", foreignKey: "user_id"});
        User.belongsTo(models.Role, { as: "role", foreignKey: "role_id"});
    };
    return User;
};