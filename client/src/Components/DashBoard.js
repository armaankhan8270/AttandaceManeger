import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { GlobalUserContetx } from "../Context/UserContext";

const Dashboard = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subjectFilter, setSubjectFilter] = useState("All");
  const { NameOfUser } = GlobalUserContetx();
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
        setError("Error fetching attendance data. Please try again later.");
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, []);

  const calculateAttendancePercentage = () => {
    if (attendanceData.length === 0) return 0;

    let totalRecords = 0;
    let presentCount = 0;

    attendanceData.forEach((record) => {
      record.attendanceRecords.forEach((subjectRecord) => {
        totalRecords++;
        if (subjectRecord.status === "Present") {
          presentCount++;
        }
      });
    });

    return ((presentCount / totalRecords) * 100).toFixed(2);
  };

  const calculateSubjectPercentage = (subjectCounts) => {
    const percentages = {};

    Object.keys(subjectCounts).forEach((subject) => {
      const { Present, Absent } = subjectCounts[subject];
      const total = Present + Absent;
      percentages[subject] =
        total > 0 ? ((Present / total) * 100).toFixed(2) : 0;
    });

    return percentages;
  };

  const prepareChartData = () => {
    const subjectCounts = {};

    attendanceData.forEach((record) => {
      record.attendanceRecords.forEach((subjectRecord) => {
        const { subject, status } = subjectRecord;
        if (subjectFilter !== "All" && subject !== subjectFilter) return;

        if (!subjectCounts[subject]) {
          subjectCounts[subject] = {
            Present: 0,
            Absent: 0,
          };
        }
        subjectCounts[subject][status]++;
      });
    });

    return subjectCounts;
  };

  const chartData = prepareChartData();
  const subjectPercentages = calculateSubjectPercentage(chartData);

  if (loading) {
    return (
      <div className="p-4">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  // Update the color schemes for charts
  const pieData = {
    labels: Object.keys(chartData),
    datasets: [
      {
        label: "Attendance",
        data: Object.keys(chartData).map(
          (subject) => chartData[subject].Present
        ),
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)", // Teal
          "rgba(255, 99, 132, 0.7)", // Soft Red
          "rgba(255, 206, 86, 0.7)", // Yellow
          "rgba(54, 162, 235, 0.7)", // Sky Blue
          "rgba(153, 102, 255, 0.7)", // Lavender
          "rgba(255, 159, 64, 0.7)", // Orange
          "rgba(255, 205, 86, 0.7)", // Light Yellow
          "rgba(201, 203, 207, 0.7)", // Light Grey
        ],
      },
    ],
  };

  const barData = {
    labels: Object.keys(chartData),
    datasets: [
      {
        label: "Present",
        data: Object.keys(chartData).map(
          (subject) => chartData[subject].Present
        ),
        backgroundColor: "rgba(75, 192, 192, 0.7)", // Teal
      },
      {
        label: "Absent",
        data: Object.keys(chartData).map(
          (subject) => chartData[subject].Absent
        ),
        backgroundColor: "rgba(255, 99, 132, 0.7)", // Soft Red
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-900 text-white">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold">Attendance Dashboard</h2>
        <p className="text-gray-400">
          Attendance records and percentage for {attendanceData.length} records
        </p>
      </div>

      <div className="container mx-auto flex flex-col items-center space-y-8">
        <div className="w-full bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-lg font-semibold">Filter by Subject</h3>
            <select
              className="border border-gray-600 bg-gray-700 text-white rounded p-2"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
            >
              <option value="All">All</option>
              {Object.keys(chartData).map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="w-full">
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
            </div>
            <div className="w-full">
              <Bar data={barData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-800 rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold text-center">
            Subject Percentages
          </h3>
          <ul className="list-disc list-inside mt-2 text-center">
            {Object.keys(subjectPercentages).map((subject) => (
              <li className="p-3" key={subject}>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-black">
                        {subject}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-gray-100">
                        {subjectPercentages[subject]}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-black">
                    <div
                      style={{ width: `${subjectPercentages[subject]}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-500"
                    ></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full bg-gray-800 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold text-center">
            Attendance Percentage
          </h2>
          <p className="text-gray-400 text-center">
            Total percentage of attendance: {calculateAttendancePercentage()}%
          </p>
          <div className="relative mt-4 h-6 bg-gray-900 rounded-lg overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-cyan-500 text-white text-lg leading-none p-1 rounded-lg"
              style={{
                width: `${calculateAttendancePercentage()}%`,
                transition: "width 0.5s ease-in-out",
              }}
            >
              {calculateAttendancePercentage()}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
