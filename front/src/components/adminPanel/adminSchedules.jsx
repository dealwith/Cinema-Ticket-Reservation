import React from 'react';
import Schedule from '../movie/schedule';

import Admin from '../adminPanel/admin'

const AdminSchedules = () => {
    return(
        <Admin>
            <div className="str-schedules-container">
                <Schedule />
            </div>
        </Admin>
    )
    
}

export default AdminSchedules
