import React from 'react'
import AuthBack from './authBack';
import { Container } from 'react-bootstrap';
import { Login } from './loginRegistrate';

const LoginPage = () => (
        <AuthBack>
            <Container className='h-100 w-100 d-flex justify-content-center align-items-center'>
                <Login />
            </Container>
        </AuthBack>
)

export default LoginPage