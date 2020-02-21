const express =require('express');
const Data = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) =>{
    Data.getResources()
    .then(resources =>{
        res.status(200).json(resources)
    })
    .catch(err =>{
        res.status(500).json({error:'Failed to get resources'})
    })
})

module.exports = router