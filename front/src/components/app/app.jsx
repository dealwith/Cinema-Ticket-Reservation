import React from "react";
import Header from '../header/header'
import Body from '../body/body'
import MovieCardContainer from '../movieCard/movieCardContainer'

const App = () => (
        <>
            <Header/>
            <Body >
                <MovieCardContainer></MovieCardContainer>
            </Body>
        </>
)

export default App