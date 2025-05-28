// backend/routes/appointments.js
import { Router } from 'express';
const router = Router();
import db from '../db.js';    // ← note the “.js” extension

// POST route to book an appointment
router.post('/', (req, res) => {
  const {
    name, age, gender, history,
    symptoms, preferredDoctor,
    mobile, appointmentTime
  } = req.body;

  const sql = `
    INSERT INTO appointments 
      (name, age, gender, history, symptoms, preferredDoctor, mobile, appointmentTime)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql,
    [name, age, gender, history, symptoms, preferredDoctor, mobile, appointmentTime],
    (err, result) => {
      if (err) {
        console.error('Insert error:', err);
        return res.status(500).send('Error booking appointment');
      }
      res.status(200).send('Appointment booked successfully');
    }
  );
});

// GET route to fetch all appointments
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM appointments ORDER BY appointmentTime DESC';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching appointments:', err);
      return res.status(500).send('Error fetching appointments');
    }
    res.status(200).json(results);
  });
});

export default router;
