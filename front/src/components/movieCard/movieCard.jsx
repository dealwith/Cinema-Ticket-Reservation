import React from 'react'
import axios from 'axios';

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movies: [],
        }
    }

    getMovies(){
        const url = 'http://localhost:1234/movie';
        axios
            .get(url)
            .then(movies => {
                console.log(movies.data);
                this.setState({
                    movies: movies
                })
            })
    }
        

    componentDidMount(){
        this.getMovies()
    }

    render() {
        const movieData = this.state.movies;
        console.log(movieData)
        // movieData.map((item, index) => {
        //     console.log(item, index);
        // })
        return (
            <>
                <div className='movie-card-item'>
                    <div className="movie-card-item__img">
                        
                    </div>
                    <div className="movie-card-item__title">
                        
                    </div>
                    <div className="movie-card-item__date">
        
                    </div>
                </div>
            </>
        )
    }
}