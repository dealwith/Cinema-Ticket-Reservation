const { Op, Movie, City, CinemaShedule, Cinema } = require('../sequelize'); 

module.exports.search  = async (payload) => {
    const { movieName, cinema, city, seats } = payload;
    const request = {};

    if(cinema) {
        const cityObject = await City.findOne({
            where: {
                name: city
            }
        })

        const cinemaObject = await Cinema.findOne({
            where: {
                cityId: cityObject.id
            }
        })
        request.cinemaId  = cinemaObject.id;
    }

    if(movieName) {
        const movieObject = await Movie.findOne({
            where: {
                name: movieName
            }
        })
        request.movieId = movieObject.id;
    }

    if(seats) {
        const seatsObject = await CinemaShedule.findOne({
            where: {
                seats: seats
            }
        })
        request.seats = seatsObject.seats
    }
    

    const sessions = {
        where: {
            cinemaId: request.cinemaId,
            movieId: request.movieId,
            seats: request.seats
        }
    };

    const cityObject = await City.findOne({
        where: {
            name: city
        }
    })

    const cinemaSheduleObject = await CinemaShedule.findAll(sessions);
    return cinemaSheduleObject;
}

module.exports.searchSuggestion = async (payload) => {
    const { search } = payload;
    let suggestions = await Movie.findAll({ 
        where: { 
            name: { 
                [Op.iLike]: '%' + search + '%' 
            } 
        } 
    })
    return suggestions
}