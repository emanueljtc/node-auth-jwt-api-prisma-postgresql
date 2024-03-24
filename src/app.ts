import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

// Routes

// autenticacion
app.use('/auth', authRoutes);
// usuarios
app.use('/users', userRoutes);

console.log('esto esta siendo ejecutado');

export default app;
