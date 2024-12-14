const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

console.log('Environment Variables:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const participantRoutes = require('./routes/participantRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'https://future-skill-lab.onrender.com',
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Routes
app.use('/api', participantRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder to 'client/dist' or 'client/build' (depending on your build output)
  app.use(express.static(path.join(__dirname, '../client/dist')));

  // Serve index.html for all non-API routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
  });
}


const port = process.env.PORT || 10000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
