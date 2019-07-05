import React from 'react';
// import Dashboard from '../adminTemplate/src/views/Dashboard/Dashboard'

const AdminPanel = () => {
    return (
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
                <div className='row fixed-top'>
                    <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
                        <div className="sidebar-sticky"></div>
                        <ul className="nav flex-column">
                            <li className="nav-item">asdas</li>
                            <li className="nav-item">adsad</li>
                            <li className="nav-item">afsdas</li>
                        </ul>
                    </nav>
                    
                </div>
            </div>
        </>
    )
}

export default AdminPanel
