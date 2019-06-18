const express = require('express')
const router = express.Router();
const passport = require('passport');
const login = require('../services/auth');

router.post('/profile', passport.authenticate('jwt', { session: false }),
    function (req, res) {
        res.send(req.user.profile);
    }
);

router.post('/login', async (req, res) => {
    console.log(req.body);
    const response = await login(req.body);
    res.json(response);
});

// router.post(signup)

module.exports = router;