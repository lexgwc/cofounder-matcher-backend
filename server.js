// Import envs
import dotenv from 'dotenv/config.js';

// Import modules
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';

// TODO: Import routes

// Import database connection
import './config/db.js'

// Middleware
app.use(cors());
app.use(morgan('combined'))
app.use(express.json())
 

const app = express();

// TODO: app.use routes

app.get("/", (req, res)=>{
  console.log("hello world")
})


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
  console.log("Server running on port ", PORT)
})


