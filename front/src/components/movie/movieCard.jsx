import React from 'react'
import axios from 'axios';
import { MOVIES_API } from '../../constants/constants';


export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movies: [],
        }
    }

    getMovies = () => {
        axios
            .get(MOVIES_API)
            .then(response => {
                let arr = response.data;
                this.setState({movies: arr})
            })
            .catch(err => console.log(err))
    }

    

    componentDidMount(){
        this.getMovies()
    }

    render() {
        let movies = this.state.movies.map(movie => 
            <a href={'/movies/' + movie.id} onClick={ this.handleClick } key={movie.id}>
                <div className='movie-card-item card'>
                    <div className="movie-card-item__img">
                        <img src={movie.imgUrl} alt=""/>
                    </div>
                    <div className="movie-card-item__title">
                        <h4>{movie.name}</h4>
                    </div>
                    <div>
                        Gleb's rating {movie.rating}%
                    </div>
                </div>
            </a>
        )
        return (
            <>
                {movies}    
            </>
        )
    }
}