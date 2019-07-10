import React from 'react';
import Search from '../search/search';
import { history } from '../../index'
import { Navbar, Container, Row, Col, Form,  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
        if( history.location.pathname == '/loginPage' 
            || history.location.pathname == '/registratePage' 
            || history.location.pathname.startsWith('/admin') 
        ) {
            return null
        } else {
            return(
                <header className='mb-5'>
                    <Navbar expand="xl" variant="dark" bg="dark" className='navbar'>
                        <Container>
                            <Row className='justify-content-xl-between w-100'>
                                <Col>
                                    <Navbar.Brand href="/">Cinema-Ticket-Reservarion</Navbar.Brand>
                                </Col>
                                <Col className='d-flex align-items-start'>
                                    <Form inline>
                                        <Link to="/loginPage">
                                            <Button
                                                variant="primary"
                                                className='navbar-item navbar-item_login-button mr-3'
                                            >Login/Sign up</Button>
                                        </Link>
                                    </Form>
                                    <Search />
                                </Col>
                            </Row>
                        </Container>
                    </Navbar>
                </header>
            )   
        }
}

export default Header