require("dotenv/config");
const express = require("express");
const app = express();
const apis = require("./api");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api",apis)

app.get("/" ,(req,res)=>{
    res.json("success")
})

app.listen(port,()=>{
    console.log(`server listening at port ${port}`)
})