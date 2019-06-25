import React from 'react'

import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap'  
import { Row } from 'react-bootstrap'  

const ExtendedSearch = props => {
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
                            value={ props.state.city }
                            onChange={ props.handleInputChange }
                        />
                    </Col>
                </Form.Group>
                <Form.Group className='mb-1' as={Row} >
                    <Form.Label column="true" sm={4}>
                        Cinema
                    </Form.Label>
                    <Col column="true" sm={6}>
                        <Form.Control
                            nmae='cinema' 
                            type="text"
                            placeholder="Red star"
                            value={ props.state.cinema }
                            onChange={ props.handleInputChange }
                        />
                    </Col>
                </Form.Group>
                <Form.Group className='mb-1' as={Row} >
                    <Form.Label column="true" sm={4}>
                        Movie name
                    </Form.Label>
                    <Col column="true" sm={6}>
                        <Form.Control 
                            type="text" 
                            placeholder="Alladin" 
                            value={ props.state.query }
                            onChange={ props.state.query }/>
                    </Col>
                </Form.Group>
                <Form.Group className='mb-1' as={Row} >
                    <Form.Label column="true" sm={4}>
                        Available place(s)
                    </Form.Label>
                    <Col column="true" sm={6}>
                        <Form.Control 
                        type="number" 
                        placeholder="1" 
                        value={ props.state.seets }
                        onChange={ props.handleInputChange }
                    />
                    </Col>
                </Form.Group>
            </div>
        </div>
    )
}

export default ExtendedSearch