import React, { useState, useContext } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GlobalUserContetx } from "../Context/UserContext";

const AttendanceForm = () => {
  const navigate = useNavigate();
  const { NameOfUser, subjects } = GlobalUserContetx();
  const [attendanceRecords, setAttendanceRecords] = useState(
    subjects.reduce((acc, subject) => {
      acc[subject] = "Present"; // Initialize attendance status for each subject
      return acc;
    }, {})
  );

  // Function to handle changes in attendance status
  const handleAttendanceChange = (subject, status) => {
    setAttendanceRecords({
      ...attendanceRecords,
      [subject]: status,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const attendanceData = {
      userName: NameOfUser,
      attendanceRecords,
    };

    try {
      await axios.post("http://localhost:3002/api/attendance", attendanceData);
      alert("Attendance record added successfully");
      navigate("/show"); // Redirect to another page after successful submission
    } catch (error) {
      console.error("Error adding attendance record:", error);
      alert("Failed to add attendance record");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, p: 2, maxWidth: 500, mx: "auto" }}
    >
      <FormControl fullWidth margin="normal">
        {/* <InputLabel>Name</InputLabel> */}
        <TextField
          value={NameOfUser}
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
      </FormControl>
      {subjects.map((subject) => (
        <FormControl fullWidth margin="normal" key={subject}>
          <InputLabel>{subject}</InputLabel>
          <Select
            value={attendanceRecords[subject]}
            onChange={(e) => handleAttendanceChange(subject, e.target.value)}
            label={subject}
          >
            <MenuItem value="Present">Present</MenuItem>
            <MenuItem value="Absent">Absent</MenuItem>
          </Select>
        </FormControl>
      ))}
      <Button
        className="my-4"
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Submit Attendance
      </Button>
      <div className="h-6"></div>
      <Button
        onClick={() => navigate("/show")}
        variant="contained"
        color="primary"
        fullWidth
      >
        Show Attendance
      </Button>
    </Box>
  );
};

export default AttendanceForm;
