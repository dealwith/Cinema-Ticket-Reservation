import User from './models/User';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

export function createUser(user) {
    User.create({ 
        email: user.email, 
        password: user.password 
    }).then(() => {
        res.redirect("/");
    }).catch(err => console.log(err));   
}

export const hasUser = (user) => {
    User.findOne({where: { email: user.email }})
        .then(res => alert('Welcome'))
        .catch(err => alert(err.data))
}