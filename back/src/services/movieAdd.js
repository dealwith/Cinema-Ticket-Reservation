module.exports.movieAdd = async (payload, { Movie }) => {
    const { description, name, rating, imgUrl } = payload;
    const newMovie = await Movie.create({
        description,
        name,
        rating,
        imgUrl,
    })

    return newMovie;
}