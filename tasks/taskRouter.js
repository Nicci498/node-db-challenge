
const express = require('express')

const task = require("./task-model")

const router = express.Router()

router.get('/', (req, res) => {
    task.getTasks()
    .then( tasks => {
        res.status(200).json(tasks)
    })
    .catch( () => {
        res.status(500).json({message: 'Failed to get tasks'})
    })
})


router.post('/', (req, res)=>{
    task.add(req.body)
        .then(task=>res.status(201).json(task))
        .catch(err=>{
            console.log(err.message);
            res.status(500).json({message:'failed to add task'})
        })
})


module.exports = router;