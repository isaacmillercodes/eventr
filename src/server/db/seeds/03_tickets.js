
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tickets').insert({
          name: 'General Admission',
          price: 49.99,
          event_id: knex('events').where('title', 'Tech N9ne').select('id')
        }),
        knex('tickets').insert({
          name: 'Meet and Greet',
          price: 79.99,
          event_id: knex('events').where('title', 'Tech N9ne').select('id')
        }),
        knex('tickets').insert({
          name: 'Orchestra (First 13 Rows)',
          price: 99.99,
          event_id: knex('events').where('title', 'Mac Miller').select('id')
        }),
        knex('tickets').insert({
          name: 'General Admission',
          price: 49.99,
          event_id: knex('events').where('title', 'Mac Miller').select('id')
        }),
        knex('tickets').insert({
          name: 'General Admission',
          price: 39.99,
          event_id: knex('events').where('title', 'Schoolboy Q & Joey Bada$$').select('id')
        }),
        knex('tickets').insert({
          name: 'Backstage Pass',
          price: 69.99,
          event_id: knex('events').where('title', 'Schoolboy Q & Joey Bada$$').select('id')
        }),
        knex('tickets').insert({
          name: 'General Admission',
          price: 39.99,
          event_id: knex('events').where('title', 'Two Door Cinema Club').select('id')
        }),
        knex('tickets').insert({
          name: 'Meet and Greet',
          price: 79.99,
          event_id: knex('events').where('title', 'Two Door Cinema Club').select('id')
        }),
        knex('tickets').insert({
          name: 'General Admission',
          price: 29.99,
          event_id: knex('events').where('title', 'An Evening with Andrew W.K.').select('id')
        }),
        knex('tickets').insert({
          name: 'Pre-Show Book Signing',
          price: 19.99,
          event_id: knex('events').where('title', 'An Evening with Andrew W.K.').select('id')
        }),
        knex('tickets').insert({
          name: 'General Admission',
          price: 29.99,
          event_id: knex('events').where('title', 'The Faint').select('id')
        }),
        knex('tickets').insert({
          name: 'Meet and Greet',
          price: 59.99,
          event_id: knex('events').where('title', 'The Faint').select('id')
        }),
        knex('tickets').insert({
          name: 'Floor Tickets',
          price: 39.99,
          event_id: knex('events').where('title', 'B. Dolan').select('id')
        }),
        knex('tickets').insert({
          name: 'Balcony Tickets',
          price: 19.99,
          event_id: knex('events').where('title', 'B. Dolan').select('id')
        }),
        knex('tickets').insert({
          name: 'General Admission',
          price: 19.99,
          event_id: knex('events').where('title', 'Ruin and Rose').select('id')
        }),
        knex('tickets').insert({
          name: 'General Admission with Blu Ray',
          price: 39.99,
          event_id: knex('events').where('title', 'Ruin and Rose').select('id')
        }),
        knex('tickets').insert({
          name: 'General Admission',
          price: 19.99,
          event_id: knex('events').where('title', 'The Mountain Goats (Duo)').select('id')
        }),
        knex('tickets').insert({
          name: 'GA Ticket with Dinner Next Door at Sputnik',
          price: 39.99,
          event_id: knex('events').where('title', 'The Mountain Goats (Duo)').select('id')
        }),
        knex('tickets').insert({
          name: 'General Admission',
          price: 19.99,
          event_id: knex('events').where('title', 'Eldren').select('id')
        }),
        knex('tickets').insert({
          name: 'All You Can Drink',
          price: 34.99,
          event_id: knex('events').where('title', 'Eldren').select('id')
        })
      ]);
    });
};
