const { User } = require('../models/index');
const Sequelize = require('sequelize');

module.exports = {
    create(req, res) {
        console.log('req', req.body);
        User.create(
            req.body
        ).then(usuarios => {
            res.json(usuarios);
        })
    },

    showAll(req, res) {
        User.findAll({ include: ['role'] }).then(usuarios => {
            res.json(usuarios);
        })
    },


    showById(req, res) {
        User.findByPk(req.params.id).then(usuario => {
            res.json(usuario);
        })
    },

    update(req, res) {

        User.update({
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
        User.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }
}