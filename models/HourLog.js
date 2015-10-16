/**
 * Created by Stef.van.de.Berg on 10/16/2015.
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  logid         : String
  , customer    : Number
  , project     : Number
  , date        : Date
  , amount      : Number
  , description : String
  , user        : Number
  , logdate     : Date
});

schema.statics.getLogs = function(page, skip, callback) {
  var logs = [];
  var start = (page * 10) + (skip * 1);

  HourLog.find({}, 'logid customer project date amount description user logdate', {skip: start, limit: 10})
    .sort({logdate: 'desc'})
    .exec(function(err, docs) {
      if (!err) {
        logs = docs;
      }

      callback(logs);
    });
};

module.exports = HourLog = mongoose.model('HourLog', schema);