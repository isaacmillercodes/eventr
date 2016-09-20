exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.boolean('over_21').notNullable().defaultTo(true);
    table.timestamp('start_datetime').defaultTo(knex.fn.now());
    table.timestamp('end_datetime').defaultTo(knex.fn.now());
    table.integer('venue_id').references('venues.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
