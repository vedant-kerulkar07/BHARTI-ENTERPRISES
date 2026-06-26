
import { handleError } from "../helpers/handleError.js";
import OngoingProject from "../models/OngoingProject.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "bharat-enterprises/projects",
        resource_type: "auto",
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export const uploadProjectImage = async (req, res, next) => {
  try {

    if (!req.file) {
      return next(handleError(400, "Image is required"));
    }

    const uploadResult = await uploadToCloudinary(req.file.buffer);

    const project = await OngoingProject.create({
      image: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: project,
    });
    
  } catch (error) {
    console.log("UPLOAD ERROR:", error);
    next(error);
  }
};

// Get All Images
export const getProjectImages = async (req, res, next) => {
  try {
    const images = await OngoingProject.find().sort({
      createdAt: -1,
    });

    if (!images.length) {
      return next(handleError(404, "No project images found"));
    }

    res.status(200).json({
      success: true,
      count: images.length,
      data: images,
    });
  } catch (error) {
    next(error);
  }
};


export const deleteProjectImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const project = await OngoingProject.findById(id);

    if (!project) {
      return next(handleError(404, "Image not found"));
    }

    // Delete image from Cloudinary
    if (project.public_id) {
      await cloudinary.uploader.destroy(project.public_id);
    }

    // Delete record from MongoDB
    
    await OngoingProject.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};