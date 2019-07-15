import React, { useState, useEffect } from 'react';
import { SCHEDULES_API } from '../../constants/constants'
import axios from 'axios';

const Schedule = (props) => {
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

    return (
        <>
            {
                schedules.map( (schedule, index) => {
                    return(
                        <div className="card str-schedule-item" key={ schedule.id }>
                            <div className="str-schedule-item__body card-body h-auto">
                                <h3 className="card-title font-weight-bold text-uppercas">City: { schedule.name }</h3>
                                <div className='mb-3'>
                                    { schedule.cinemas.map( cinema => { 
                                        return <div key={ cinema.id }>
                                            <h4 className='text-left mb-5'>Cinema - { cinema.name }</h4>
                                            <div className='mb-3 d-flex str-schedule-item__cards'>
                                                { cinema.movies.map( ( movieSchedule, index ) => 
                                                    <div className='mb-3' key={index}>
                                                        <div>
                                                            <strong>
                                                                { movieSchedule.name }
                                                            </strong>
                                                        </div>
                                                        <div>
                                                            <img 
                                                                className='str-schedule-item__img img-thumbnail mb-1 mt-1' 
                                                                src={ movieSchedule.imgUrl } 
                                                                alt={ movieSchedule.name }
                                                            />
                                                        </div>
                                                        <div>
                                                            <span>{ movieSchedule.cinemaShedule.dateTime }</span>
                                                        </div>
                                                    </div>        
                                                ) }
                                            </div>
                                        </div>
                                    } ) }
                                </div>
                                <a href="javascript:void(0);" className="btn btn-primary">Edit</a>
                            </div>
                        </div>
                    )
                } )
            } 
        </>
    )
}



export default Schedule
