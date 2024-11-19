const express = require('express');
const cors = require('cors');
const Leaderboard = require('../models/leaderboardModel');

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());
router.use(cors());

// POST Route: Upload JSON data
router.post('/upload-json', async (req, res) => {
  try {
    const data = req.body;

    // Validate data
    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ message: 'Uploaded data is empty or not in the correct format.' });
    }

    // Validate and map data
    const formattedData = data.map(row => {
      if (!row.Rank || !row.Name) {
        throw new Error('Invalid data format. Each entry must have "Rank" and "Name".');
      }
      return {
        Rank: row.Rank,
        Name: row.Name,
      };
    });

    // Clear existing leaderboard and insert new data
    await Leaderboard.deleteMany({});
    await Leaderboard.insertMany(formattedData);

    res.status(200).json({ message: 'Leaderboard updated successfully.' });
  } catch (error) {
    console.error('Error uploading data:', error.message);
    res.status(500).json({ message: 'Error uploading data.' });
  }
});

// GET Route: Fetch Leaderboard Data (Add No-Cache Headers)
router.get('/', async (req, res) => {
  try {
    // Add headers to prevent caching
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');

    // Fetch leaderboard data
    const leaderboard = await Leaderboard.find({});
    res.status(200).json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error.message);
    res.status(500).json({ message: 'Error fetching leaderboard.' });
  }
});

module.exports = router;
