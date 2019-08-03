const jwt = require('jsonwebtoken');
const { User } = require('../sequelize');
const SECRET_JWT = 'Gleb';

const generateToken = (id) => {
    const token = jwt.sign({
        id,
        exp: Math.floor(Date.now() / 1000) + parseInt(1)
    },
    SECRET_JWT)

    return {token: 'bearer ' + token}
}


module.exports.login  = (payload) => {
    const { email, password } = payload;
    
    try{
        if (!email || !password) {
            return { message: 'Not enough data' }
        } else if (!user) {
            return { message: 'No user found' };
        }else {
            const user = User.findOne({ where: { email: email, password: password } })
            return generateToken(user.id)
        }      
    } catch(e) {
        console.error(e);
        return { message: 'Authentication failed.'}
    }
    
}

module.exports.signup  = async(payload) => {
    const { email, password } = payload;

    try{
        const user = await User.findOne({where: { email: email }})
        if (user) return {message: 'That email is already taken.'};
        
        const newUser = await User.create({
            email,
            password
        });

        return generateToken(newUser.id)

    } catch(e) {
        console.error(e);
        return {message: 'Registration failed'};
    }
}