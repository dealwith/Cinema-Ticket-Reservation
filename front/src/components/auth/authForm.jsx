import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const AuthForm = (props) => {
    const registrate = props.registrate;
    return (
        <Form onSubmit={ props.handleSubmit } className='h-100 w-100' method='POST'>
            <div className="row align-items-center">
                <div className="col-xs-4 mx-auto d-flex flex-column justify-content-center align-items-center">
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name='email' 
                            type="email"
                            value={ props.email }
                            placeholder="Enter email"
                            onChange={ props.handleInputChange }
                        />  
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name='password'
                            type='password'
                            value={ props.password }
                            placeholder='Password'
                            onChange={ props.handleInputChange} 
                        />
                    </Form.Group>
                    { props.children }
                    <Button type="submit">
                        {registrate === 'true' ? 'Registrate' : 'Login'} in da house
                    </Button>  
                </div>
            </div>
        </Form>  
    )
}

export default AuthForm