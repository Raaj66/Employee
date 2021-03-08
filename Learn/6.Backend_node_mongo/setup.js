const express = require('express');
const app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')

// pass : 1234
const Employee = mongoose.model("Employee")

const mongoUrl = "mongodb+srv://raaj:1234@cluster0.oup8q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoUrl,{
    useNewUrlParser : true,
    // for warnings
    useUnifiedTopology : true
})
mongoose.connection.on("connected",()=>{
    console.log("COnected to mongoDb yeeeeah");
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err);
})
app.get('/',(req,res)=>{
    res.send("Welcome to node")
})

app.listen(3000,()=>{
    console.log(" server running")
})