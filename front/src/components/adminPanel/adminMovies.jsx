import React from 'react';
import MovieCardContainer from '../movie/movieCardContainer';
import Admin from '../adminPanel/admin';
import AddMovie from './addMovie'


const AdminMovies = () => 
    <Admin>
        <div >
            <div className='mb-5'>
                <AddMovie />
            </div>
            <h2 className='mb-3'>All movies</h2>
            <MovieCardContainer />
        </div>
    </Admin>


export default AdminMovies
