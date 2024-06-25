// routes/attendanceRoutes.js
import express from "express";
import {
  addAttendance,
  getAllAttendance,
  getAttendanceByName,
  updateAttendanceByName,
  deleteAttendanceByName,
} from "../controllers/Attendancesheet.js"; // Adjusted import path and function names

const router = express.Router();

// Route to add attendance record
router.post("/attendance", addAttendance);

// Route to get all attendance records
router.get("/attendance", getAllAttendance);

// Route to get attendance records by userName
router.get("/attendance/:userName", getAttendanceByName); // Adjusted route path

// Route to update attendance records by userName
router.put("/attendance/:userName", updateAttendanceByName); // Assuming you want to use PUT for updating

// Route to delete attendance records by userName
router.delete("/attendance/:userName", deleteAttendanceByName);

export default router;
