import express from "express";
import upload from "../middleware/upload.js";
import { deleteProjectImage, getProjectImages, uploadProjectImage } from "../controllers/ongoingProject.controller.js";
const router = express.Router();


const UserRoute = express.Router();

UserRoute.post("/upload",upload.single("image"),uploadProjectImage);

UserRoute.get("/all",getProjectImages);
UserRoute.delete("/:id", deleteProjectImage);

export default UserRoute;