import express from 'express';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());


connectDB();

app.use("/api/contacts", contactRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
