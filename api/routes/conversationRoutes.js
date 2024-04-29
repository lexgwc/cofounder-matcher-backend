// Import express and router
import express from "express";

const router = express.Router();

import { getAllConversations, getConversationById, createConversation, updateConversation, deleteConversation } from "../controllers/conversationController.js"
// Routes

// Get all conversations

router.get('/', getAllConversations)

// Get conversation by id

router.get('/:id', getConversationById)

// Create conversation

router.post('/', createConversation)

// Update conversation

router.put('/:id',  updateConversation )

// Delete conversation

router.delete('/:id', deleteConversation)



export default router
