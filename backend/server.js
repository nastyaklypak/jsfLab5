import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./services/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

// CORS
const allowedOrigins = process.env.CLIENT_ORIGINS.split(",");
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

// Routes
app.use("/products", productRoutes);

// Connect to DB
connectDB(process.env.MONGO_URI);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
