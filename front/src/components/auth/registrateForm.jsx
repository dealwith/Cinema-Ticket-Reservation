import React from 'react'
import AuthForm from './authForm';
import { Form } from 'react-bootstrap';

const RegistrateForm = (props) => (
    <AuthForm>
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