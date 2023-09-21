//student routes
const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../controllers/studentController');

// Add a new student
router.post('/add-student', async (req, res) => {
  try {
    const studentData = req.body;
    const database = client.db('studentdb');
    const studentsCollection = database.collection('students');
    const result = await studentsCollection.insertOne(studentData);
    res.json({ message: 'Student added successfully', insertedId: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the student' });
  }
});

// List all students
router.get('/list-students', async (req, res) => {
    try {
      const database = client.db('studentdb');
      const studentsCollection = database.collection('students');
      const students = await studentsCollection.find({}).toArray();
      res.json(students);
    } catch (error) {
      console.error("Error listing students:", error); // Log the error
      res.status(500).json({ error: 'An error occurred while listing students' });
    }
  });
  

module.exports = router;
