import React from 'react'
import Container from 'react-bootstrap/Container'
import { Navbar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => (
    <header>
        <Navbar expand="xl" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#">Cinema-Ticket-Reservarion</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </Navbar>
    </header>
)

export default Header