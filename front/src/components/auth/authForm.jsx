import React from 'react';
import axios from 'axios';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default class AuthForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            repeatPassword: '',
        }
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name] :value
        })
    }; 

    handleSubmit = event => {
        event.preventDefault();

        let email = this.state.email;
        let password = this.state.password
        
        const user = {
            email,
            password           
        }

        axios.post('http://localhost:3000/user-login', user)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
                
        this.setState({
            email: '',
            password: '',
            repeatPassword: ''
        })
    };
    
    render() {
        const registrate = this.props.registrate;

        return (
            <Form onSubmit={ this.handleSubmit } className='h-100 w-100' method='POST'>
                <div className="row align-items-center">
                    <div className="col-xs-4 mx-auto d-flex flex-column justify-content-center align-items-center">
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email' 
                                type="email"
                                value={ this.state.email }
                                placeholder="Enter email"
                                onChange={ this.handleInputChange }

                                />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                name='password'
                                type='password'
                                value={ this.state.pass }
                                placeholder='Password'
                                onChange={this.handleInputChange} 
                                
                                />
                        </Form.Group>
                        { this.props.children }
                        <Button type="submit">
                            {registrate === 'true' ? 'Registrate' : 'Login'} in da house
                        </Button>  
                    </div>
                </div>
            </Form>  
        )
    }
}
