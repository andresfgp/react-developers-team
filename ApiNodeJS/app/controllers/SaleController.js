const { Sale } = require('../models/index');
const Sequelize = require('sequelize');

module.exports = {
    create(req, res) {
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
        Sale.findByPk(req.params.id,{ include: ['product', 'user', 'customer'] }).then(ventas => {
            res.json(ventas);
        })
     },

    update(req, res) {
        Sale.update({
            description: req.body.description,
            finalPaymentDate: req.body.finalPaymentDate,
            initialPaymentDate: req.body.initialPaymentDate,
            saleQuantity: req.body.saleQuantity,
            saleValue: req.body.saleValue,
            state: req.body.state,
            totalSaleValue: req.body.saleValue * req.body.saleQuantity,
            customer_id: req.body.customer_id,
            product_id: req.body.product_id,
            user_id: req.body.user_id,
            client: req.body.client
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