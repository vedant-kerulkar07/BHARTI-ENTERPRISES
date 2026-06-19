import mongoose from "mongoose";

const ongoingProjectSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OngoingProject = mongoose.model("OngoingProject", ongoingProjectSchema);
export default OngoingProject;