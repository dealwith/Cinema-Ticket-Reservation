const User = require('./models/User');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const cors = require('cors');
const router = require('./routes/routers');


const sequelize = new Sequelize('cinema', 'postgres', 'initial', {
    dialect: 'postgres',
    host: 'localhost'
});
const PORT = 3000;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broken')
})

app.get('/', (req, res) => res.send('Hello World!'))

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


sequelize   
    .sync({force: true})
    .then(()=> {
        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`)
        })
    })
    .catch(err => console.log(err))