import React from 'react';
import { Container} from 'react-bootstrap';
import axios from 'axios';
import { CitySelect, CinemaSelect, MovieSelect } from './select';
import Shedule from './shedule';


class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            movie: {} 
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

    handleCityChange = () => {
        axios.post('http://localhost:3000/city-select')
    }

    componentDidMount = () => {
        this.getMovie()
    }
    
    render() {
        const movie = this.state.movie;

        return (
            <Container>
                <div className="movie-filter mb-3 d-flex justify-content-around">
                    <CitySelect handleCityChange={ this.handleCityChange }/>
                    <CinemaSelect />
                    <MovieSelect />
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
                    <Shedule />
                </div>
            </Container>
        )
    }
}

export default MoviePage
