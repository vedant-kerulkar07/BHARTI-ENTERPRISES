
import { handleError } from "../helpers/handleError.js";
import OngoingProject from "../models/OngoingProject.js";

// Upload Image
export const uploadProjectImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(handleError(400, "Image is required"));
    }

    const imagePath = `/uploads/projects/${req.file.filename}`;

    const project = await OngoingProject.create({
      image: imagePath,
    });

    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      data: project,
    });
  } catch (error) {
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