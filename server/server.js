require("dotenv/config");
const mongoose = require("mongoose")
const express = require("express");
const app = express();
const apis = require("./api");
require("dotenv/config")
const cors = require("cors")

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use("/api",apis)

app.get("/" ,(req,res)=>{
    res.json("success")
})

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));



app.listen(port,()=>{
    console.log(`server listening at port ${port}`)
})