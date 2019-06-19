const Sequelize = require('sequelize')
const UserModel = require('./models/User')


const sequelize = new Sequelize('cinema', 'postgres', 'initial', {
    dialect: 'postgres',
    host: 'localhost'
}); 

const User = UserModel(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync({force: false})
    .then(() => {
      console.log(`Database & tables created!`)
    })

module.exports = {
    User
}