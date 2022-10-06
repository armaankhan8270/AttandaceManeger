import mongoose from "mongoose";
const AttandanceSchema = new mongoose.Schema(
  {
    roll: {
      type: Number,
    },
    NameOfUser: {
      type: String,
    },
    Ai: {
      type: String,
      required: true,
    },

    Dwm: {
      type: String,
      required: true,
    },
    Cn: {
      type: String,
      required: true,
    },
    Wc: {
      type: String,
      required: true,
    },
    Stats: {
      type: String,
      required: true,
    },
    Bce: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Attandance", AttandanceSchema);
