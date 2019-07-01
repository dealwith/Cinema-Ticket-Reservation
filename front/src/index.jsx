import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route } from "react-router-dom";
import Header from './components/header/header';
import SearchResult from "./components/search/searchResult";
import MovieCardContainer from './components/movie/movieCardContainer';
import Main from './components/main/main';
import LoginPage from './components/auth/loginPage';
import RegistratePage from './components/auth/registratePage';
import MoviePage from './components/movie/moviePage';
import './scss/app.scss';
import { createBrowserHistory } from 'history';
import Footer from './components/footer/footer'
export const history = createBrowserHistory();
import "regenerator-runtime/runtime";


const CinemaTicketReservation = () => 
    (
        <Router history={ history }>
            <Header />
            <Main>
                <Route path="/" exact component={ MovieCardContainer } />
                <Route path="/search" component={ SearchResult } /> 
                <Route path="/loginPage" component={ LoginPage } />
                <Route path="/registratePage" component={ RegistratePage } />
                <Route path="/movies/:movieId" component={ MoviePage } />
            </Main>
            <Footer />
        </Router>
    )

ReactDOM.render(<CinemaTicketReservation />, document.getElementById("app"));   