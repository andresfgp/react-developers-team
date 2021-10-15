const { Category } = require('../models/index');
const Sequelize = require('sequelize');

module.exports = {
    showAll(req, res) {
        Category.findAll().then(categorias => {
            res.json(categorias);
        })
    },

    create(req, res) {
        console.log('req', req.body);
        Category.create(
            req.body
        ).then(categorias => {
            res.json(categorias);
        })
    },
}