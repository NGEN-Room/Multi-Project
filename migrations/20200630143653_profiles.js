exports.up = (knex, Promise) => {
    return knex.schema.createTable('profiles', table => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.bigInteger('phone')
      table.integer('rate')
      table.string('image')
      table.string('description')
      table.string('dialect')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('profiles')
  }