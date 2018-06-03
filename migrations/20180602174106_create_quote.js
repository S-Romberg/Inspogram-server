exports.up = function (knex, Promise){
    return knex.schema.createTable('create_quote', (table) => {
        table.increments('id')
        table.string('quote')
        table.string('author')
})
}

exports.down = function (knex, Promise){
    return knex.schema.dropTableIfExists('create_quote')
}
