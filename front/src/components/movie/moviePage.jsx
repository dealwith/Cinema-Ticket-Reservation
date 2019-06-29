import React from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import MOVIE_API from '../../constants/constants'


class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movie: {} };
    }

    getData = () => {
        const { match: {params} } = this.props;

        axios
            .get(`http://localhost:3000/movies/${params.movieId}`)
            .then(({ data: movie}) => {
                this.setState({movie})
            })
            .catch(err => err.data)
    }

    componentDidMount = () => {
        this.getData()
    }
    
    render() {
        const movie = this.state.movie;
        return (
            <Container>
                <div className='card' style={{height: 'auto'}}>
                    <div className="row no-gutters">
                        <div className="col md-4">
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
            </Container>
        )
    }
}

export default MoviePage
