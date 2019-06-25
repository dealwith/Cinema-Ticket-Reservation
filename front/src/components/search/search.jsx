import React from 'react';
import ExtendedSearch from './extendedSeacrh';
import { Link } from "react-router-dom";
import Suggestions from './suggestions';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const API_URL = 'http://localhost:3000/search'


export default class Search extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            query: '',
            results: [],
            city: '',
            cinema: '',
            seets: ''
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

    handleInputChange = e => {
        const target = e.target;
        const name = target.name;
        const value = taarget.value; 
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
        axios.post()
    }

    componentDidMount(){
        this.search.current.focus()
    }

    render() {
        return (
            <Form className='d-flex justify-content-end' method='POST' inline>
                <div className="d-flex">
                    <div className='d-flex flex-column position-relative'>
                        <FormControl type="text" 
                            placeholder="Search"
                            ref={ this.search }
                            onChange={ this.handleInputChange }
                            value={ this.state.value }
                            className="mr-sm-2" />
                        { this.state.query.length === 0 ? '' : <Suggestions results={ this.state.results }/> }
                    </div>
                    <Button data-toggle="collapse"
                        data-target="#search-collapse"
                        aria-expanded="false"
                        aria-controls="search-collapse"
                        className='mr-3'>
                        extended search</Button>
                    <Link to="/search"><Button type="submit" onSubmit={ this.handleSubmit }>Submit</Button></Link>
                </div>
                <ExtendedSearch
                    onInputChange={ this.handleInputChange }/>
            </Form>
        )
    }
}

