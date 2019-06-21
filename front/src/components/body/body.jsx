import React from 'react'
import {Container} from 'react-bootstrap'


const Body = (props) => {
    return (
        <div className='body-content'>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}

export default Body
