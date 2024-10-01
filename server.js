// Import envs
import dotenv from 'dotenv/config.js';

// Import modules
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRouter from './api/routes/authRoutes.js';
import userRouter from './api/routes/userRoutes.js';
import favoriteRouter from './api/routes/favoriteRoutes.js';
import messageRouter from './api/routes/messageRoutes.js';
import schoolRouter from './api/routes/schoolRoutes.js';
import conversationRouter from './api/routes/conversationRoutes.js';
import profileRouter from './api/routes/profileRoutes.js';
import helperRouter from './api/routes/helperRoutes.js';
import http from 'http';
import { Server } from 'socket.io';

// Import database connection
import './config/db.js'
import { webSocket } from './api/websocket/websocket.js';

//Initialize express instance
const app = express()


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true
    }
});

webSocket(io)

const corsConfig = {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}

// Middleware
app.use(cors(corsConfig))
app.use(morgan('combined'))
app.use(express.json())

// Routes
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/favorites', favoriteRouter)
app.use('/api/messages', messageRouter)
app.use('/api/schools', schoolRouter)
app.use('/api/conversations', conversationRouter)
app.use('/api/profiles', profileRouter)
app.use('/api/profile-list-vals', helperRouter)

// Set port for use in server
const PORT = process.env.PORT || 3001

// Example: Use database connection string and secret from environment
const databaseUri = process.env.DATABASE_URI;
const secretKey = process.env.SECRET;

// Start server
server.listen(PORT, () => {
  console.log("Server running on port ", PORT);
  console.log("Connected to database at ", databaseUri);
});