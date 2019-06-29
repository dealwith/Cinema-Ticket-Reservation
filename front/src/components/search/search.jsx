import React from 'react';
import ExtendedSearch from './extendedSeacrh';
import Suggestions from './suggestions';
import { Form , FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import { SEARCH_URL, MAIN_URL } from '../../constants/constants';
import { history } from '../../index'


export default class Search extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            query: '',
            results: [],
            city: '',
            cinema: '',
            seats: 1,
            toSearch: false
        }
        this.search = React.createRef();
    }

    getSuggestions = () => {
        axios.get(`${MAIN_URL}?search=${this.state.query}`)
            .then(movies => {
                this.setState({
                    results: movies.data
                })
            }) 
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value; 
        this.setState({
            query: this.search.current.value,
            [name]: value
        }, () => {
            if(this.state.query && this.state.query.length > 0) {
                this.getSuggestions()   
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let movieName = this.state.query;
        let cinema = this.state.cinema;
        let city = this.state.city;
        let seats = this.state.seats;
        
        const search = {
            movieName,
            cinema,
            city,
            seats
        }

        axios.post(SEARCH_URL, search)
            .then(x => console.log(x))
            .then(() => history.push('/search'))
            .catch(err => console.log(err))
    }

    componentDidMount(){
        this.search.current.focus()
    }

    render() {
        return (
            <Form className='d-flex justify-content-end' onSubmit={ this.handleSubmit } method='POST' inline>
                <div className="d-flex">
                    <div className='d-flex flex-column position-relative'>
                        <FormControl type="text" 
                            name='query'
                            placeholder="Search"
                            ref={ this.search }
                            onChange={ this.handleInputChange }
                            value={ this.state.value }
                            className="mr-sm-2"
                            autoComplete="off" 
                        />
                        { this.state.query.length === 0 ? null : <Suggestions results={ this.state.results } /> }
                    </div>
                    <Button data-toggle="collapse"
                            data-target="#search-collapse"
                            aria-expanded="false"
                            aria-controls="search-collapse"
                            className='mr-3'
                    >
                        extended search
                    </Button><Button type="submit">Submit</Button>
                </div>
                <ExtendedSearch
                    city={ this.state.city }
                    cinema={ this.state.cinema }
                    query={ this.state.query }
                    seats={ this.state.seats }
                    handleInputChange={ this.handleInputChange }
                />
            </Form>
        )
    }
}

