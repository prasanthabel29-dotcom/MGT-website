import express from "express";
import { submitContact, fetchContacts } from "../controllers/contactController.jsx";

const router = express.Router();

router.post("/contact", submitContact);
router.get("/contacts", fetchContacts);

export default router;