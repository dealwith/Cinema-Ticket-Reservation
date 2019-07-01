import React,{ useState, useEffect } from 'react';
import Select from 'react-select';
import "regenerator-runtime/runtime";
import { cityOptions, cinemaOptions, movieOptions } from './dataSelect';
import axios from 'axios';



const CitySelect = (props) =>  {
    const [citites, setSities] = useState([])
    useEffect(async () => {
        const result = await cityOptions
        setSities(result)
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
            onChange={ props.handleCityChange }
        />
    )    
}

const CinemaSelect = () =>  {
    const [cinemas, setCinemas] = useState([])
    useEffect(async () => {
        const result = await cinemaOptions
        setCinemas(result)
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
        />
    )    
}

const MovieSelect = () =>  {
    const [movies, setMovies] = useState([])
    useEffect(async () => {
        const result = await movieOptions
        setMovies(result)
    }, [])

    return(
        <Select
            classNamePrefix='ctr'
            className='movie-filter__select'
            options={ movies }
            defaultValue={ movies[0] }
            isSearchable
            isClearable
            placeholder='All movies'
        />
    )    
}

export { CitySelect, CinemaSelect, MovieSelect  };