
import { handleError } from "../helpers/handleError.js";
import Contact from "../models/contact.model.js";


export const createContact = async (req, res, next) => {
    try {
        const { fullName, phoneNumber, projectType, message } = req.body;

        if (!fullName || !phoneNumber || !projectType ) {
            return next(handleError(400, "All fields are required"));
        }
        if (!/^[0-9]{10}$/.test(phoneNumber)) {
            return next(handleError(400, "Please enter a valid 10-digit phone number"));
        }
        const contact = await Contact.create({
            fullName,
            phoneNumber,
            projectType,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Message submitted successfully",
            data: contact,
        });
    } catch (error) {
        next(error);
    }
};

export const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts,
        });
    } catch (error) {
        next(error);
    }
};
