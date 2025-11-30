import { News } from "../models/News.js";


export const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const createNews = async (req, res) => {
  try {
    const { title, content } = req.body;
    
    const newsItem = new News({
      title,
      content,
      author: req.user.username
    });

    await newsItem.save();
    res.status(201).json(newsItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await News.findByIdAndDelete(id);
    
    if (!deleted) {
      return res.status(404).json({ message: "Новину не знайдено" });
    }
    
    res.json({ message: "Новину видалено" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};