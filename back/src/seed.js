
module.exports.seed = (City, Cinema, Movie, CinemaShedule) => {
    City.bulkCreate([
        { name: 'Minsk' },
        { name: 'Hrodno' }
    ]).catch(err => console.log(err))
    
Promise.all(
    [Movie.bulkCreate([
        {   name: 'Alladin', 
            imgUrl: 'https://media.kitag.com/filer_public_thumbnails/cinepool/assets/movies/1012.351/artworks/bad5a957cacaa4b7749fc5003ea9aa2bc6eae21b/lrg.png__650x935_q70.jpg', 
            rating: 57, 
            description: "Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer Jafar from overthrowing young Jasmine's kingdom."
        },
        {   name: 'Toy Story 4', 
            imgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg', 
            rating: 95, 
            description: "Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody's slight detour leads him to his long-lost friend Bo Peep. As Woody and Bo discuss the old days, they soon start to realize that they're worlds apart when it comes to what they want from life as a toy."
        },
        {   name: 'John Wick: Chapter 3 -- Parabellum', 
            imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/John_Wick_Chapter_3_Parabellum.png/220px-John_Wick_Chapter_3_Parabellum.png',
            rating: 66,
            description: "After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers."
        }
        ]), 
    Cinema.bulkCreate([
        { name: 'RedStar', cityId: 1 },
        { name: 'October', cityId: 2 }
        ])
    ]
).then( () => CinemaShedule.bulkCreate( [{
        movieId: 1,
        cinemaId: 1,
        dateTime: Date.now(),
        seats: 5
    },{
        movieId: 2,
        cinemaId: 1,
        dateTime: Date.now(),
        seats: 7
    },{
        movieId: 2,
        cinemaId: 2,
        dateTime: Date.now(),
        seats: 63
    }]));
}