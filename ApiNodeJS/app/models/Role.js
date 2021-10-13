'use stric';
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING
    }, {});
    Role.associate = function(models){
        Role.hasMany(models.User, { as: "role", foreignKey: "role_id" });
    };
    return Role;
}