const express = require('express');
const app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

// pass : 1234
const mongoUrl = "mongodb+srv://raaj:1234@cluster0.oup8q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.get('/',(req,res)=>{
    res.send("Welcome to node")
})

app.listen(3000,()=>{
    console.log(" server running")
})