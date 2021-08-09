const axios = require("axios");
const WEATHER = require("../models/Weather")
require("dotenv").config({path:"../.env"})

let baseUrl = "https://api.collectapi.com"

class Weather{
    
    saveWeatherDataToMongo = async(CityName,data) =>{
        const filter={
            city: CityName
        }
        const replace = {
            ...filter,
            ...data,
            data: Date.now()
        }
        await this.findOneReplace(filter,replace);
    }
    
    getWeatherData = async(language,city) =>{
        
        let Url = `${baseUrl}/weather/getWeather?data.lang=${language}&data.city=${city}`;
        let Data = await axios.get(Url,{
            headers:{
                "content-type":"application/json",
                "authorization": process.env.API_KEY
            }
            
        })
        return(Data.data)
    }

     getWeatherDataFromMongo = async (CityName) => {
         try {
             return await WEATHER.findOne({city: CityName});   
             
         } catch (error) {
             console.log(error)
         }
    }

   
     
     async findOneReplace(filter,replace){
         await WEATHER.findOneAndReplace(filter,replace,{new: true, upsert: true})
     }

}
module.exports = Weather;
