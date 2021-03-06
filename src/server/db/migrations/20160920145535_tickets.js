exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.decimal('price').notNullable();
    table.integer('event_id').references('events.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets');
};
