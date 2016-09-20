exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendees_ticket', (table) => {
    table.integer('attendee_id').references('attendees.id');
    table.integer('ticket_id').references('tickets.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attendees_ticket');
};
