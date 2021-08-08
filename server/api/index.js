const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const Weather = require("./weather");

router.get("/weather", async(req,res)=>{
    try {
        let weather = new Weather();
        let weatherData = await weather.getWeatherData("tr","riga");
        res.json(weatherData)
        console.log(weatherData)
        
    } catch (error) {
        console.log(error)
    }
})

router.post("/post",(req,res)=>{
    res.json(req.body)
})

router.post("/weatherMongo", async(req,res)=>{
    const {language,cityName} = req.body
    let weather = new Weather()
    let weatherData = await weather.getWeatherData(language,cityName)
    //console.log(weatherData) 
    weather.saveWeatherDataToMongo(cityName,weatherData)
    res.header("Content-Type",'application/json');
    res.json(weatherData);
})

router.get("/weatherMongo", async(req, res) => {
    const {cityName} = req.query;
    console.log(req.query)
    let weather = new Weather();
    let weatherData = await weather.getWeatherDataFromMongo(cityName);
    res.header("Content-Type",'application/json');
    res.json(weatherData);
})

module.exports = router;

