import React from 'react'

const Shedule = props => {
    const shedules = props.data;
    const shedulesCards = shedules.map(item => 
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{item.id}</h5>
                <p className="card-text">{}</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
        </div>
    )
    console.log(shedulesCards)
    console.log(shedules)
    return(
        <>
            { shedulesCards }    
        </>
    )
}

            

export default Shedule
