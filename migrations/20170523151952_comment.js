
exports.up = function (knex, Promise) {
  return knex.schema.createTable('comment', function (table) {
    table.increments()
    table.integer('link_id').references('hikes.id').onDelete('CASCADE'),
    table.string('comments')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('comment')
}
