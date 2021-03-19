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
    console.log("Conected to mongoDb yeeeeah");
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err);
})
// app.get('/',(req,res)=>{
//     res.send("Welcome to node")
// })

// CRUD OPERATION
// CREATE
app.post('/create',(req,res)=>{
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
        console.log("response from posting data")
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

// READ
app.get('/',(req,res)=>{
    Employee.find({})
    .then(data=>{
        console.log("Fetch all data ")
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

// UPDATE
app.post('/update',(req,res)=>{
    Employee.findByIdAndUpdate(req.body.id,{
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        picture : req.body.picture,
        salary : req.body.salary,
        position : req.body.position,   
    })
    .then(data=>{
        console.log("resp from Updating data")
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    }) 
})

// DELETE
app.post('/delete',(req,res)=>{
    Employee.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log("response from deleting data by id")
        console.log(data);
        res.send(data)
    })
})

app.listen(3000,()=>{
    console.log(" server running")
})