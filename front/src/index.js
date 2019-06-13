import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app';
import LoginPage from './components/auth/loginPage'
import RegistratePage from './components/auth/registratePage';
import './scss/app.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


const CinemaTicketReservation = () => 
    (
        <Router>
            <Route path="/" exact component={ App } />
            <Route path="/loginPage" component={ LoginPage } />
            <Route path="/registratePage" component={ RegistratePage } />
        </Router>
    )

ReactDOM.render(<CinemaTicketReservation />, document.getElementById("app"));   