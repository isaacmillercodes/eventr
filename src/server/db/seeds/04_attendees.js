
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      return Promise.all([

        knex('attendees').insert({
          preferred_name: 'Daenerys',
          last_name: 'Targaryen',
          birthday: '1/18/1999',
          email: 'dragonsarecool@horserider.com'
        }),
        knex('attendees').insert({
          preferred_name: 'Theon',
          last_name: 'Greyjoy',
          birthday: '10/1/1988',
          email: 'ihateramsay@reek.com'
        }),
        knex('attendees').insert({
          preferred_name: 'Robert',
          last_name: 'Baratheon',
          birthday: '2/15/1991',
          email: 'king@ironthrone.com'
        }),
        knex('attendees').insert({
          preferred_name: 'Jon',
          last_name: 'Snow',
          birthday: '5/5/1983',
          email: 'notabastard@thewall.com'
        }),
        knex('attendees').insert({
          preferred_name: 'Sansa',
          last_name: 'Stark',
          birthday: '9/12/1987',
          email: 'ijustwannagohome@helpme.com'
        }),
        knex('attendees').insert({
          preferred_name: 'Cersei',
          last_name: 'Lannister',
          birthday: '6/27/1978',
          email: 'burnitdown@wildfire.com'
        }),
        knex('attendees').insert({
          preferred_name: 'Petyr',
          last_name: 'Baelish',
          birthday: '4/29/1975',
          email: 'sneakyguy@whome.com'
        }),
        knex('attendees').insert({
          preferred_name: 'Oberyn',
          last_name: 'Martell',
          birthday: '11/10/1982',
          email: 'redviper@dorne.com'
        })
      ]);
    });
};
