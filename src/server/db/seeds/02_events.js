
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('events').insert({
          title: 'Tech N9ne',
          description: 'Live Nation is excited to announce Tech N9ne live at Red Rocks Amphitheatre Sunday, October 9, 2016.',
          over_21: false,
          start_datetime: 'October 9 19:30:00 2016 MST',
          end_datetime: 'October 9 23:00:00 2016 MST',
          venue_id: knex('venues').where('name', 'Red Rocks Ampitheatre').select('id')
        }),
        knex('events').insert({
          title: 'Mac Miller',
          description: 'AEG Live is excited to announce MAC MILLER live at Red Rocks Amphitheatre Monday, October 31, 2016.',
          over_21: false,
          start_datetime: 'October 31 18:00:00 2016 MST',
          end_datetime: 'October 31 22:00:00 2016 MST',
          venue_id: knex('venues').where('name', 'Red Rocks Ampitheatre').select('id')
        }),
        knex('events').insert({
          title: 'Schoolboy Q & Joey Bada$$',
          description: 'West Coast rap king Schoolboy Q is embarking on a mammoth 66-date headlining tour in support of his upcoming Blank Face LP! With support from fellow MC Joey Bada$$, the Top Dawg Entertainment/Black Hippy hiphop sensation will be tearing up the stage at Fillmore Auditorium on Sunday 23rd October 2016!',
          over_21: false,
          start_datetime: 'October 23 19:00:00 2016 MST',
          end_datetime: 'October 23 23:00:00 2016 MST',
          venue_id: knex('venues').where('name', 'Fillmore Auditorium').select('id')
        }),
        knex('events').insert({
          title: 'Two Door Cinema Club',
          description: 'One of the most feel good bands in Indie Rock – Irish group Two Door Cinema Club are returning to the road and will be hitting the Fillmore Auditorium on Monday 28th November 2016! Two Door Cinema Club are bringing their brand new third studio album "Gameshow" to the US… which means North America fans will have the chance to catch them LIVE in concert! Don\'t miss out – book your tickets today!',
          over_21: false,
          start_datetime: 'November 28 19:00:00 2016 MST',
          end_datetime: 'November 28 23:00:00 2016 MST',
          venue_id: knex('venues').where('name', 'Fillmore Auditorium').select('id')
        }),
        knex('events').insert({
          title: 'An Evening with Andrew W.K.',
          description: 'Andrew W.K.’s true will is to create feelings of pure joy, true fun, total love, endless freedom, and infinite possibility, using music, performance, visual art, lecturing, writing, nightclubs, television, and more.',
          over_21: false,
          start_datetime: 'October 11 20:00:00 2016 MST',
          end_datetime: 'October 11 23:00:00 2016 MST',
          venue_id: knex('venues').where('name', 'Gothic Theater').select('id')
        }),
        knex('events').insert({
          title: 'The Faint',
          description: 'Presented by Channel 93.3 and Twist & Shout, The Faint performs with Gang of Four and Pictureplane.',
          over_21: false,
          start_datetime: 'October 29 20:00:00 2016 MST',
          end_datetime: 'October 29 23:30:00 2016 MST',
          venue_id: knex('venues').where('name', 'Gothic Theater').select('id')
        }),
        knex('events').insert({
          title: 'The Faint',
          description: 'Presented by Channel 93.3 and Twist & Shout, The Faint performs with Gang of Four and Pictureplane.',
          over_21: false,
          start_datetime: 'October 29 20:00:00 2016 MST',
          end_datetime: 'October 29 23:30:00 2016 MST',
          venue_id: knex('venues').where('name', 'Oriental Theater').select('id')
        }),
      ]);
    });
};
