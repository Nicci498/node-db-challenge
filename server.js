const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const projectRouter = require('./projects/projectRouter.js');
const taskRouter = require('./tasks/taskRouter.js');
const resourceRouter = require('./resources/resourceRouter.js')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

//server.use('/tasks', taskRouter);
//server.use('/projects', projectRouter);
server.use('/resources', resourceRouter)

module.exports = server