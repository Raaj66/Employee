const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')

app.use(bodyParser.json())
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
app.post('/send',(req,res)=>{
    console.log(req.body)
    const employee = new Employee({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        picture : req.body.picture,
        salary : req.body.salary,
        position : req.body.position,   
    })
    employee.save()
    .then(data=>{
        console.log(data)
        res.send("posted")
    }).catch(err=>{
        console.log(err)
    })  
})
app.listen(3000,()=>{
    console.log(" server running")
})