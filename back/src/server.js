const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { router, movieRouter } = require('./routes/routers');
const PORT = 3000;
const app = express();


app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.use('/movie', movieRouter);
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})