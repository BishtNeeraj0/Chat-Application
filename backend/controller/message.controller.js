import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, resizeBy, next) => {
  try {
    const { message } = req.body;
    const { id: receiverID } = req.params;
    const senderID = req.user.id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderID, receiverID],
      });
    }

    const newMessage = new Message({
      sender: senderID,
      receiver: receiverID,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    resizeBy.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};
