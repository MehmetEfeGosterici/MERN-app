const express = require("express");
const router = express.Router();
const Weather = require("./weather");

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

