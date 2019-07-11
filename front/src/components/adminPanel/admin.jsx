import React from 'react';
import { Link } from 'react-router-dom';

class Admin extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            shedules: []    
        }
    }

    render() {
        const path = location.pathname;
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
                                        <Link to='/admin/movies' className="nav-link">Add movie</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/admin/schedules' className="nav-link">Schedules</Link>
                                    </li>
                                </ul>
                            </div>                       
                        </nav>
                        <div className="str-admin-main col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h2 className="str-admin-dashboard">
                                    {   path === '/admin' ? 'Dashboard' 
                                        : path === '/admin/schedules' ? 'Schedules' 
                                        : path === '/admin/movies' ? 'Movies' :
                                        'Name not found' }
                                </h2>
                            </div>
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
}


export default Admin