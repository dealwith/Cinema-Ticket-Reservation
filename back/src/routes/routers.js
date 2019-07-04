const express = require('express');
const router = express.Router();
const passport = require('passport');
const { login, signup } = require('../services/auth');
const { search } = require('../services/search');
const   {   PROFILE, 
            LOGIN, 
            SIGNUP, 
            MOVIES, 
            SEARCH, 
            CINEMAS, 
            CITIES
        } = require('../constants/constant');
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

router.post(SEARCH, async (req, res) => {
    const response = await search(req.body);
    res.json(response);
})

router.get(MOVIES, async (req, res) => {
    await Movie.findAll().then(movies => res.json(movies))
})

router.get(MOVIES + '/:id', async (req, res, next) => {
        let id = req.params.id;
        const response = await Movie.findByPk(id)
        res.send(response)
})

router.get(CITIES, async (req,res) => {
    await City.findAll().then(cities => res.json(cities))
})

router.get(CINEMAS, async (req, res) => {
    await Cinema.findAll().then(cinemas => res.json(cinemas)) 
})

router.get(MOVIES, (req, res) => {

    // let reqCityId = req.query.citySelect;
    let city = req.params.city;
    // let cinema = req.query.cinema;
    // let movie = req.query.movie;

    // res.send(city, cinema, movie)
    // res.json(city, cinema, movie)
    // await res.json(city, cinema. movie)
    console.log(city)
    res.send(city)
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