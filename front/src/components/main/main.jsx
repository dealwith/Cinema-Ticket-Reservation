import React from 'react'
import {Container} from 'react-bootstrap'


const main = (props) => {
    return (
        <main className='body-content'>
            <Container>
                {props.children}
            </Container>
        </main>
    )
}

export default main
