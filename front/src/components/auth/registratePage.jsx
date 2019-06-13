import React from 'react'
import AuthBack from './authBack';
import { Registrate } from './loginRegistrate';
import { Container } from 'react-bootstrap';

const RegistratePage = () => (
    <AuthBack>
        <Container>
            <Registrate/>
        </Container> 
    </AuthBack>
)

export default RegistratePage