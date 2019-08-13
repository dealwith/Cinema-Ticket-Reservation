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
            seats: 1
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
        const { name, value } = event.target
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
        let { movieName, cinema, city, seats } = this.state;
        
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
      const { value, results, query, city, cinema, seats } = this.state
        return (
            <Form className='d-flex justify-content-end' onSubmit={ this.handleSubmit } method='POST' inline>
                <div className="d-flex">
                    <div className='d-flex flex-column position-relative'>
                        <FormControl type="text" 
                            name='query'
                            placeholder="Search"
                            ref={ this.search }
                            onChange={ this.handleInputChange }
                            value={ value }
                            className="mr-sm-2"
                            autoComplete="off" 
                        />
                        { query.length === 0 ? null : <Suggestions results={ results } /> }
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
                    city={ city }
                    cinema={ cinema }
                    query={ query }
                    seats={ seats }
                    handleInputChange={ this.handleInputChange }
                />
            </Form>
        )
    }
}

