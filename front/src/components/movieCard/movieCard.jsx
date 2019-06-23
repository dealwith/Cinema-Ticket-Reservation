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
        const url = 'http://localhost:3000/movie';
        axios
            .get(url)
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
        let movies = this.state.movies.map((item, index) => 
            <div className='movie-card-item' key={item.id}>
                <div className="movie-card-item__img">
                    <img src={item.imgUrl} alt=""/>
                </div>
                <div className="movie-card-item__title">
                    <h4>{item.name}</h4>
                </div>
                <div className="movie-card-item__date">

                </div>
                <div>
                    Gleb's rating {item.rating}%
                </div>
            </div>
        )
        return (
            <>
                {movies}    
            </>
        )
    }
}