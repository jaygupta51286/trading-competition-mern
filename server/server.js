require('dotenv').config({ path: './server/.env' }); // Specify the exact path to the .env file
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const participantRoutes = require('./routes/participantRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();
const path = require('path');

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Serve index.html for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', participantRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
