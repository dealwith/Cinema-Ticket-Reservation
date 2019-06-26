
module.exports.seed = (City, Cinema, Movie, CinemaShedule) => {
    City.bulkCreate([
        { name: 'Minsk' },
        { name: 'Hrodno' }
    ]).catch(err => console.log(err))
    
Promise.all(
    [Movie.bulkCreate([
        { name: 'Alladin', imgUrl: 'https://media.kitag.com/filer_public_thumbnails/cinepool/assets/movies/1012.351/artworks/bad5a957cacaa4b7749fc5003ea9aa2bc6eae21b/lrg.png__650x935_q70.jpg', rating: 57},
        { name: 'Toy Story 4', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg', rating: 95 },
        { name: 'John Wick: Chapter 3 -- Parabellum', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/John_Wick_Chapter_3_Parabellum.png/220px-John_Wick_Chapter_3_Parabellum.png', rating: 66 }
        ]), 
    Cinema.bulkCreate([
        { name: 'Red Star', cityId: 1 },
        { name: 'October', cityId: 2 }
        ])
    ]
).then( ( [ movie, cinema ] ) => CinemaShedule.create( {movieId: movie.id, cinemaId: cinema.id} ) )
}

