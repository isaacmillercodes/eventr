
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendees_tickets').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Daenerys').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Tech N9ne').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Daenerys').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Ruin and Rose').select('id'),

            name: 'General Admission with Blu Ray'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Daenerys').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Two Door Cinema Club').select('id'),

            name: 'Meet and Greet'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Theon').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Eldren').select('id'),

            name: 'All You Can Drink'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Theon').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Mac Miller').select('id'),

            name: 'Orchestra (First 13 Rows)'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Theon').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'An Evening with Andrew W.K.').select('id'),

            name: 'Pre-Show Book Signing'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Robert').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Schoolboy Q & Joey Bada$$').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Robert').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'The Mountain Goats (Duo)').select('id'),

            name: 'GA Ticket with Dinner Next Door at Sputnik'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Robert').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'The Faint').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Jon').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Two Door Cinema Club').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Jon').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'B. Dolan').select('id'),

            name: 'Balcony Tickets'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Sansa').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'An Evening with Andrew W.K.').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Sansa').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'The Faint').select('id'),

            name: 'Meet and Greet'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Cersei').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'The Faint').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Cersei').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'B. Dolan').select('id'),

            name: 'Floor Tickets'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Petyr').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Ruin and Rose').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Petyr').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'The Mountain Goats (Duo)').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Petyr').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Eldren').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Oberyn').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Tech N9ne').select('id'),

            name: 'Meet and Greet'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Oberyn').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Mac Miller').select('id'),

            name: 'General Admission'
          }).select('id')
        }),
        knex('attendees_tickets').insert({
          attendee_id: knex('attendees').where('preferred_name', 'Oberyn').select('id'),
          ticket_id: knex('tickets').where({

            event_id: knex('events').where('title', 'Schoolboy Q & Joey Bada$$').select('id'),

            name: 'Backstage Pass'
          }).select('id')
        })

      ]);
    });
};
