const express = require('express')
const cors = require("cors")
const home = require('./Routes/homeRoute')
const conatct = require('./Routes/contactRoute')
const services = require('./Routes/servicesRoute')
const about = require('./Routes/aboutUsRoute')
const feeback =  require('./Routes/feedbackRoute')

const app = express()

app.use(cors());
app.use(express.json())

app.use('/', home)
app.use('/contact',conatct)
app.use('/services',services)
app.use('/about',about)
app.use('/feedback',feeback)

app.listen(3500,()=>{
    console.log("Listening on port 3500")
})


