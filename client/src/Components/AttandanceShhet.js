import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { GlobalUserContetx, GlobalUserContext } from "../Context/UserContext";

const AttendanceSheet = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    day: "",
    Ai: "",
    Dwm: "",
    Bce: "",
    Wc: "",
    Cn: "",
    roll: "",
    Stats: "",
  });
  const [data, setData] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);
  const { NameOfUser, subjects } = GlobalUserContetx();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/attandance/All`
        );
        setData(response.data);

        setUpdateCount(updateCount + 1);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [updateCount]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalOpen(false);
    const attendanceData = { ...formData, NameOfUser };

    try {
      await axios.post(`http://localhost:3002/attandance/add`, attendanceData);
      setUpdateCount(updateCount + 1);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="bg-grey-200">
      <section className="lg:py-20 lg:px-16 capitalize rounded shadow-md shadow-blue-gray-800">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-white hover:bg-gray-800 text-gray-900 z-0 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Add</span>
        </button>

        {modalOpen && (
          <div className="lg:mx-[33%] lg:my-12 bg-grey-200 shadow-gray-100 shadow-md">
            <div className="container bg-grey-50 shadow-inner flex bg-grey-200 items-center justify-center min-h-screen px-6 mx-auto">
              <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <h1 className="text-center text-3xl ">Add Details</h1>
                {["day", "roll", "Ai", "Dwm", "Bce", "Wc", "Cn", "Stats"].map(
                  (field, idx) => (
                    <div key={idx} className="relative flex items-center mt-8">
                      <span className="absolute">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <input
                        type={field === "roll" ? "number" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-white text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder={field}
                      />
                    </div>
                  )
                )}
                <div className="my-6 flex">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-black bg-white capitalize transition-colors duration-300 transform rounded-md hover:bg-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white bg-red-800 capitalize transition-colors duration-300 transform rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <table className="t">
          <thead className="h-10 rounded-lg text-white font-extrabold text-xs lg:text-sm">
            <tr className="border-2 md:text-sm lg:min-w-screen justify-between border-gray-800">
              {subjects.map((header, idx) => (
                <th key={idx} className="bg-indigo-900 lg:w-52 w-24 text-xs">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, ind) => (
              <tr key={ind} className="text-white lg:text-sm text-xs">
                <td className="lg:w-44 sm:w-12 p-3 border-0 shadow-sm bg-white text-black">
                  {item.NameOfUser}
                </td>
                <td className="lg:w-44 sm:w-12 p-3 border-0 shadow-sm bg-white text-black">
                  {item.roll}
                </td>
                <td className="lg:w-44 sm:w-12 p-3 border-0 shadow-sm bg-white text-black">
                  {item.day}
                </td>
                <td className="lg:w-44 sm:w-12 p-3 border-0 shadow-sm bg-white text-black">
                  {item.Ai}
                </td>
                <td className="lg:w-44 sm:w-12 p-3 border-0 shadow-sm bg-white text-black">
                  {item.Dwm}
                </td>
                <td className="lg:w-44 sm:w-12 p-3 border-0 shadow-sm bg-white text-black">
                  {item.Wc}
                </td>
                <td className="lg:w-44 sm:w-12 p-3 border-0 shadow-sm bg-white text-black">
                  {item.Stats}
                </td>
                <td className="lg:w-44 sm:w-12 p-3 border-0 shadow-sm bg-white text-black">
                  {item.Cn}
                </td>
                <td className="lg:w-44 sm:w-12 p-3 border-0 shadow-sm bg-white text-black">
                  {item.Bce}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AttendanceSheet;
