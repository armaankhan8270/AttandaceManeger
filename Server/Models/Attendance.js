// models/Attendance.js
import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    subjects: [
      {
        type: String,
        // required: true,
      },
    ],
    dateAdded: {
      type: Date,
      default: Date.now,
      required: true,
    },
    attendanceRecords: [
      {
        subject: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          enum: ["Present", "Absent"],
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", AttendanceSchema);
