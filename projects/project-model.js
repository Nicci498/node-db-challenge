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


async function add(project) {
    const [id] = await db("projects").insert(project);
    return db("projects")
      .where({ id })
      .first();
  }