import React from 'react';
import { Container} from 'react-bootstrap';
import axios from 'axios';
import { CitySelect, CinemaSelect, MovieSelect } from './select';
import Schedule from './schedule';


class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            movie: {},
            citySelect: '',
            cinemaSelect: '',
            movieSelect: ''
        };
    }

    getMovie = () => {
        const { match: {params} } = this.props;

        axios
            .get(`http://localhost:3000/movies/${params.movieId}`)
            .then(({ data: movie}) => {
                this.setState({movie})
            })
            .catch(err => err.data)
    }


    handleCityChange = e => {
        const val = e.value;
        this.setState({ citySelect: val })
        console.log(e);
    }

    handleCinemaChange = e => {
        const val = e.value;
        this.setState({ cinemaSelect: val })
        console.log(e);
    }

    handleMovieChange = e => {
        const val = e.value;
        this.setState({ movieSelect: val })
        console.log(e);
    }

    

    getShedules = () => {
        const state = this.state;
        const CITY_SELECT = state.citySelect;
        const CINEMA_SELECT = state.cinemaSelect
        const MOVIE_SELECT = state.movieSelect;
        
        axios
            .get(`http://localhost:3000/movies/:id?city=${CITY_SELECT}&cinema=${CINEMA_SELECT}&movie=${MOVIE_SELECT}`)
            .then(result => console.log(result))
    }

    componentDidMount() {
        this.getMovie();
    }

    componentDidUpdate(prevProps, prevState) {
        this.getShedules();
    }
    
    
    render() {

        const state = this.state;
        const movie = state.movie;
        const CITY_SELECT = state.citySelect;
        const CINEMA_SELECT = state.cinemaSelect
        const MOVIE_SELECT = state.movieSelect;
        
        return (
            <Container>
                <div className="movie-filter mb-3 d-flex justify-content-around">
                    <CitySelect name='citySelect' 
                                value={ CITY_SELECT } 
                                handleChange={ this.handleCityChange } 
                    />
                    <CinemaSelect   name='cinemaSelect' 
                                    value={ CINEMA_SELECT } 
                                    handleChange={this.handleCinemaChange} 
                    />
                    <MovieSelect    name='movieSelect' 
                                    value={ MOVIE_SELECT }      
                                    handleChange={this.handleMovieChange} 
                    />
                </div>
                <div className='card mb-4' style={{height: 'auto'}}>
                    <div className="row no-gutters">
                        <div className="col md-5">
                            <img src={movie.imgUrl} alt="" className="card-img rounded" style={{maxHeight: 500, objectFit: 'contain'}}/>
                        </div>
                        <div className="col md-8">
                            <div className="card-body">
                                <h2 className="card-tittle">{movie.name}</h2>
                                <p className="card-text">{movie.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cinema-schedules">
                    <Schedule />
                </div>
            </Container>
        )
    }
}

export default MoviePage
