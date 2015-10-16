var JSX = require('node-jsx').install(),
  React = require('react'),
  TimeSheet = require('./ui/components/timesheet'),
  HourLog = require('./models/HourLog');

module.exports = {

  index: function(req, res) {
    // Call static model method to get tweets in the db
    HourLog.getLogs(0,0, function(logs, pages) {

      // Render React to a string, passing in our fetched tweets
      var markup = React.renderComponentToString(
        TimeSheet({
          logs: logs
        })
      );

      // Render our 'home' template
      res.render('home', {
        markup: markup, // Pass rendered react markup
        state: JSON.stringify(logs) // Pass current state to client side
      });

    });
  },

  page: function(req, res) {
    // Fetch tweets by page via param
    HourLog.getLogs(req.params.page, req.params.skip, function(logs) {

      // Render as JSON
      res.send(logs);

    });
  }

};