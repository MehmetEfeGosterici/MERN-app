import React from 'react'
import "./Weather_info.css"

function Weather_info({date,day,description,degree,max,min,night,humidty,icon}) {
    return (
        <div className="Weather_info">
            <div className="Weather_icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="Weather_data">
                <h3>{date}</h3>
                <h3>{day}</h3>
                <h3>{description}</h3>
                <h3>{degree}</h3>
                <h3>{max}-{min}</h3>
                <h3>{night}</h3>
                <h3>{humidty}</h3>
            </div>
        </div>
    )
}

export default Weather_info
