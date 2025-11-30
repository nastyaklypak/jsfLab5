import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5
  },
  content: {
    type: String,
    required: true,
    minlength: 10
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    default: "Адміністратор"
  }
}, { versionKey: false });

export const News = mongoose.model("News", newsSchema);