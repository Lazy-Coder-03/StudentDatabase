const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  collegeRollNo: {
    type: String,
    required: true,
  },
  universityRollNo: {
    type: String,
    required: true,
  },
  universityRegNo: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Student', studentSchema);
