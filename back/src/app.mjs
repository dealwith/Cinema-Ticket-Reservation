import  User  from './models/User';

import express from 'express';
const app = express();

const port = 3000


// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

import bodyParser from 'body-parser';
// app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

// import morgan from 'morgan'
// app.use(morgan('combined'));

import Sequelize from 'sequelize';
const sequelize = new Sequelize('cinema', 'postgres', 'initial', {
    dialect: 'postgres',
    host: 'localhost'
});


sequelize.sync({force: false}).then(()=> {
    app.listen(3000, () => {
        console.log('Server is wating for connection ...')
    })
}).catch(err => console.log(err))
