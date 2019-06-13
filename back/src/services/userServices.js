
import User from '../models/User';

export function createUser(user) {
    User.create({
        email: user.email,
        password: user.password
    }).then(() => {
        res.redirect("/");
    }).catch(err => console.log(err));
}

export const hasUser = (req, res) => {
    // User.findOne({ where: { email: user.email } })
    //     .then(res => alert('Welcome'))
    //     .catch(err => alert(err.data))

    res.send(true);
}