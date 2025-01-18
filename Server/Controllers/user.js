import User from "../Models/User.js";
import bcrypt from "bcryptjs";
// import multer from "multer"; // Not used in this snippet
// import mongoose from "mongoose"; // Not used in this snippet
// import uuid4 from "uuidv4"; // Not used in this snippet

export const Register = async (req, res, next) => {
  console.log("resgistering");
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    // Log the incoming request body for debugging
    console.log("Request Body:", req.body);

    // Ensure subjects is an array
    const subjects = Array.isArray(req.body.subjects)
      ? req.body.subjects
      : [req.body.subjects];

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      subjects: subjects, // Ensure this is handled as an array
    });

    await newUser.save();
    res.status(201).send(newUser); // Send the created user as a response
  } catch (err) {
    console.error(err); // Log the error for debugging
    next(err); // Pass the full error object to the error handler
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
