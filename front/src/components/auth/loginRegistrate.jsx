import React from 'react';
import AuthForm from './authForm';
import RegistrateForm from './registrateForm';
import { history } from '../../index';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios'


export class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    };

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
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

        axios.post('http://localhost:3000/login', user)
            .then(res => console.log(res))
            // .then((res) => localStorage.setItem())
            .catch((err) => console.log(err));

        this.setState({
            email: '',
            password: '',
        })
        history.push('/')    
    };
    render() {
        return(
            <Card className='text-center'>
                <Card.Header>
                    <Card.Title
                        id="contained-Card-title-vcenter"
                        className='Card-auth__title'>
                        Login
            </Card.Title>
                </Card.Header>
                <Card.Body>
                    <AuthForm 
                        handleInputChange={this.handleInputChange }
                        email={ this.state.email }
                        password={ this.state.password }
                        handleSubmit={ this.handleSubmit }
                    />
                </Card.Body>
                <Card.Footer>
                    <Link to='/registratePage' className="stretched-link position-relative mr-3">Don't have an account?</Link>
                    <Link to='/'><Button>Close</Button></Link>
                </Card.Footer>
            </Card>
        )
    }
}

export class Registrate extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            repeatPassword: ''
        }
    };

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
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

        axios.post('http://localhost:3000/signup', user)
            .then(res => console.log(res))
            // .then((res) => localStorage.setItem())
            .catch((err) => console.log(err));

        this.setState({
            email: '',
            password: '',
        })
        history.push('/') 
    };
    render() {
        return (
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
                    <RegistrateForm 
                        handleInputChange={ this.handleInputChange }
                        email={ this.state.email }
                        password={ this.state.password }
                        repeatPassword={ this.state.reapeatPassword }
                        handleSubmit={ this.handleSubmit }
                    />
                </Card.Body>
                <Card.Footer>
                    <Link to='/loginPage' className="stretched-link position-relative mr-3">Back to login</Link>
                    <Link to='/'><Button>Close</Button></Link>
                </Card.Footer>
            </Card>
        )
    }
}