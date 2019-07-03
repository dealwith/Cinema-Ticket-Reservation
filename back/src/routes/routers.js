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
router.get('/city-select', async (req, res) => {
    let reqCityId = req.body.citySelect;
    await City.findAll({
        include: [{
            model: Cinema,
            where: {
                cityId: reqCityId
            },
            include: [{
                model: CinemaShedule,
            }]
        }]
    })
    .then(shedules => res.json(shedules))
})

router.get(MOVIES + '/filter?', async (req, res) => {
    // let reqCityId = req.query.citySelect;

    let city = req.query.city;
    let cinema = req.query.cinema;
    let movie = req.query.movie;

    res.send(city, cinema, movie)
    // console.log(cinema)
    // console.log(movie)
    
    // await City.findAll({
    //     include: [{
    //         model: Cinema,
    //         where: {
    //             cityId: reqCityId
    //         },
    //         include: [{
    //             model: CinemaShedule,
    //         }]
    //     }]
    // })
    //     .then(shedules => res.json(shedules))
})

router.get('/cinema-select', async (req, res) => {
    let reqCityId = req.body.citySelect;
    let reqCinemaId = req.body.cinemaSelect;
    await Cinema.findAll({
        where: {
            id: reqCinemaId,
            cityId: reqCityId
        }
    })
    .then(shedules => res.json(shedules))
})

module.exports = { router };