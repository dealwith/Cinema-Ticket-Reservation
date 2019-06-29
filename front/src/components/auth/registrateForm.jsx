import React from 'react'
import AuthForm from './authForm';
import { Form } from 'react-bootstrap';

const RegistrateForm = props => (
    <AuthForm 
        registrate='true'
        handleInputChange={ props.handleInputChange }
        email={ props.email }
        password={ props.password }
    >
        <Form.Group >
            <Form.Label>Repeat password</Form.Label>
            <Form.Control
                name='repeatPassword'
                type='password'
                value={ props.repeatPassword }
                placeholder='IvanAnhilator'
                onChange={ props.handleInputChange } />
        </Form.Group>
    </AuthForm>
)

export default RegistrateForm