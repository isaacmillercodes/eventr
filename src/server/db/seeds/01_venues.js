
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('venues').insert({
          name: 'Red Rocks Ampitheatre',
          capacity: 10000,
          line_1: '18300 W Alameda Pkwy',
          line_2: '',
          city: 'Morrison',
          state: 'CO',
          zip: 80465
        }),
        knex('venues').insert({
          name: 'Fillmore Auditorium',
          capacity: 3700,
          line_1: '1510 N Clarkson St',
          line_2: '',
          city: 'Denver',
          state: 'CO',
          zip: 80218
        }),
        knex('venues').insert({
          name: 'Gothic Theater',
          capacity: 1100,
          line_1: '3263 S Broadway',
          line_2: '',
          city: 'Englewood',
          state: 'CO',
          zip: 80113
        }),
        knex('venues').insert({
          name: 'Oriental Theater',
          capacity: 700,
          line_1: '4335 W 44th Ave',
          line_2: '',
          city: 'Denver',
          state: 'CO',
          zip: 80212
        }),
        knex('venues').insert({
          name: 'The Hi-Dive',
          capacity: 125,
          line_1: '7 S Broadway',
          line_2: '',
          city: 'Denver',
          state: 'CO',
          zip: 80223
        }),
      ]);
    });
};
