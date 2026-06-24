import express from "express";
import { createContact, getAllContacts } from "../controllers/contact.controller.js";

const ContactRouter = express.Router();

ContactRouter.post("/contact", createContact);
ContactRouter.get("/AllContacts", getAllContacts);

export default ContactRouter;