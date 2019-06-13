import React from 'react'
import Container from 'react-bootstrap/Container'
import Search from '../search/search'

import { Navbar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Link } from "react-router-dom";


class Header extends React.Component{
    constructor (props) {
        super(props)
    }
    render() {
        
        return(
            <header>
                <Navbar expand="xl" variant="dark" bg="dark" className='navbar'>
                    <Container>
                        <Row className='justify-content-xl-between w-100'>
                            <Col>
                                <Navbar.Brand href="#">Cinema-Ticket-Reservarion</Navbar.Brand>
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