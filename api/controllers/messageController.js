import Message from "../models/messageModel"

// Get all messages
export const getAllMessage = async (req, res) => {
  try {
    const messages = await Message.find({});
    if (!messages.length) {
      res.status(400).json({
        error: "No messages found"
      });
    } else {
      res.json(messages);
    }
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    });
  }
}

// Get message by ID
export const getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findById(id);
    if (!message) {
      res.status(400).json({
        error: "Message not found"
      });
    } else {
      res.json(message);
    }
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    });
  }
}

// Create a message
export const createMessage = async (req, res) => {
  try {
    const messageData = req.body;
    if (Object.keys(messageData).length === 0) {
      res.status(400).json({
        error: "No message data found"
      });
    } else {
      const messageCreated = await Message.create(messageData);
      res.json({
        message: `Message was created successfully ${messageCreated}`
      });
    }
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    });
  }
}

// Update a message by ID
export const updateMessageByID = async (req, res) => {
  try {
    const { id } = req.params;
    const messageData = req.body;
    const messageToUpdate = await Message.findById(id);
    if (!messageToUpdate) {
      res.status(400).json({
        error: `Could not find a message with ID ${id}`
      });
    } else {
      Object.entries(messageData).forEach(([key, value]) => {
        messageToUpdate[key] = value;
      });
      await messageToUpdate.save();
      res.json({
        message: "Message was updated successfully"
      });
    }
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    });
  }
}

// Delete a message by ID
export const messageDeleteByID = async (req, res) => {
  try {
    const { id } = req.params;
    const messageToDelete = await Message.findByIdAndDelete(id);
    if (!messageToDelete) {
      res.status(400).json({
        error: "Message not found and was not deleted"
      });
    } else {
      res.json({
        message: "Message was deleted successfully"
      });
    }
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    });
  }
}
