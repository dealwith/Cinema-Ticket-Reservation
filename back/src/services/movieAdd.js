module.exports.movieAdd = async (payload, { Movie }) => {
    const { description, movieName, rating, imageUrl } = payload;
    const newMovie = await Movie.create({
        description,
        name: movieName,
        rating,
        imgUrl: imageUrl,
    })

    return newMovie;
}