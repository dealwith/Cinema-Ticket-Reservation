import User from './models/User';

export function createUser(user) {


    User.create({ email: user.email, password: user.password }).then(() => {
        res.redirect("/");
    }).catch(err => console.log(err));   
}

export function hasUser(user) {
    
}