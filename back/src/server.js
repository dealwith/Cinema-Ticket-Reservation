const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/routers');

const PORT = 3000;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})