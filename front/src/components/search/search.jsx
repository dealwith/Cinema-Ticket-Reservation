import React, { Component } from 'react';
import ExtendedSearch from './extendedSeacrh';
import Suggestion from './suggestion';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const API_URL = 'http://localhost:3000/movie'


export default class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            query: '',
            results: []
        }
        this.search = React.createRef();
    }

    getSuggestions = () => {
        axios.get(`${API_URL}?search=${this.state.query}`)
            .then(movies => {
                this.setState({
                    results: movies.data
                })
            }) 
    }

    handleChange = () => {
        this.setState({
            query: this.search.current.value
        }, () => {
            if(this.state.query && this.state.query.length > 1) {
                if(this.state.query.length % 2 === 0) {
                    this.getSuggestions()
                }
            }
        })
    }

    componentDidMount(){
        this.search.current.focus()
    }

    render() {
        return (
            <div>
                <Form className='d-flex justify-content-end' inline>
                    <div className="d-flex">
                        <div className='d-flex flex-column'>
                            <FormControl type="text" 
                                placeholder="Search"
                                ref={ this.search }
                                onChange={ this.handleChange }
                                value={ this.state.value }
                                className="mr-sm-2" />
                            <Suggestion/>
                        </div>
                        <Button data-toggle="collapse"
                            data-target="#search-collapse"
                            aria-expanded="false"
                            aria-controls="search-collapse"
                            className='mr-3'>
                            extended search</Button>
                        <Button type="submit">Submit</Button>
                    </div>
                    <ExtendedSearch />
                </Form>
                
            </div>
        )
    }
}

