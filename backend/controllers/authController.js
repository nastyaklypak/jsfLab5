import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";


export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Користувач вже існує" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      email: email || "user@example.com"
    });

    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "Користувача успішно зареєстровано",
      token,
      user: {
        username: newUser.username,
        email: newUser.email,
        registrationDate: newUser.registrationDate
      }
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Помилка сервера" });
  }
};


export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Ім'я користувача або пароль введені не вірно" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Ім'я користувача або пароль введені не вірно" });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      token,
      user: {
        username: user.username,
        email: user.email,
        registrationDate: user.registrationDate
      }
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Помилка сервера" });
  }
};


export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Користувача не знайдено" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Помилка сервера" });
  }
};