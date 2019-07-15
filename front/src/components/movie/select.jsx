import React,{ useState, useEffect } from 'react';
import Select from 'react-select';
import "regenerator-runtime/runtime";
import { cityOptions, cinemaOptions, movieOptions } from './dataSelect';


const CitySelect = (props) =>  {
    const [citites, setSities] = useState([])
    
    useEffect(() => {

        const fetchData = async () => {
            const result = await cityOptions;
            setSities(result);
        }
        
        fetchData()
    }, [])

    return(
        <Select
            className='movie-filter__select'
            classNamePrefix='ctr'
            options={ citites }
            defaultValue={ citites[0] }
            isSearchable
            isClearable
            placeholder='All cities'
            onChange={ props.handleChange }
        />
    )    
}

const CinemaSelect = (props) =>  {
    const [cinemas, setCinemas] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await cinemaOptions;
            setCinemas(result);
        }

        fetchData()
    }, [])

    return(
        <Select
            classNamePrefix='ctr'
            className='movie-filter__select'
            options={ cinemas }
            defaultValue
            isSearchable
            isClearable
            placeholder='All cinemas'
            onChange={props.handleChange}
        />
    )    
}

const MovieSelect = (props) =>  {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await movieOptions;
            setMovies(result);    
        }
        
        fetchData()
    }, [])

    return(
        <Select
            name='movieSelect'
            classNamePrefix='ctr'
            className='movie-filter__select'
            options={ movies }
            defaultValue={ movies[0] }
            isSearchable
            isClearable
            placeholder='All movies'
            onChange={ props.handleChange }
        />
    )    
}

export { CitySelect, CinemaSelect, MovieSelect  };