import Attendance from "../models/Attendance.js";

// Add attendance record
export const addAttendance = async (req, res) => {
  const { userName, attendanceRecords } = req.body;

  try {
    const newAttendance = new Attendance({
      userName,
      subjects: Object.keys(attendanceRecords),
      attendanceRecords: Object.entries(attendanceRecords).map(
        ([subject, status]) => ({
          subject,
          status,
          dateAdded: new Date().toISOString(),
        })
      ),
    });

    await newAttendance.save();
    res.status(201).json({
      message: "Attendance record added successfully",
      data: newAttendance,
    });
  } catch (error) {
    res.status(400).json({ message: "Error adding attendance record", error });
  }
};

// Get all attendance records
export const getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();
    res.status(200).json({ data: attendanceRecords });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching attendance records", error });
  }
};

// Get attendance records by userName
export const getAttendanceByName = async (req, res) => {
  const { userName } = req.params;

  try {
    const attendanceRecords = await Attendance.find({ userName });
    if (!attendanceRecords) {
      return res.status(404).json({ message: "Attendance records not found" });
    }
    res.status(200).json({ data: attendanceRecords });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching attendance records", error });
  }
};

// Update attendance records by userName
export const updateAttendanceByName = async (req, res) => {
  const { userName } = req.params;
  const { attendanceRecords } = req.body;

  try {
    const updatedAttendance = await Attendance.findOneAndUpdate(
      { userName },
      {
        subjects: Object.keys(attendanceRecords),
        attendanceRecords: Object.entries(attendanceRecords).map(
          ([subject, status]) => ({
            subject,
            status,
            dateAdded: new Date().toISOString(),
          })
        ),
      },
      { new: true }
    );

    if (!updatedAttendance) {
      return res.status(404).json({ message: "Attendance records not found" });
    }

    res.status(200).json({
      message: "Attendance records updated successfully",
      data: updatedAttendance,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating attendance records", error });
  }
};

// Delete attendance records by userName
export const deleteAttendanceByName = async (req, res) => {
  const { userName } = req.params;

  try {
    const deletedAttendance = await Attendance.findOneAndDelete({ userName });

    if (!deletedAttendance) {
      return res.status(404).json({ message: "Attendance records not found" });
    }

    res.status(200).json({
      message: "Attendance records deleted successfully",
      data: deletedAttendance,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting attendance records", error });
  }
};
