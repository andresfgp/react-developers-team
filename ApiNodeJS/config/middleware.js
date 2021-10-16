const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    if(!req.headers['user-token']){
        return res.json({ error: 'Necesitas un token para acceder a este recurso.'});
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try{
        payload = jwt.decode(userToken, 'equipodeveloopers');
    }catch(err){
        return res.json({ error: 'El token es incorrecto' });
    }

    if(payload.expired_at < moment().unix()){
        return res.json( {error: 'El token ha expirado'});
    }

    req.role_id = payload.user_role
    req.status = payload.user_status
    next();
}

module.exports = {
    checkToken: checkToken
}