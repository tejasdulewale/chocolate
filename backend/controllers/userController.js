import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const newUser = async (req, res) => {
  try {
    const { username, email, password, cPassword, number } = req.body;
    // Validation
    if (!username || !email || !password || !cPassword || !number) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (password !== cPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }
    // Hash password
    const hash = await bcrypt.hash(password, 12);
    // Create user (do not store cPassword)
    const user = await userModel.create({
      username,
      email,
      password: hash,
      cPassword: hash,
      number,
    });
    // Create JWT token
    const token = jwt.sign({ username, email }, process.env.JWT_SECRET, {
      expiresIn: "300s",
    });
    // Set cookie and send response (only once)
    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export default newUser;
