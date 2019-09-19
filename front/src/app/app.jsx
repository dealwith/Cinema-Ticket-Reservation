import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Switch } from "react-router-dom";
import "regenerator-runtime/runtime";

import { Header } from "../components/header/header";
import SearchResult from "../components/search/searchResult";
import MovieCardContainer from "../components/movie/movieCardContainer";
import Main from "../components/main/main";
import LoginPage from "../components/auth/loginPage";
import RegistratePage from "../components/auth/registratePage";
import MoviePage from "../components/movie/moviePage";
import Admin from "../components/adminPanel/admin";
import AdminSchedules from "../components/adminPanel/adminSchedules";
import AdminMovies from "../components/adminPanel/adminMovies";
import "../scss/app.scss";
import Footer from "../components/footer/footer";
import { history } from "../helpers/history";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

const App = () => (
  <Router history={history}>
    <Header />
    <Main>
      <Switch>
        <Route path="/" exact={true} component={MovieCardContainer} />
        <Route path="/search" component={SearchResult} />
        <Route path="/loginPage" component={LoginPage} />
        <Route path="/registratePage" component={RegistratePage} />
        <Route path="/movies/:movieId" component={MoviePage} />
        <PrivateRoute path="/admin" exact={true} component={Admin} />
        <PrivateRoute path="/admin/movies" component={AdminMovies} />
        <PrivateRoute path="/admin/schedules" component={AdminSchedules} />
      </Switch>
    </Main>
    <Footer />
  </Router>
);

export default App;
