import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Container,
} from "@mui/material";
import Dashboard from "./DashBoard";
import { GlobalUserContetx } from "../Context/UserContext";

const AttendanceTable = () => {
  const { NameOfUser } = GlobalUserContetx();
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/api/attendance/${NameOfUser}`
        );
        setAttendanceData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, [NameOfUser]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-700 text-white min-h-screen p-8">
      <Container className="my-6">
        <Typography
          variant="h4"
          component="h1"
          className="text-center mb-6 text-3xl font-bold text-white"
        >
          Attendance Records for {NameOfUser}
        </Typography>
        <TableContainer
          component={Paper}
          className="bg-gray-800 rounded-lg shadow-lg"
        >
          <Table sx={{ minWidth: 650 }} aria-label="attendance table">
            <TableHead className=" text-white">
              <TableRow>
                <TableCell className="font-bold text-lg uppercase">
                  Date
                </TableCell>
                {attendanceData.length > 0 &&
                  attendanceData[0].attendanceRecords.map((record) => (
                    <TableCell
                      key={record.subject}
                      className="font-bold text-lg uppercase"
                      align="center"
                    >
                      {record.subject}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody className="b">
              {attendanceData.map((record) => (
                <TableRow
                  key={record._id}
                  className="hover:bg-gray-600 transition duration-300"
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className="font-semibold text-base"
                  >
                    {new Date(record.dateAdded).toLocaleDateString()}
                  </TableCell>
                  {record.attendanceRecords.map((subjectRecord) => (
                    <TableCell
                      key={subjectRecord.subject}
                      align="center"
                      className="text-base"
                    >
                      <span
                        className={`py-2 px-3 rounded-full text-white text-sm font-medium ${
                          subjectRecord.status === "Present"
                            ? "bg-cyan-900"
                            : "bg-red-500"
                        }`}
                      >
                        {subjectRecord.status}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Dashboard />
    </div>
  );
};

export default AttendanceTable;
