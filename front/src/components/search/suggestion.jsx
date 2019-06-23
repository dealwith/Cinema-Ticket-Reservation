import React from 'react'

const Suggestion = (props) => {
    return (
        <div className='search-suggestion'>
            {props.query}
        </div>
    )
}

export default Suggestion
