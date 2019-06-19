const express = require('express')
const router = express.Router();
const passport = require('passport');
const {login, signup} = require('../services/auth');
const { PROFILE, LOGIN, SIGNUP} = require('../constants/constant')

router.post(PROFILE, passport.authenticate('jwt', { session: false }),
    (req, res) => res.send(req.user.profile)
);

router.post(LOGIN, (req, res) => {
    console.log(req.body);
    const response = login(req.body);
    res.json(response);
});

router.post(SIGNUP, async(req, res) => {
    console.log(req.body);
    const response = await signup(req.body);
    res.json(response);
})

module.exports = router;