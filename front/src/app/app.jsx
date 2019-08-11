import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/app.scss";

import { Router, Route, Switch } from "react-router-dom";

import {Header} from "../components/header/header";
import SearchResult from "../components/search/searchResult";
import MovieCardContainer from "../components/movie/movieCardContainer";
import Main from "../components/main/main";
import LoginPage from "../components/auth/loginPage";
import RegistratePage from "../components/auth/registratePage";
import MoviePage from "../components/movie/moviePage";
import Admin from "../components/adminPanel/admin";
import AdminSchedules from "../components/adminPanel/adminSchedules";
import AdminMovies from "../components/adminPanel/adminMovies";
import Footer from "../components/footer/footer";
import { PrivateRoute } from "../components/privateRoute/PrivateRoute";

import { alertActions } from '../actions/alertActions';
import { connect } from 'react-redux';

import { history } from "../helpers/history";

import "regenerator-runtime/runtime";

const App = props => {
  const { dispatch, alert } = props;
  history.listen((location, action) => {
    dispatch(alertActions.clear())
  });
  return (
    <Router history={history}>
      {/* <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {
              alert.message && 
              <div className={`alert ${alert.type}`}>
                {alert.message}
              </div>
            }
          </div>
        </div>
      </div> */}
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact={true} component={MovieCardContainer} />
          <Route path="/search" component={SearchResult} />
          <Route path="/loginPage" component={LoginPage} />
          <Route path="/registratePage" component={RegistratePage} />
          <Route path="/movies/:movieId" component={MoviePage} />
          <PrivateRoute path="/admin" exact={true} component={Admin} />
          <Route path="/admin/movies" component={AdminMovies} />
          <Route path="/admin/schedules" component={AdminSchedules} />
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}
  

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};