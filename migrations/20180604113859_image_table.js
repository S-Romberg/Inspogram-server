exports.up = function (knex, Promise){
    return knex.schema.createTable('image_table', (table) => {
        table.increments('id').primary()
        table.string('category')
        table.string('img')
        table.string('src')
})
}

exports.down = function (knex, Promise){
    return knex.schema.dropTableIfExists('image_table')
}