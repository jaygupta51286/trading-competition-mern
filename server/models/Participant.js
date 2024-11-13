const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    accountNumber: { type: String, required: true },
    mt5Number: { type: String, required: true },
    gmail: { type: String, required: true }
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
