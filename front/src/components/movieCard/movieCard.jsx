import React from 'react'


export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }

    getMovies(){
        axios.get('http')
    }

    componentDidMount(){
        this.getMovies()      
    }

    render() {
        return (
            <div className='movie-card-item'>
                <div className="movie-card-item__img">
                    
                </div>
                <div className="movie-card-item__title">
                    
                </div>
                <div className="movie-card-item__date">
    
                </div>
            </div>
        )
    }
}