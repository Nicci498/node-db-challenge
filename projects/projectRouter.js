const express = require('express');

const project = require('./project-model');

const router = express.Router()

router.get('/', (req, res) => {
    project.getProjects()
    .then( projects => {
        res.status(200).json(projects)
    })
    .catch( () => {
        res.status(500).json({message: 'Failed to get projects'})
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
            res.status(500).json({message: 'Failed to get project'})
        })
})


router.post("/", async (req, res, next) => {
    try {
      const newproject = await project.add(req.body);
      res.status(201).json(newproject);
    } catch (err) {
      next(err);
    }
  });


module.exports = router;