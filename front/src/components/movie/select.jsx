import React,{ useState, useEffect } from 'react';
import Select from 'react-select';
import "regenerator-runtime/runtime";
import { cityOptions, cinemaOptions, movieOptions } from './dataSelect';



const CitySelect = () =>  {
    const [citites, setSities] = useState([])
    useEffect(async () => {
        const result = await cityOptions
        setSities(result)
    }, [])

    return(
        <Select
            className='movie-filter__select'
            options={ citites }
            defaultValue={ citites[0] }
            isSearchable
            isClearable
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
            className='movie-filter__select'
            options={ cinemas }
            defaultValue
            isSearchable
            isClearable
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
            className='movie-filter__select'
            options={ movies }
            defaultValue={ movies[0] }
            isSearchable
            isClearable
        />
    )    
}

export { CitySelect, CinemaSelect, MovieSelect  };