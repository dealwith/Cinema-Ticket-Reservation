import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Switch } from "react-router-dom";
import Header from "../components/header/header";
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
import "regenerator-runtime/runtime";

const App = (props) => {
  return (
    <Router history={history}>
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact={true} component={MovieCardContainer} />
          <Route path="/search" component={SearchResult} />
          <Route path="/loginPage" component={LoginPage} />
          <Route path="/registratePage" component={RegistratePage} />
          <Route path="/movies/:movieId" component={MoviePage} />
          <Route path="/admin" exact={true} component={Admin} />
          <Route path="/admin/movies" component={AdminMovies} />
          <Route path="/admin/schedules" component={AdminSchedules} />
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}
  

ReactDOM.render(<App />, document.getElementById("app"));