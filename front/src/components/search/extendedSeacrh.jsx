import React from 'react'

import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap'  
import { Row } from 'react-bootstrap'  

const ExtendedSearch = props => {
    const city = props.city;
    const cinema = props.cinema;
    const query = props.query;
    const seets = props.seets;
    let handleInputChange = props.handleInputChange;
    
    return (
        <div className="collapse multi-collapse mt-2 w-100" id="search-collapse">
            <div className="card card-body">
                <Form.Group className='mb-1' as={Row} >
                    <Form.Label column="true" sm={4}>
                        City
                    </Form.Label>
                    <Col column="true" sm={6}>
                        <Form.Control
                            name='city' 
                            type="text"
                            placeholder="Vacanda"
                            value={ city }
                            onChange={ handleInputChange }
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group className='mb-1' as={Row} >
                    <Form.Label column="true" sm={4}>
                        Cinema
                    </Form.Label>
                    <Col column="true" sm={6}>
                        <Form.Control
                            name='cinema' 
                            type="text"
                            placeholder="Red star"
                            value={ cinema }
                            onChange={ handleInputChange }
                        />
                    </Col>
                </Form.Group>
                <Form.Group className='mb-1' as={Row} >
                    <Form.Label column="true" sm={4}>
                        Movie name
                    </Form.Label>
                    <Col column="true" sm={6}>
                        <Form.Control 
                            name='query'
                            type="text" 
                            placeholder="Alladin" 
                            value={ query }
                            onChange={ handleInputChange }
                        />
                    </Col>
                </Form.Group>
                <Form.Group className='mb-1' as={Row} >
                    <Form.Label column="true" sm={4}>
                        Available place(s)
                    </Form.Label>
                    <Col column="true" sm={6}>
                        <Form.Control 
                            name='seets'
                            type="number" 
                            placeholder="1" 
                            value={ seets }
                            onChange={ handleInputChange }
                        />
                    </Col>
                </Form.Group>
            </div>
        </div>
    )
}

export default ExtendedSearch