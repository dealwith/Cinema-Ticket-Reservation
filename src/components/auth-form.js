import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class AuthForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            pass: ''
        }
        this.emailHandleChange = this.emailHandleChange.bind(this);
        this.passwordHandleChange = this.passwordHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    emailHandleChange(event)  {
        this.setState({
            email: event.target.value
        })
    }

    passwordHandleChange(event) {
        this.setState({
            pass: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-xs-4 mx-auto">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                value={this.state.email}
                                placeholder="Enter email"
                                onChange={this.emailHandleChange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password'
                                value={this.state.pass}
                                placeholder='Password'
                                onChange={this.passwordHandleChange} />
                        </Form.Group>
                    </div>
                </div>
                <Button type="submit">Enter in da house</Button>  
            </Form>  
        )
    }
}
