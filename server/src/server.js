import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import expRoutes from "./routes/experience.routes.js";
import qualRoutes from "./routes/qualification.routes.js";

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => res.json({ status: "API running" }));

app.use("/api/auth", authRoutes);
app.use("/api/experience", expRoutes);
app.use("/api/qualification", qualRoutes);

const start = async () => {
  await connectDB();
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log("Server on http://localhost:" + port));
};
start();
