import React from 'react'
import AuthBack from './authBack';
import { Registrate } from './loginRegistrate';
import { Container } from 'react-bootstrap';

const RegistratePage = () => (
    // axios.post('http://localhost:3000/registrate', user)
    //     .then(res => console.log(res))
    //     // .then((res) => localStorage.setItem())
    //     .catch((err) => console.log(err));
    <AuthBack>
        <Container>
            <Registrate/>
        </Container> 
    </AuthBack>
)

export default RegistratePage