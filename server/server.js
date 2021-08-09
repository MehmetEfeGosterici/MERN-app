require("dotenv/config");
const mongoose = require("mongoose")
const express = require("express");
const cors = require("cors")
const path = require("path")
const app = express();
const apis = require("./api");

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use("/api",apis)

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));



app.listen(port,()=>{
    console.log(`server listening at port ${port}`)
})