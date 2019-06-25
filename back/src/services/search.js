const Movie = require('../sequelize'); 

module.exports.search  = async (payload) => {
    const { name, cinema, city, seets } = payload;

    const movies = await Movie.findAll({
        where: {
            name: 
        }
    })
}