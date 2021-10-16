const { User } = require('../models/index');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');


const createToken = (user) =>{
    const payload = {
        user_id: user.id,
        user_role: user.role_id,
        user_status: user.status,
        created_at: moment().unix(),
        expired_at: moment().add(15, 'minutes').unix()
    }

    return jwt.encode(payload, 'equipodeveloopers');
}

module.exports = {
    create(req, res) {
        console.log('req', req.body);
        req.body.password = bcrypt.hashSync(req.body.password, 10);
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

    async login(req, res) {
        const user = await User.findOne({ where: { username: req.body.username }});
        if(user){
            const samePw = bcrypt.compareSync(req.body.password, user.password);
            if(samePw){
                res.json( { success: createToken(user) })
            }else{
                res.json({ error: 'Error en usuario y/o contraseña'});
            }
        }else{
            res.json({ error: 'Error en usuario y/o contraseña'});
        }
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