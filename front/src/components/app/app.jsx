import React from "react";
import Header from '../header/header'
import Main from '../main/main'
import MovieCardContainer from '../movieCard/movieCardContainer'

const App = () => (
        <>
            <Header/>
            <Main >
                <MovieCardContainer></MovieCardContainer>
            </Main>
        </>
)

export default App