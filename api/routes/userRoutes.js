// Import express and router

import express from "express";

const router = express.Router()

import { getAllUsers, getUserById, createUser, updateUserByID, deleteUserByID } from "../controllers/userController";

// Routes

// Get all users

router.get('/', getAllUsers)

// Get user by id

router.get('/:id', getUserById)

// Create user

router.post('/', createUser)

// Update user

router.put('/:id', updateUserByID)

// Delete user

router.delete('/:id', deleteUserByID)

export default router