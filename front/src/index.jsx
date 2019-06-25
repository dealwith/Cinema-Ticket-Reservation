import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route } from "react-router-dom";
import Header from './components/header/header';
import SearchResult from "./components/search/searchResult";
import MovieCardContainer from './components/movieCard/movieCardContainer';
import Main from './components/main/main'
import LoginPage from './components/auth/loginPage';
import RegistratePage from './components/auth/registratePage';
import './scss/app.scss';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const CinemaTicketReservation = () => 
    (
        <Router history={ history }>
            <Header />
            <Main>
                <Route path="/" exact component={ MovieCardContainer } />
                <Route path="/search" component={ SearchResult } />
                <Route path="/loginPage" component={ LoginPage } />
                <Route path="/registratePage" component={ RegistratePage } />
            </Main>
        </Router>
    )

ReactDOM.render(<CinemaTicketReservation />, document.getElementById("app"));   