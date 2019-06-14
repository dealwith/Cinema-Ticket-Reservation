const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:initial@localhost:54499/cinema');

class User extends Sequelize.Model {};
User.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user'
})

User.create({
    email: 'a',
    password: '123'
})

module.exports = User