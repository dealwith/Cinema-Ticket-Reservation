import React, { useState, useEffect } from 'react';
import { MOVIES_API, SCHEDULES_API } from '../../constants/constants';
import Shedule from '../movie/shedule';
import axios from 'axios';


// const AdminPanel = props => {
//     const [movies, setMovies] = useState([]);
//     // useEffect(() => {
//     //     
//     //         setMovies(movies)
//     //     };
//     // }, [])
  

   
    
//     console.log(props.history)
//     return (
        
//     )
// }



class AdminPanel extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            shedules: []    
        }
    }

    getMovies = async (event) => {
        const { match: { url } } = this.props;
        event.preventDefault();
        await axios.get(MOVIES_API);
        await this.props.history.push(url + '/movies')
    }

    getSchedules = (event) => {
        const { match: { url } } = this.props;
        event.preventDefault();
        axios
            .get(SCHEDULES_API)
            .then((res) => {
                this.state.shedules.push(res.data)
            })
            .catch(err => console.log(err))
        
        return this.props.history.push(url + '/schedules')
    }

    render() {
        const SHEDULES = this.state.shedules;

        return(
            <>
                <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
                    <a href="#" className='navbar-brand col-sm-3 col-md-2 mr-0 text-wrap'>Cinema-Ticket-Reservation</a>
                    <input type="text" className="form-control form-control-dark w-100" placeholder='Search...'/>
                    <ul className='navbar-nav px-3'>
                        <li className="nav-item text-nowrap">
                            <a href="#" className="nav-link">Sign out</a>
                        </li>
                    </ul>
                </nav>
                <div className="container-fluid">
                    <div className='row '>
                        <nav className='col-md-2 d-none d-md-block bg-light sidebar str-sidebar'>
                            <div className="str-sidebar-sticky">
                                <ul className="nav flex-column align-items-start">
                                    <li className="nav-item">
                                        <a href="JavaScript:void(0);" onClick={ this.getMovies } className="nav-link">Movies</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="JavaScript:void(0);" onClick={ this.getSchedules } className="nav-link">Cinemas</a>
                                    </li>
                                </ul>
                            </div>                       
                        </nav>
                        <div className="str-admin-main col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h2 className="str-admin-dashboard">
                                    Dashboard
                                </h2>
                            </div>
                            { this.props.location.pathname == '/admin/schedules' ?  <Shedule data={ SHEDULES } /> : '' }
                            {/* <Shedule /> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}


export default AdminPanel
