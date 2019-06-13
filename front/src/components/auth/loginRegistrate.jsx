import React from 'react';
import AuthForm from './authForm';
import RegistrateForm from './registrateForm';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Login = () => (
    <Card className='text-center'>
        <Card.Header>
            <Card.Title
                id="contained-Card-title-vcenter"
                className='Card-auth__title'>
                Login
            </Card.Title>
        </Card.Header>
        <Card.Body>
            <AuthForm />
        </Card.Body>

        <Card.Footer>
            <Link to='/registratePage' className="stretched-link position-relative mr-3">Don't have an account?</Link>
            <Link to='/'><Button>Close</Button></Link>
        </Card.Footer>
    </Card>
)

const Registrate = () => (
    <Card>
        <Card.Header
            className='bg-dark Card-auth__header'>
            <Card.Title
                id="contained-Card-title-vcenter"
                className='Card-auth__title'
            >
                Registrate
        </Card.Title>
        </Card.Header>
        <Card.Body>
            <RegistrateForm/>
        </Card.Body>

        <Card.Footer>
            <Link to='/loginPage' className="stretched-link position-relative mr-3">Back to login</Link>
            <Link to='/'><Button>Close</Button></Link>
        </Card.Footer>
    </Card>
)

module.exports = {
    Registrate,
    Login
};