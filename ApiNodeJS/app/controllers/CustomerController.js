const { Customer }  =  require('../models/index');
const Sequelize = require('sequelize');

module.exports = {
    create(req, res) {
        Customer.create(
            req.body
        ).then(clientes => {
            res.json(clientes);
        })
    },

    showAll(req, res) {
        Customer.findAll().then(clientes => {
            res.json(clientes);
        })
    },

    showById(req, res) {
        Customer.findByPk(req.params.id).then(clientes => {
            res.json(clientes);
        })
    },

    update(req, res) {
        Customer.update({
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
        Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }
}