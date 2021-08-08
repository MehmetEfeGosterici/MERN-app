import React from 'react'
import WeatherInfo from './WeatherInfo'
import "./Weather_panel.css"

function Weather_panel({data}) {
    console.log(data)
    return (
        <div className="Weather_panel">
            <div className="City_name">
                <h3>{data.city ? data.city.toUpperCase() : ""}</h3>
            </div>
            <div className="Weather_cards">
            {data.result ? data.result.map(item =>{
                return<>
                 <WeatherInfo
                 date={item.date}
                 day={item.day}
                 description={item.description}
                 degree={item.degree}
                 max={item.max} min={item.min}
                 night={item.night} humidity={item.humidity}
                 icon={item.icon}
                 
                 />
                </>
            }): <h3>No result</h3>}
            </div>
        </div>
    )
}

export default Weather_panel
