// Import express and router
import express from "express";

const router = express.Router();

import { getAllMessages, getMessageById, createMessage, updateMessageById, deleteMessageById } from "../controllers/messageController.js"
// Routes

// Get all messages

router.get('/', getAllMessages)

// Get message by id

router.get('/:id', getMessageById)

// Create message

router.post('/', createMessage)

// Update message

router.put('/:id', updateMessageById )

// Delete message

router.delete('/:id', deleteMessageById)



export default router