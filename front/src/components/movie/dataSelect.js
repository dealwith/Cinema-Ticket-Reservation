import axios from 'axios';
import {  CITIES_API, CINEMAS_API, MOVIES_API } from '../../constants/constants';

// export async function getCities() {
//     const cityOptions = await axios
//                 .get(CITIES_API);
//     return cityOptions.map(opt => ({ value: opt.name, label: opt.name }));
// };

export const cityOptions = axios
                .get(CITIES_API)
                .then(x => x.data)
                .then(cities => 
                    cities.map(opt => ({ value: opt.name, label: opt.name }))
                )
                .catch(err => console.log(err));

export const cinemaOptions = axios
                                .get(CINEMAS_API)
                                .then(x => x.data)
                                .then(cinemas => 
                                    cinemas.map(opt => ({ value: opt.name, label: opt.name }))
                                )
                                .catch(err => console.log(err));

export const movieOptions = axios
                                .get(MOVIES_API)
                                .then(x => x.data)
                                .then(movies => 
                                    movies.map(opt => ({ value: opt.name, label: opt.name })))
                                .catch(err => console.log(err));