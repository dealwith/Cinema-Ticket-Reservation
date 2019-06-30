import axios from 'axios';
import { MOVIES_API } from '../../constants/constants';

export const cityOptions = axios.get(MOVIES_API)
console.log(cityOptions)

/* [
    'all cities', 'Minsk', 'Grodno'
] */

export const cinemaOptions = [
    'all cinemas', 'Red Star', 'October'
]

export const movieOptions = [
    'all movies', 'All', 'October'
]