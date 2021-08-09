import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WeatherPanel from './WeatherPanel'
import WeatherInfo from "./WeatherInfo"
import "../styles/Weather_form.css"

function Weather_form() {
    var weatherdata = [];
    const [fcity,setfCity] = useState("")
    const [flanguage,setfLanguage] = useState("")
    const [wData,setwData] = useState([]);

    useEffect(()=>{
        console.log(wData)
    },[wData])

    const formCity = e =>{
        setfCity(e.target.value)
        
    }
    const formLanguage = e =>{
        setfLanguage(e.target.value)
        
    }


  function formSubmit(e){
     e.preventDefault();
       axios.post("/api/weatherMongo",{
         language: flanguage,
         cityName: fcity
     }).then(response =>{
         const res = response.data;
         setwData(res)
         console.log(wData.length)
     }
    )}
    
    return <>
        <div className="Weather_form">
            <form onSubmit={formSubmit}>
                <div className="form">
                    <label htmlFor="city">City: </label>
                    <div className="formInput" >
                        <input onChange={formCity} value={fcity}   name="city" placeholder="Enter a city name"/>
                        <select defaultValue={"Tr"} onChange={formLanguage} value={flanguage}>
                            <option>Tr</option>
                            <option>En</option>
                            <option>De</option>
                        </select>
                    </div>
                </div>
                    <button  className="form_btn" type="submit">Find</button>
            </form>
        </div>
        <div>
            <WeatherPanel data={wData}/>
            
        </div>
    </>
}

export default Weather_form
