import  User  from './models/User.js';
import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';
import cors from 'cors';
import routes from './controlers/userControler';


const sequelize = new Sequelize('cinema', 'postgres', 'initial', {
    dialect: 'postgres',
    host: 'localhost'
});
const PORT = 3000;
const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.get('/', (req, res) => res.send('Hello World!'))

sequelize.sync({force: false}).then(()=> {
    app.listen(PORT, () => {
        console.log('Server is wating for connection ...')
    })
}).catch(err => console.log(err))
