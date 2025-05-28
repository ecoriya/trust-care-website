// app.js
import express from 'express';
import bodyParser from 'body-parser'; // ✅ Import the whole module
import cors from 'cors';
import appointmentRoutes from './routes/appointments.js';

const app = express();
app.get('/', (_req, res) => {
  res.send('Welcome to the Trust Care API!');
});
app.use(cors());
app.use(bodyParser.json()); // ✅ Use bodyParser.json() instead of destructured json

app.use('/api/appointments', appointmentRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
