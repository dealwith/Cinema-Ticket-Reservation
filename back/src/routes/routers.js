const express = require('express');
const router = express.Router();
const passport = require('passport');
const { login, signup } = require('../services/auth');
const { search } = require('../services/search');
const   {   PROFILE, 
            LOGIN, 
            SIGNUP, 
            MOVIES,
            MOVIES_ADD,
            MOVIE_BY_ID, 
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

router.post(LOGIN, async (req, res) => {
    const response = await login(req.body);
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

//movies
router.get(MOVIES, async (req, res) => {
    await Movie.findAll().then(movies => res.json(movies))
})

router.get(MOVIE_BY_ID, async (req, res, next) => {
        let movieId = req.params.id;
        let cityParam = req.query.city;
        let cinemaParam = req.query.cinema;
        let movieParam = req.query.movie;

        let cityAdd, cinemaAdd, movieAdd;

        if(cityParam) {
            cityAdd = await City.findAll({
                where: {
                    name: cityParam
                },
                include: [{
                    model: Cinema,
                    include: [{
                        model: CinemaShedule,
                    }]
                }]
            })
        }

        

        if(cinemaParam) {
            cinemaAdd = await Cinema.findOne({
                where: {
                    name: cinemaParam
                }
            })
        }

        if(movieParam) {
            movieAdd = await Movie.findAll({
                where: {
                    name: movieParam
                }
            })
        }

        const response = {
            movieAdd,
            cityAdd,
            cinemaAdd
        }

        res.send(response)
        await Movie.findByPk(movieId).then(result => res.json(result))
})

router.post(MOVIES_ADD, async (req, res) => {
    const { description, movieName, rating, imageUrl } = req.body;
    const newMovie = await Movie.create({
        description,
        name: movieName,
        rating,
        imgUrl: imageUrl,
    })
    res.send(newMovie)
})

router.get(CITIES, async (req,res) => {
    await City.findAll().then(cities => res.json(cities))
})

router.get(CINEMAS, async (req, res) => {
    await Cinema.findAll().then(cinemas => res.json(cinemas)) 
})


// Shedules
router.get('/admin/schedules', async (req, res) => {
    await City
            .findAll({
                include: [{
                    model: Cinema,
                    include: [{
                        model:Movie
                    }]
                }]
            })
            .then(x => res.json(x))
})

router.get('/city-select', async (req, res) => {
    let reqCityId = req.body.citySelect;
    await City.findAll({
        include: [
            {
                model: Cinema,
                where: {
                    cityId: reqCityId
                },
                include: [{
                    model: CinemaShedule,
                    include: [{
                        model: Movie
                    }]
                }]
            }
    ]
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