import User from "../Models/User.js";
import bcrypt from "bcryptjs";
// import multer from "multer"; // Not used in this snippet
// import mongoose from "mongoose"; // Not used in this snippet
// import uuid4 from "uuidv4"; // Not used in this snippet

export const Register = async (req, res, next) => {
  // code for hashing password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      subjects: req.body.subjects, // include subjects
    });
    await newUser.save();
    res.send(req.body);
  } catch (err) {
    next(err.message.data);
  }
};

export const GetAllRegister = async (req, res, next) => {
  try {
    const AllUser = await User.find();
    res.status(203).send(AllUser);
  } catch (err) {
    next(err.message);
  }
};

export const Login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next("User not found! Please check your username");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(
        "Wrong password or username! If you are new, please sign up first"
      );

    const { password, username, subjects } = user;
    // const token = jwt.sign(
    //   { id: user._id, isAdmin: user.isAdmin },
    //   "armaankhan"
    // );
    res
      //   .cookie("access_token", token, { httpOnly: true })
      //   .status(201)
      .json({ username, subjects });
  } catch (err) {
    next(err.message);
    console.log(err.message);
  }
};
