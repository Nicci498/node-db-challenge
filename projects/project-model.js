const db = require("../data/db-config.js");

module.exports = {
    getProjects,
    getByID,
    add,
}

function getProjects(){
    return db("projects")
}

function getByID(id){
    return db("projects").where({id}).first();
}


function add(project){
    return db("projects")
    .insert(project)
}