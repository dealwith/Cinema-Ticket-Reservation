import React, { Component } from 'react';
import ExtendedSearch from './extended-seacrh'

import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <Form className='d-flex justify-content-end' inline>
                    <div className="d-flex">
                        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
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

