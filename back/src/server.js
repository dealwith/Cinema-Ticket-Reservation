const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cors = require('cors');
const router = require('./routes/routers');
// const User = require('./models/User');


const sequelize = new Sequelize('cinema', 'postgres', 'initial', {
    dialect: 'postgres',
    host: 'localhost',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const PORT = 3000;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);


app.get('/', (req, res) => res.send('Hello World!'))

const User = sequelize.define('User', {
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
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

User
    .sync({ force: true })
    .then(()=> {
        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`)
        })
    })
    .catch(err => console.log(err))

module.exports = { User };