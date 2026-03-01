import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password, confirmPassword, gender } = req.body;
  let validUser;
  validUser = await User.findOne({ email });
  if (validUser) {
    return next(errorHandler(400, "User already exists."))
  }

  if (password !== confirmPassword) {
    return next(errorHandler(400, "Passwords do not match."))
  }

  const hashedPass = await bcrypt.hash(password, 10);
  const pfp = `https://api.dicebear.com/9.x/initials/svg?seed=${username}`;
  const newUser = new User({
    username,
    email,
    password: hashedPass,
    gender,
    pfp,
  });
  try {
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    await newUser.save();
    res.cookie("access_token", token, { httpOnly: true }).status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      pfp: newUser.pfp,
    });
  } catch (error) {
    next(error)
  }
};

export const login = (req, res) => {};
export const logout = (req, res) => {};
