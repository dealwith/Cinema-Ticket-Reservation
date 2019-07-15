import React from 'react'
import AuthBack from './authBack';
import { Registrate } from './loginRegistrate';
import { Container } from 'react-bootstrap';

const RegistratePage = () =>  (
    <AuthBack>
        <Container className='h-100 w-100 d-flex justify-content-center align-items-center'>
            <Registrate />
        </Container>
    </AuthBack>
)

export default RegistratePage