
exports.up = async function(knex) {
    await knex.schema.createTable('projects', tbl =>{
        tbl.increments('id')
        tbl.string('name', 128)
        .notNullable()
        tbl.string('description', 256)
        tbl.boolean('completed').defaultTo('false')
    })
    await knex.schema.createTable('resources', tbl =>{
        tbl.increments('id')
        tbl.string('name', 128)
        .notNullable()
        tbl.string('description')
    })
    await knex.schema.createTable('tasks', tbl =>{
        tbl.increments()
        tbl.string('description')
        .notNullable()
        tbl.string('notes')
        tbl.boolean('completed').defaultTo('false')
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    await knex.schema.createTable('projects_resources_map', tbl =>{
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.primary(['project_id', 'resource_id'])
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projects_resources')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('resources')
    await knex.schema.dropTableIfExists('projects')
  
};
