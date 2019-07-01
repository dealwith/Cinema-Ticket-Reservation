import axios from 'axios';
import { MOVIES_API, CITIES_API, CINEMAS_API } from '../../constants/constants';

const cities = axios
                .get(CITIES_API)
                .then(x => citiesArr.push(x.data))
                // .then(cities => cities.data.map(x => citiesArr.push(x)))
                .catch(err => console.log(err));

const citiesArr = [];
export const cityOptions = citiesArr.map(opt => ({ label: opt, value: opt }));

export const cinemaOptions = axios
                                .get(CINEMAS_API)
                                .then(cinemas => cinemas.data)
                                .catch(err => console.log(err));

export const movieOptions = axios
                                .get(MOVIES_API)
                                .then(movies => movies.data)
                                .catch(err => console.log(err));