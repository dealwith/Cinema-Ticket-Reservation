import React from "react";
import { Link } from 'react-router-dom';

const Suggestions = props => {
  const options = props.results.map(movie => (
    <li className="list-group-item" key={movie.id}>
      <Link to={`movies/${movie.id}`}>{movie.name}</Link>
    </li>
  ));
  return (
    <ul className="search-suggestions list-group position-absolute">
      {options}
    </ul>
  );
};

export default Suggestions;
