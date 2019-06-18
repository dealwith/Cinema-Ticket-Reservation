const jwt = require('jsonwebtoken');
const SECRET_JWT = 'Gleb';
const User = require('../server');

const generateToken = (id) => {
    const token = jwt.sign({
        id,
        exp: Math.floor(Date.now() / 1000) + parseInt(configAuth.JWT.live)
    },
    SECRET_JWT)

    return {token: 'bearer' + token}
}

module.exports = login  = async (payload) => {
    const { email, password } = payload;
    
    const user = User.findOne({ where: { email: email } })

    if(!user.email && user.password) {
        return alert('not enought data')
    } else if(!user) {
        return alert('no user found');
    }

    return generateToken(user.id)
}

// module.exports = signup  = async (payload) => {
//     const { email, password } = payload;


//     const user = await User.findOne({ 'local.email': email });
//     if (!user)  {
//         return alert('this email is aleready taken')
//     } else {

//     }

// }