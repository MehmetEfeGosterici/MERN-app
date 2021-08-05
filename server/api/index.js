const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const Weather = require("./weather");

router.get("/weather", async(req,res)=>{
    try {
        let weather = new Weather();
        let weatherData = await weather.getWeatherData("tr","berlin");
        res.json(weatherData.data)
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;

