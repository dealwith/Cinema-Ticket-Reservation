import React from 'react';
import AuthForm from './auth-form';

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class AuthModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modal modal-auth'
            >
                <Modal.Header 
                    className='bg-dark modal-auth__header'
                >
                    <Modal.Title 
                        id="contained-modal-title-vcenter"
                        className='modal-auth__title'
                    >
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Enter your data</h4>
                <AuthForm/>    
                </Modal.Body>
                <Modal.Footer>
                    <a href="#" class="stretched-link position-relative mr-auto">Do't have an account?</a> 
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}