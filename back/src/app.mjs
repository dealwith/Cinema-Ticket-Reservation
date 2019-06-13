import  User  from './models/User';
import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';
import cors from 'cors';


const sequelize = new Sequelize('cinema', 'postgres', 'initial', {
    dialect: 'postgres',
    host: 'localhost'
});
const PORT = 3000;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get('/', (req, res) => res.send('Hello World!'))

sequelize.sync({force: false}).then(()=> {
    app.listen(PORT, () => {
        console.log('Server is wating for connection ...')
    })
}).catch(err => console.log(err))
