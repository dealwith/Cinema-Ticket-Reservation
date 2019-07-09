import React, { useState, useEffect } from 'react';
import { SCHEDULES_API } from '../../constants/constants'
import axios from 'axios';

const Schedule = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        axios
            .get(SCHEDULES_API)
            .then((res) => {
                let schedulesResponse = res.data;
                setSchedules(schedulesResponse);
            })
            .catch(err => console.log(err))
    }, [])


    const scheduleCards = schedules.map((schedule, index) => {
        let cityName = schedule.name;
        let cinema = schedule['cinemas']
        let cinemaName = cinema[0]['name'];
        let cinemaShedule = cinema[0]['cinemaShedules']
            .map(item => <li key={ item.id } > { item.dateTime } </li>)

        return(
            <div className="card" style={{width: "100%"}} key={ index }>
                <div className="card-body">
                    <h5 className="card-title">City: { cityName }</h5>
                    <p className="card-text">{ cinemaName }</p>
                    <ul>
                        { cinemaShedule }
                    </ul>
                    <a href="javascript:void(0);" className="btn btn-primary">Edit</a>
                </div>
            </div>
            )   
        }
    )
    
    return (
        <>
            { scheduleCards }
        </>
    )
   
    
                
        
    
}

            

export default Schedule
