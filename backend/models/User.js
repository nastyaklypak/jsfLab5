import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  email: {
    type: String,
    default: "user@example.com"
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false });

export const User = mongoose.model("User", userSchema);