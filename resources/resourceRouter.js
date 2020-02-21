const express =require('express');
const Data = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) =>{
    Data.getResources()
    .then(resources =>{
        res.status(200).json(resources)
    })
    .catch(err =>{
        res.status(500).json({message:'Failed to get resources'})
    })
})

router.post("/", (req,res) => {
    Data.add(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(()=> {
        res.status(500).json({ message: "Failed to add resource"})
    })
})

module.exports = router