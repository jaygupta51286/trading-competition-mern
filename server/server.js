require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Participant = require('./models/Participant'); // model we will create

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a route to add participants
app.post('/api/participants', (req, res) => {
    const { name, email, accountNumber, mt5Number, gmail } = req.body;
    const newParticipant = new Participant({
        name,
        email,
        accountNumber,
        mt5Number,
        gmail
    });

    newParticipant.save()
        .then(() => res.status(201).json({ message: 'Participant saved!' }))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

