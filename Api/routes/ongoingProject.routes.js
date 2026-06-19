import express from "express";
import upload from "../middleware/upload.js";
import { getProjectImages, uploadProjectImage } from "../controllers/ongoingProject.controller.js";
const router = express.Router();


const UserRoute = express.Router();

UserRoute.post("/upload",upload.single("image"),uploadProjectImage);

UserRoute.get("/all",getProjectImages);


export default UserRoute;