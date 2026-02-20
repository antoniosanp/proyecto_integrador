import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import employeesRoutes from './routes/employees.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/employees', employeesRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

import pool from './db.js';

const testConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('DB conectada:', result.rows[0]);
  } catch (err) {
    console.error('Error conectando a DB:', err);
  }
};

testConnection();
