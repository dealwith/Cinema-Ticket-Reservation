import React from 'react'
import Container from 'react-bootstrap/Container'
import AuthModal from './auth-modal.js'
import Search from './search'

import { Navbar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            modalShow: false
        }   
    }
    
    render() {
        let modalClose = () => this.setState({ modalShow: false })
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
                                    <Button
                                        variant="primary"
                                        onClick={() => this.setState({ modalShow: true })}
                                        className='navbar-item navbar-item_login-button mr-3'
                                    >Login</Button>
                                    <AuthModal
                                        show={this.state.modalShow}
                                        onHide={modalClose}
                                    />
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