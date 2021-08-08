import React from 'react'
import "./Weather_info.css"

function Weather_info({date,day,description,degree,max,min,night,humidity,icon}) {
    return (
        <div className="Weather_info">
            <div className="Weather_icon">
                <img src={icon} alt="icon" />
            </div>
            <div className="Weather_data">
                <section>
                    <span>{date}</span>
                    <br/>
                    <span>{day}</span>
                </section>
                <hr/>
                <section className="current-weather">
                    <span className="humidity">Desc: {description}</span>
                    <br/>
                    <span className="curr-temp">Temp: {degree}</span>
                    <br/>
                    <span className="feels-like">Humidity: {humidity}% </span>
                </section>

                <hr/>

                <section className="temps">
                    <span className="min-temp">Low: {min}</span>
                    <br/>
                    <span className="max-temp">High: {max}</span>
                </section>
            </div>
        </div>
    )
}

export default Weather_info
