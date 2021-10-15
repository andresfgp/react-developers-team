const { Supplier } = require('../models/index');
const Sequelize = require('sequelize');

module.exports = {
    showAll(req, res) {
        Supplier.findAll().then(suppliers => {
            res.json(suppliers);
        })
    },
}