const express = require('express');

const project = require('./project-model');

const router = express.Router()

router.get('/', (req, res) => {
    project.getProjects()
    .then( projects => {
        res.status(200).json(projects)
    })
    .catch( () => {
        res.status(500).json({message: 'Cannot get projects'})
    })
})

router.get("/:id", (req,res) => {
    project.getById(req.params.id)
        .then(project => {
            if(project){
                res.status(200).json(project)
            } else {
                res.status(404).json( {message: 'ID NOT FOUND'})
            }
        })
        .catch(() => {
            res.status(500).json({message: 'Cannot get project'})
        })
})


router.post('/', (req, res) => {
    project.add(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(() => {
        res.status(500).json({ message: 'Failed to add Project'})
    })
})

module.exports = router;