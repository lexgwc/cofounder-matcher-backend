// Import envs
import dotenv from 'dotenv/config.js';

// Import modules
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import favoriteRouter from './routes/favorite.js';
import messageRouter from './routes/message.js';
import schoolRouter from './routes/school.js';
import conversationRouter from './routes/conversation.js';
import profileRouter from './routes/profile.js';


// Import database connection
import './config/db.js'

// Middleware
app.use(cors());
app.use(morgan('combined'))
app.use(express.json())
 

const app = express();

// Routes
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/favorite', favoriteRouter)
app.use('/message', messageRouter)
app.use('/school', schoolRouter)
app.use('/conversation', conversationRouter)
app.use('/profile', profileRouter)

app.get("/", (req, res)=>{
  console.log("hello world")
})


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
  console.log("Server running on port ", PORT)
})


