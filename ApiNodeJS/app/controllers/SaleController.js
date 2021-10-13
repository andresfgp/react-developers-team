const { Sale } = require('../models/index');
const Sequelize = require('sequelize');

module.exports = {
    create(req, res) {
        console.log('req', req.body);
        Sale.create(
            req.body
        ).then(ventas => {
            res.json(ventas);
        })
    },

    showAll(req, res) {
        Sale.findAll({ include: ['product', 'user', 'customer'] }).then(ventas => {
            res.json(ventas);
        })
    },


    showById(req, res) {
        Sale.findByPk(req.params.id).then(ventas => {
            res.json(ventas);
        })
    },

    update(req, res) {

        Sale.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        });
    },


    delete(req, res) {
        Sale.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }
}