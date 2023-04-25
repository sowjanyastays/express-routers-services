const express = require('express')

const router = express.Router()

const serviceList = [
    {
       
        "name" : "Web Dev service"
    },
    {
        
        "name" : "App dev service"
    },
    {
        
        "name" : "AI service"
    },
    {
        
        "name" : "ChatGPT service"
    },
    {
        
        "name" : "Debugging service"
    },
    {
        
        "name" : "Vr service"
    },
    {
        "name" : "Ar service"
    }
]


router.get('/',(req,res)=>{
    //  res.status(200).send("This is Services  page from backend")
    res.status(200).send(({serviceList}));
})

router.get('/:id',(req,res)=>{
    res.status(200).send(`GET with id ${req.params.id}`)
   })

router.param('id',(req,res,next,id)=>{
    req.serviceDetails = serviceList[id];
    // console.log(req.serviceDetails.name)
    res.status(200).send(`${req.serviceDetails.name}`)

    next();
})  







module.exports = router