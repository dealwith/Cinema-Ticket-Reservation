import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(movie => (
    <li className='list-group-item' key={ movie.id }>
        <a href="#">
            { movie.name }
        </a>
    </li>
  ))
  return <ul className='search-suggestions list-group position-absolute'>{options}</ul>
}

export default Suggestions