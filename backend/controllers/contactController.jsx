import { createContact, getAllContacts } from "../models/contactModel.jsx";
import { sendNotification } from "../services/notificationService.jsx";

export const submitContact = async (req, res) => {
  try {
    const contact = await createContact(req.body);

    // 🔥 trigger notification
    await sendNotification(contact);

    res.status(201).json({
      success: true,
      message: "Contact saved & notification sent",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const fetchContacts = async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};