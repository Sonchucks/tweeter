'use strict';

module.exports = function makeDataHelpers(db) {
  return {
    // Saves a tweet to mongodb
    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet);
      callback(null, true);
    },
    // Get all tweets in mongodb
    getTweets: function(callback) {
      db.collection('tweets').find().toArray(callback);
    }
  };
};
