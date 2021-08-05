const axios = require("axios");

let baseUrl = "https://api.collectapi.com"

class Weather{

     getWeatherData = async(language,city) =>{

        let Url = `${baseUrl}/weather/getWeather?data.lang=${language}&data.city=${city}`;
        let Data = await axios.get(Url,{
            headers:{
                "content-type":"application/json",
                "authorization": "apikey 1AYAGlpnYtZyZ3RrrrIfCn:1CjHXCkms7F3MaTnEvyfk5"
            }

        })
        return(Data)
     }
}

module.exports = Weather;
