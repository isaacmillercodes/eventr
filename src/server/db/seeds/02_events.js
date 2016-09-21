
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
          title: 'B. Dolan',
          description: 'B. Dolan returns to Colorado with Strange Famous labelmate Wheelchair Sports Camp.',
          over_21: false,
          start_datetime: 'October 19 20:00:00 2016 MST',
          end_datetime: 'October 19 23:00:00 2016 MST',
          venue_id: knex('venues').where('name', 'Oriental Theater').select('id')
        }),
        knex('events').insert({
          title: 'Ruin and Rose',
          description: 'Acclaimed writer/director Ben Sturgulewski joins the award-winning team at Matchstick Productions and their two decades of filmmaking expertise to deliver “RUIN AND ROSE,” an epic creative vision brought to life by the talents of the world’s top skiers. Winter landscapes across the planet contrast seamlessly with a thoroughly-crafted story of environmental apocalypse, shot entirely within the otherworldly expanses of Africa’s Skeleton Coast. Unlike anything seen before, the dreamlike setting of this film sparks the imagination of not only action sports enthusiasts, but anyone with a beating heart.',
          over_21: false,
          start_datetime: 'October 27 20:00:00 2016 MST',
          end_datetime: 'October 27 23:00:00 2016 MST',
          venue_id: knex('venues').where('name', 'Oriental Theater').select('id')
        }),
        knex('events').insert({
          title: 'The Mountain Goats (Duo)',
          description: 'The breakdown on this is I\'m presenting Targets at Alamo Drafthouse in October and Peter and me are playing some music. We\'ve never done a duo show in Denver; we\'ll be in a smaller room than we usually play out there, so if you wanna see some new and old tunes in the old school style, I recommend getting tickets early. See you there!',
          over_21: true,
          start_datetime: 'October 29 21:00:00 2016 MST',
          end_datetime: 'October 30 01:45:00 2016 MST',
          venue_id: knex('venues').where('name', 'The Hi-Dive').select('id')
        }),
        knex('events').insert({
          title: 'Eldren',
          description: 'A psychedelic dream rock super pop soundgasm that will grip your eyes and ears and leave you trembling with a sense of wonder and want. Honing their craft in Denver, Colorado’s burgeoning music community, and captivating audiences nationwide, Eldren are prepared to charge into your life and forge fire in your heart.',
          over_21: true,
          start_datetime: 'November 5 21:30:00 2016 MST',
          end_datetime: 'November 6 01:45:00 2016 MST',
          venue_id: knex('venues').where('name', 'The Hi-Dive').select('id')
        }),
      ]);
    });
};
