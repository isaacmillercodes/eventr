(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/homepage');
    const attendeeRoutes = require('../routes/attendees');
    const eventRoutes = require('../routes/events');
    const venueRoutes = require('../routes/venues');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/attendees', attendeeRoutes);
    app.use('/events/:eventID', eventRoutes);
    app.use('/venues', venueRoutes);

  };

})(module.exports);
