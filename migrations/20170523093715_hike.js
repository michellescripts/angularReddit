
exports.up = function (knex, Promise) {
  return knex.schema.createTable('hikes', function (table) {
    table.increments()
    table.string('title')
    table.text('body')
    table.string('author')
    table.integer('votes')
    table.string('date')
    table.string('imageUrl')
    table.string('comments')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('hikes')
}
