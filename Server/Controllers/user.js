import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import multer from "multer";
import mongoose from "mongoose";
import uuid4 from "uuidv4";
export const Resgister = async (req, res, next) => {
  //code for hasing password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.send(req.body);
  } catch (err) {
    next(err.message.data);
  }
};
export const GetAllResgister = async (req, res, next) => {
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
    if (!user) return next("User not found!Pleae Check Your Username");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(
        "Wrong password or username!If You Are New Please SignUp first"
      );
    const { password, username } = user;
    // const token = jwt.sign(
    //   { id: user._id, isAdmin: user.isAdmin },
    //   "armaankhan"
    // );
    res
      //   .cookie("access_token", token, { httpOnly: true })
      //   .status(201)
      .json(username);
  } catch (err) {
    next(err.message);
    console.log(err.message);
  }
};
