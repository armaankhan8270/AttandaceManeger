import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImg: {
      type: String,
      // required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    subjects: {
      type: [String],
      default: ["Hindi", "Urdu", "Marathi", "Geography"], // default to an empty array if no subjects are provided
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
