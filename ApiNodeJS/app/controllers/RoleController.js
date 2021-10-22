const { Role } = require ('../models/index');
const Sequelize = require('sequelize');

module.exports = {
    showAll(req, res) {
        Role.findAll().then(roles => {
            res.json(roles);
        })
    }
}