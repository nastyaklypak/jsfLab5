import express from "express";
import { getNews, createNews, deleteNews } from "../controllers/newsController.js";
import { authRequired } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getNews);
router.post("/", authRequired, createNews);
router.delete("/:id", authRequired, deleteNews);

export default router;