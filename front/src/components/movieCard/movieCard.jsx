import React from 'react'
import axios from 'axios';
import { isArray } from 'util';

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
                    movies: movies.data
                })
            })
    }
        

    componentDidMount(){
        this.getMovies()
    }

    render() {
        // const movieData = this.state.movies.map(((item, index) => {
        //     let arr = [`Name: ${item.name}, Url: ${item.ingUrl}`].join(' ');
        //     return arr
        // }))        
        return (
            <>
                <div className='movie-card-item' style={{width: '200px', height: '150px', backgroundColor: 'red'}}>
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