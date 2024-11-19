const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  Rank: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);