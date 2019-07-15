const express = require('express');
const router = express.Router();
const { Movie, City, Cinema, CinemaShedule } = require('../sequelize');
const passport = require('passport');
const route = require('../constants/paths');
const { login, signup } = require('../services/auth');
const { search, searchSuggestion } = require('../services/search');
const filter = require('../services/filterMovies').filter;
const movieAdd = require('../services/movieAdd').movieAdd;
const findSchedules = require('../services/shedules.js').findSchedules;
const Op = require('../sequelize').Op;


// AUTHENTICATE
router.post(route.PROFILE, passport.authenticate('jwt', { session: false }),
    (req, res) => res.send(req.user.profile)
);

router.post(route.LOGIN, async (req, res) => {
    const response = await login(req.body);
    res.json(response);
});

router.post(route.SIGNUP, async(req, res) => {
    const response = await signup(req.body);
    res.json(response);
})

// SEARCH
router.get('/', async (req, res) => {
    const response = await searchSuggestion(req.query);
    res.json(response)
})

router.post(route.SEARCH, async (req, res) => {
    const response = await search(req.body);
    res.json(response);
})

// MOVIES
router.get(route.MOVIES, async (req, res) => {
    await Movie.findAll().then(movies => res.json(movies))
})

router.get(route.MOVIE_BY_ID, async (req, res) => {
    const response = await filter(req.query, req.params, 
        { Movie, City, Cinema, CinemaShedule });
    res.send(response);
})

router.post(route.MOVIES_ADD, async (req, res) => {
    const response = await movieAdd(req.body, { Movie })
    res.send(response)
})

// CITIES
router.get(route.CITIES, async (req,res) => {
    await City.findAll().then(cities => res.json(cities))
})

//CINEMAS
router.get(route.CINEMAS, async (req, res) => {
    await Cinema.findAll().then(cinemas => res.json(cinemas)) 
})

// SCHEDULES
router.get(route.SCHEDULES, async (req, res) => {
    const response = await findSchedules({ City, Cinema, Movie });
    res.json(response);
})

module.exports = { router };

// CITYSELECT
// router.get(route.CITY_SELECT, async (req, res) => {


//     let reqCityId = req.body.citySelect;
//     await City.findAll({
//         include: [
//             {
//                 model: Cinema,
//                 where: {
//                     cityId: reqCityId
//                 },
//                 include: [{
//                     model: CinemaShedule,
//                     include: [{
//                         model: Movie
//                     }]
//                 }]
//             }
//     ]
//     })
//     .then(shedules => res.json(shedules))
// })

// CINEMA SELECT
// router.get(route.CINEMA_SELECT, async (req, res) => {
//     let reqCityId = req.body.citySelect;
//     let reqCinemaId = req.body.cinemaSelect;
//     await Cinema.findAll({
//         where: {
//             id: reqCinemaId,
//             cityId: reqCityId
//         }
//     })
//     .then(shedules => res.json(shedules))
// })