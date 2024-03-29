const {Product} = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {

    create(req, res) {
        console.log('req', req.body);
        Product.create(
            req.body
        ).then(product => {
            res.json(product);
        })
    },


    showByKeyWord(req, res) {
        Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`
                }
            }
        }).then(productos => {
            res.json(productos);
        });
    },


    showAll(req, res) {
        console.log(req.role_id);
        if(req.role_id != 1 && req.status != "Aprobado"){
            res.json({ error: "No tienes permisos suficientes para este recurso."})
        }

        Product.findAll({ include: 'supplier' }).then(productos => {
            res.json(productos);
        })
    },


    showById(req, res) {
        Product.findByPk(req.params.id).then(productos => {
            res.json(productos);
        })
    },

    update(req, res) {
        Product.update({
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
        Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => {
            res.json(result);
        })
    }


}




