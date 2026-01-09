import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import { handleTryOn } from "./routes/tryon.js";
import { CONFIG } from "./config.js";

dotenv.config();

const app = express();
app.use(cors());

const upload = multer({
  dest: "uploads/",
  limits: { fileSize: CONFIG.MAX_UPLOAD_MB * 1024 * 1024 }
});

app.post("/tryon", upload.single("user_image"), handleTryOn);

app.listen(CONFIG.PORT, () => {
  console.log(`Visual Try-On API running on port ${CONFIG.PORT}`);
});