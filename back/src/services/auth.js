const User = require('../models/User');
const jwt = require('jsonwebtoken');

const SECRET_JWT = 'Gleb'

const generateToken = (id) => {
    const token = jwt.sign({
        id,
        exp: Math.floor(Date.now() / 1000) + parseInt(configAuth.JWT.live)
    },
    SECRET_JWT)

    return {token: 'bearer' + token}
}

module.exports = function createUser(user) {
    User.create({
        email: user.email,
        password: user.password
    }).then(() => {
        res.redirect("/");
    }).catch(err => console.log(err));
}

exports.hasUser = (req, res) => {
    

    res.send(true);
}


module.exports = login  = (payload) => {
    const { email, password } = payload;
    
    User.findOne({ where: { email: email } }).then(us => {
        console.log(us);
    })
}