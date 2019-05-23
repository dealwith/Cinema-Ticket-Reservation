import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header'
import './scss/app.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';



class CinemaTicketReservation extends React.Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

let App = document.getElementById("app");

ReactDOM.render(<CinemaTicketReservation/>, App);
