import React from "react";
import Header from '../header/header';
import Main from '../main/main';
import MovieCardContainer from '../movieCard/movieCardContainer';
import SearchResult from '../search/searchResult';
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (
        <>
        <Router>
            <Header/>
                <Main>
                    <Route path="/" exact component={ MovieCardContainer } />
                    <Route path="/search" component={ SearchResult } />
                </Main>
        </Router>
            
        </>
)

export default App