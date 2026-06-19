import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import UserRoute from "./routes/ongoingProject.routes.js"
import ContactRouter from "./routes/contact.routes.js"


dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}))

app.use("/api/projects",UserRoute)
app.use("/uploads", express.static("uploads"));
app.use("/api/user", ContactRouter);

mongoose.connect(process.env.MONGO_URI, { dbName: "Bharti-Enterprises" })
  .then(() => console.log(" Database connected"))
  .catch((err) => {
    console.error(' Database connection failed:', err.message);
  })



// Global error handler
app.use((err, req, res, next) => {
  console.error(" Error:", err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`)
})
