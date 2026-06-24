import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },

    projectType: {
      type: String,
      required: true,
      enum: [
        "Fiber Network Deployment",
        "Labour Supplier & Contractor",
        "Transportation Services",
        "Civil Construction",
        "Engineering Services",
        "Other",
      ],
    },

    message: {
      type: String,
      trim: true,
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
