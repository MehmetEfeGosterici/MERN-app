const mongoose = require("mongoose");

const WeatherSchema = new mongoose.Schema({
    success: Boolean,
    city: String,
    result:[
        {
            date:{
                type: String,
                default: Date.now()
            },
            day: String,
            icon: String,
            description: String,
            status: String,
            degree: String,
            min: String,
            max: String,
            night:String, 
            humidity: String

        },
        {
            date:{
                type: String,
                default: Date.now()
            },
            day: String,
            icon: String,
            description: String,
            status: String,
            degree: String,
            min: String,
            max: String,
            night:String, 
            humidity: String

        },
        {
            date:{
                type: String,
                default: Date.now()
            },
            day: String,
            icon: String,
            description: String,
            status: String,
            degree: String,
            min: String,
            max: String,
            night:String, 
            humidity: String

        },
        {
            date:{
                type: String,
                default: Date.now()
            },
            day: String,
            icon: String,
            description: String,
            status: String,
            degree: String,
            min: String,
            max: String,
            night:String, 
            humidity: String

        }
        ,{
            date:{
                type: String,
                default: Date.now()
            },
            day: String,
            icon: String,
            description: String,
            status: String,
            degree: String,
            min: String,
            max: String,
            night:String, 
            humidity: String

        }
        ,{
            date:{
                type: String,
                default: Date.now()
            },
            day: String,
            icon: String,
            description: String,
            status: String,
            degree: String,
            min: String,
            max: String,
            night:String, 
            humidity: String

        },
        {
            date:{
                type: String,
                default: Date.now()
            },
            day: String,
            icon: String,
            description: String,
            status: String,
            degree: String,
            min: String,
            max: String,
            night:String, 
            humidity: String

        }

    ]
})

module.exports = mongoose.model("WEATHER",WeatherSchema);