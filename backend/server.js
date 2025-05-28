import express, { json } from 'express';
import { createConnection } from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(json());

const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'supriya@123',
  database: 'trustcare',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.post('/api/appointments', (req, res) => {
  const {
    name,
    age,
    gender,
    history,
    symptoms,
    preferredDoctor,
    mobile,
    date,     // '15-05-2025' or '2025-05-15'
    time      // '9.30 AM'
  } = req.body;

  // Convert to proper MySQL DATETIME format
  const combinedDateTime = new Date(`${date} ${time}`);

  const formattedDateTime = combinedDateTime.toISOString().slice(0, 19).replace('T', ' '); // e.g., '2025-05-15 09:30:00'

  const sql = `
    INSERT INTO appointments 
    (name, age, gender, history, symptoms, preferredDoctor, mobile, appointmentTime) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, age, gender, history, symptoms, preferredDoctor, mobile, formattedDateTime], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).send("Database error");
    }
    res.send("Appointment booked successfully");
  });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
