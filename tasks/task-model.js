const db = require('../data/db-config.js');

module.exports ={
  getTasks,
  add
}

function getTasks(){
  return db('tasks');
}

function add(task){
  return db('tasks').insert(task);
}