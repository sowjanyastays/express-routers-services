const express = require('express')

const router = express.Router()

const serviceList = [
    {
        "id" : 1,
        "name" : "Web Dev service"
    },
    {
        "id" : 2,
        "name" : "App dev service"
    },
    {
        "id" : 3,
        "name" : "AI service"
    },
    {
        "id" : 4,
        "name" : "ChatGPT service"
    },
    {
        "id" : 5,
        "name" : "Debugging service"
    },
    {
        "id" : 6,
        "name" : "Vr service"
    },
    {
        "id" : 7,
        "name" : "Ar service"
    }
]


router.get('/',(req,res)=>{
    //  res.status(200).send("This is Services  page from backend")
    res.status(200).send(({serviceList}));
})

router.get('/:id',(req,res)=>{
    const searchedId = Number(req.params.id);
    // const result = serviceList.indexOf(searchedId)
    const result = serviceList.find((service) =>
    { return service.id === searchedId});
    if(!result){
        res.status(200).send("Such a service is not found")
    }
    else{
        res.json(result)
    }
})







module.exports = router