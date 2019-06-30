import React from 'react'
import Select from 'react-select';
import { cityOptions, movieOptions } from './dataSelect';


export const CitySelect = () => {

    return (
       <Select
            options={ cityOptions }
            defaultValue={ cityOptions[0] }
            isClearable
       />
    )
}

export const CinemaSelect = () => (
    <Select
        options={ cinemaOptions }
        defaultValue={cityOptions[0] }
        isSearchable
    />
)

export const MovieSelect = () => (
    <Select
        options={ movieOptions }
        defaultValue={cityOptions[0] }
        isSearchable
    />
)