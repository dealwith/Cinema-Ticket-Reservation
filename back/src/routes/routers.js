const Router = require('express').Router;
// const login = require('../services/auth').login;
// const * as authService = require("../services/auth");
// const passportJwt = require('passport-jwt');
const router = Router();

router.get('/profile', /* passportJwt.authenticate('jwt'), */ (req, res, next) => {
    console.log(req.body.email);
})

router.post('/login', (req, res) => {
    console.log('hello');
    /* const response = */ authService.login(req.body);
    // res.json(response);
})

// router.post(signup)

module.exports = router;