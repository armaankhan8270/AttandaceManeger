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
  Typography,
  Paper,
  Alert,
  Snackbar,
  Avatar,
  Fade,
  CircularProgress
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GlobalUserContetx } from "../Context/UserContext";

const AttendanceForm = () => {
  const navigate = useNavigate();
  const { NameOfUser, subjects, setSubject } = GlobalUserContetx();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [attendanceRecords, setAttendanceRecords] = useState(
    subjects.reduce((acc, subject) => {
      acc[subject] = "Present";
      return acc;
    }, {})
  );

  const handleAttendanceChange = (subject, status) => {
    setAttendanceRecords({
      ...attendanceRecords,
      [subject]: status,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const attendanceData = {
      userName: NameOfUser,
      attendanceRecords,
    };

    try {
      await axios.post("http://localhost:3002/api/attendance", attendanceData);
      setShowSuccess(true);
      setTimeout(() => navigate("/show"), 1500);
    } catch (error) {
      console.error("Error adding attendance record:", error);
      alert(error.response.data.message?error.response.data.message:"falied to add");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      bgcolor: '#f5f5f5',
      py: 4,
      px: { xs: 2, sm: 4 }
    }}>
      <Paper
        elevation={0}
        sx={{
          maxWidth: 600,
          mx: 'auto',
          overflow: 'hidden',
          borderRadius: 2,
          bgcolor: 'white',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
        }}
      >
        {/* Header */}
        <Box sx={{ 
          p: 3, 
          bgcolor: 'primary.main',
          color: 'white'
        }}>
          <Typography variant="h5" fontWeight="medium">
            Daily Attendance
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
            Mark your attendance for today's classes
          </Typography>
        </Box>

        {/* Form Content */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ p: 3 }}
        >
          {/* User Info */}
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.light', width: 56, height: 56 }}>
              {NameOfUser?.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Student Name
              </Typography>
              <Typography variant="h6">
                {NameOfUser}
              </Typography>
            </Box>
          </Box>

          {/* Attendance Fields */}
          {subjects.map((subject) => (
            <Paper
              key={subject}
              variant="outlined"
              sx={{ 
                mb: 2,
                p: 2,
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: '#fafafa',
                  transform: 'translateY(-1px)'
                }
              }}
            >
              <FormControl fullWidth>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    {subject}
                  </Typography>
                  <Select
                    value={attendanceRecords[subject]}
                    onChange={(e) => handleAttendanceChange(subject, e.target.value)}
                    size="small"
                    sx={{
                      minWidth: 120,
                      '& .MuiSelect-select': {
                        py: 1
                      }
                    }}
                  >
                    <MenuItem value="Present">
                      <Box sx={{ color: 'success.main', fontWeight: 500 }}>Present</Box>
                    </MenuItem>
                    <MenuItem value="Absent">
                      <Box sx={{ color: 'error.main', fontWeight: 500 }}>Absent</Box>
                    </MenuItem>
                  </Select>
                </Box>
              </FormControl>
            </Paper>
          ))}

          {/* Action Buttons */}
          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                py: 1.5,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
                position: 'relative'
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: 'white' }} />
              ) : (
                'Submit Attendance'
              )}
            </Button>
            <Button
              onClick={() => navigate("/show")}
              variant="outlined"
              size="large"
              sx={{ py: 1.5 }}
            >
              View Attendance Records
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Success Notification */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" elevation={6} variant="filled">
          Attendance recorded successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AttendanceForm;