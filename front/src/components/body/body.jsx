import React from 'react'
import {Container} from 'react-bootstrap'


const Body = (props) => {
    return (
        <body>
            <Container>
                {props.children}
            </Container>
        </body>
    )
}

export default Body
