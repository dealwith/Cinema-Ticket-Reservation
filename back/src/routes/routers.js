const express = require('express')
const router = express.Router();
const passport = require('passport');
const { login, signup } = require('../services/auth');
const { search } = require('../services/search');
const { PROFILE, LOGIN, SIGNUP, MOVIE } = require('../constants/constant');
const { Movie } = require('../sequelize');
const { Op } = require('../sequelize');

router.post(PROFILE, passport.authenticate('jwt', { session: false }),
    (req, res) => res.send(req.user.profile)
);

router.post(LOGIN, (req, res) => {
    const response = login(req.body);
    res.json(response);
});

router.post(SIGNUP, async(req, res) => {
    const response = await signup(req.body);
    res.json(response);
})

router.get(MOVIE, async(req, res) => {
    await Movie.findAll().then(movies => res.json(movies))
})

router.get('/', async (req, res) => {
    let q  = req.query.search
    let suggestions = await Movie.findAll({ where: { name: { [Op.iLike]: '%' + q + '%' } }})
    res.json(suggestions)
})

router.post('/search', async (req, res) => {
    const response = await search(req.body);
    res.json(response);
})

module.exports = { router };