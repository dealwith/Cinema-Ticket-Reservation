module.exports.filter = async (query, params, {
                                    Movie, 
                                    City, 
                                    Cinema, 
                                    CinemaShedule
                                }) => {
    let { id: movieId } = params;
    let { city: cityParam, cinema: cinemaParam, movie: movieParam } = query;
    let cityAdd, cinemaAdd, movieAdd, movieOnPage;

    movieOnPage = await Movie
        .findByPk(movieId);

    if (cityParam) {
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

    if (cinemaParam) {
        cinemaAdd = await Cinema.findOne({
            where: {
                name: cinemaParam
            }
        })
    }

    if (movieParam) {
        movieAdd = await Movie.findAll({
            where: {
                name: movieParam
            }
        })
    }

    const result = {
        movieAdd,
        cityAdd,
        cinemaAdd,
        movieOnPage
    }

    return result
} 