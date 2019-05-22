import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import './scss/app.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";



class CinemaTicketReservation extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <h1>Hello</h1>
                </Container>
            </div>
        )
    }
}

let App = document.getElementById("app");

ReactDOM.render(<CinemaTicketReservation/>, App);
