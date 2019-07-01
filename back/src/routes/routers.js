const express = require('express')
const router = express.Router();
const passport = require('passport');
const { login, signup } = require('../services/auth');
const { search } = require('../services/search');
const { PROFILE, LOGIN, SIGNUP, MOVIES } = require('../constants/constant');
const { Movie, City, Cinema, CinemaShedule } = require('../sequelize');
const { Op } = require('../sequelize');

//authenticate
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

//search
router.get('/', async (req, res) => {
    let q  = req.query.search
    let suggestions = await Movie.findAll({ where: { name: { [Op.iLike]: '%' + q + '%' } }})
    res.json(suggestions)
})

router.post('/search', async (req, res) => {
    const response = await search(req.body);
    res.json(response);
})

router.get(MOVIES, async (req, res) => {
    await Movie.findAll().then(movies => res.json(movies))
})

router.get(MOVIES + '/:id', async (req, res) => {
        let id = req.params.id;
        const response = await Movie.findByPk(id)
        res.send(response)
})

router.get('/cities', async (req,res) => {
    await City.findAll().then(cities => res.json(cities))
})

router.get('/cinemas', async (req, res) => {
    await Cinema.findAll().then(cinemas => res.json(cinemas)) 
})

// cinemaShedule
router.post('/city-select', async (req, res) => {
    await CinemaShedule.findAll({
        where: {
            
        }
    }).then(x => res.json(x))
})

module.exports = { router };