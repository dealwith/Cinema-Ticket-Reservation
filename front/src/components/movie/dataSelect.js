import axios from 'axios';
import {  CITIES_API, CINEMAS_API, MOVIES_API } from '../../constants/constants';

const getApi = (api) => {
    const res = axios
        .get(api)
        .then(request => request.data)
        .then(cities =>
            cities.map(opt => ({ value: opt.name, label: opt.name }))
        )
        .catch(err => console.log(err));
        
    return res;
}

export const cityOptions = getApi(CITIES_API);

export const cinemaOptions = getApi(CINEMAS_API);

export const movieOptions = getApi(MOVIES_API);