import React from 'react'
import AuthBack from './authBack';
import { Container } from 'react-bootstrap';
import { Login } from './loginRegistrate';

const LoginPage = () => (
    // axios.post('http://localhost:3000/login', user)
    //     .then(res => console.log(res))
    //     // .then((res) => localStorage.setItem())
    //     .catch((err) => console.log(err));
    <AuthBack>
        <Container className='h-100 w-100 d-flex justify-content-center align-items-center'>
            <Login/>
        </Container>
    </AuthBack>
)

export default LoginPage