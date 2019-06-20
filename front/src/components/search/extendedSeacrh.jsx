import React, { Component } from 'react'

import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap'  
import { Row } from 'react-bootstrap'  

export class ExtendedSearch extends Component {
    render() {
        return (
            <div className="collapse multi-collapse mt-2 w-100" id="search-collapse">
                <div className="card card-body">
                    <Form.Group as={Row} >
                        <Form.Label column="true" sm={4}>
                            City
                        </Form.Label>
                        <Col column="true" sm={6}>
                            <Form.Control type="text" placeholder="Vacanda" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column="true" sm={4}>
                            Cinema
                        </Form.Label>
                        <Col column="true" sm={6}>
                            <Form.Control type="text" placeholder="Red star" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column="true" sm={4}>
                            Movie name
                        </Form.Label>
                        <Col column="true" sm={6}>
                            <Form.Control type="text" placeholder="Alladin" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column="true" sm={4}>
                            Available place(s)
                        </Form.Label>
                        <Col column="true" sm={6}>
                            <Form.Control type="number" placeholder="1" />
                        </Col>
                    </Form.Group>
                </div>
            </div>
        )
    }
}

export default ExtendedSearch