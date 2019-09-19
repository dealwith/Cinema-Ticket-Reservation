import React, { FormEvent } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { CitySelect, CinemaSelect, MovieSelect } from './select';
import Schedule from './schedule';
import { selectApi } from '../../api/select.js';


type OwnProps {
  match: object
}

interface OwnState {
  movie: object,
  citySelect?: string,
  cinemaSelect?: string,
  movieSelect?: string
}

class MoviePage extends React.Component<OwnProps, OwnState> {
  state: OwnState = {
    movie: {},
    citySelect: '',
    cinemaSelect: '',
    movieSelect: ''
  }

  //a lot of contolers for dynamic data loading
  handleCityChange = (event: FormEvent<HTMLSelectElement>): void => {
    const val: string = event.value;
    this.setState({ citySelect: val });
  }

  handleCinemaChange = (event: FormEvent<HTMLSelectElement>): void => {
    const val: string = event.value;
    this.setState({ cinemaSelect: val });
  }

  handleMovieChange = (event: FormEvent<HTMLSelectElement>): void => {
    const val: string = event.value;
    this.setState({ movieSelect: val });
  }

  getShedules = (): void => {
    const {
      citySelect: CITY_SELECT,
      cinemaSelect: CINEMA_SELECT,
      movieSelect: MOVIE_SELECT
    } = this.state;
    const { match: { params } } = this.props;

    selectApi(params.movieId, CITY_SELECT, CINEMA_SELECT, MOVIE_SELECT)
      .then(({ data: movieOnPage }) => this.setState({
        movie: movieOnPage
      }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getShedules();
  }

  render() {
    const movie: object = this.state.movie['movieOnPage'];
    const {
      citySelect: CITY_SELECT,
      cinemaSelect: CINEMA_SELECT,
      movieSelect: MOVIE_SELECT
    } = this.state;

    if (!movie) {
      return <h1>loading</h1>
    } else {
      return (
        <Container>
          <div className="movie-filter mb-3 d-flex justify-content-around">
            <CitySelect name='citySelect'
              value={CITY_SELECT}
              handleChange={this.handleCityChange}
            />
            <CinemaSelect name='cinemaSelect'
              value={CINEMA_SELECT}
              handleChange={this.handleCinemaChange}
            />
            <MovieSelect name='movieSelect'
              value={MOVIE_SELECT}
              handleChange={this.handleMovieChange}
            />
          </div>
          <div className='card mb-4'>
            <div className="row no-gutters">
              <div className="col md-5">
                <img src={movie.imgUrl} alt="" className="card-img rounded" />
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
}

export default MoviePage
