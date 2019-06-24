const express = require('express')
const router = express.Router();
const passport = require('passport');
const { login, signup } = require('../services/auth');
// const { movieNameSearch } = require('../services/movieNameSearch');
const { PROFILE, LOGIN, SIGNUP, MOVIE } = require('../constants/constant');
const { Movie } = require('../sequelize');
const { Op } = require('../sequelize');

router.post(PROFILE, passport.authenticate('jwt', { session: false }),
    (req, res) => res.send(req.user.profile)
);

router.post(LOGIN, (req, res) => {
    // console.log(req.body);
    const response = login(req.body);
    res.json(response);
});

router.post(SIGNUP, async(req, res) => {
    // console.log(req.body);
    const response = await signup(req.body);
    res.json(response);
})

router.get(MOVIE, async(req, res) => {
    await Movie.findAll().then(movies => res.json(movies))
})

router.get('/search', async (req, res) => {
    let q  = req.query.search
    let suggestions = await Movie.findAll({ where: { name: { [Op.iLike]: '%' + q + '%' } }})
    res.json(suggestions)
})


module.exports = { router };