import Conversation from "../models/conversationModel"

// Function to create a new conversation when a message is sent for the first time between two users

export const createConversationFromMessage = async (message) => {
  try {
    const conversationData = {
      users: [message.sender, message.receiver],
      messages: [message._id]
    }

    const newConversation = await Conversation.create(conversationData)

    if (!newConversation) {
      return res.status(401).json({
        error: `New conversation was not created`
      })
    }

    res.json(newConversation)

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Function to update an existing conversation when a message is sent for a subsequent time

export const updateConversationFromMessage = async (message) => {
  try {
    const { id } = req.params

    const conversationToUpdate = await Conversation.findById(id)

    if (!conversationToUpdate) {
      return res.status(404).json({
        error: `New conversation was found`
      })
    }

    conversationToUpdate.messages.push(message._id)

    const updatedConversation = await conversationToUpdate.save()

    if (!updatedConversation) {
      return res.status(401).json({
        error: `Conversation failed to update`
      })
    }

    res.json(conversationToUpdate)

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}