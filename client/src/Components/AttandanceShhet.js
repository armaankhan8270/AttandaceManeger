import axios from "axios";
import React, { useEffect, useState } from "react";
import { GlobalUserContetx } from "../Context/UserContext";

const AttandanceShhet = () => {
  const [model, setmodel] = useState(false);
  const [day, setday] = useState("");
  const [Ai, setAi] = useState("");
  const [Dwm, setDwm] = useState("");
  const [Bce, setBce] = useState("");
  const [Wc, setWc] = useState("");
  const [Cn, setCn] = useState("");
  const [roll, setroll] = useState();
  const [Stats, setStats] = useState("");
  const [Data, setData] = useState([]);
  const [update, setupdate] = useState(0);
  const { NameOfUser } = GlobalUserContetx();
  const AttandanceData = { roll, day, Ai, Dwm, Cn, Wc, Stats, Bce, NameOfUser };
  useEffect(() => {
    const getData = async () => {
      const geturl = `http://localhost:3002/attandance/All`;
      await axios.get(geturl).then((e) => {
        setData(e.data);
        console.log(e.data);
        // setupdate(update + 1);
      });
    };
    getData();
  }, [update]);
  const Post = async (e) => {
    const url = `http://localhost:3002/attandance/add`;
    // e.prevantDefault();
    e.preventDefault();
    setmodel(false);
    await axios
      .post(url, AttandanceData)
      .then((e) => {
        console.log(e);
        setupdate(update + 1);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };
  const Poost = (e) => {};

  return (
    <div
      className="
    bg-[#243b55]   "
    >
      <section className="lg:py-20 lg:px-16 capitalize  rounded shadow-md shadow-blue-gray-800">
        <button
          onClick={() => setmodel(true)}
          class="bg-white   hover:bg-gray-800 text-gray-900 z-0 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span>Add</span>
        </button>

        <div className="lg:mx-[33%] lg:my-12 shadow-gray-500 shadow-xl">
          {model ? (
            <div className="container shadow-inner flex items-center justify-center min-h-screen px-6 mx-auto">
              <form className="w-full max-w-md">
                <div className="relative flex items-center mt-8">
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
                    type="text"
                    value={day}
                    onChange={(e) => setday(e.target.value)}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-white text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="date"
                  />
                </div>
                <div className="relative flex items-center mt-8">
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
                    type="number"
                    value={roll}
                    onChange={(e) => setroll(e.target.value)}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-white text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Roll Number"
                  />
                </div>
                <div className="relative flex items-center mt-8">
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
                    type="text"
                    value={Ai}
                    onChange={(e) => setAi(e.target.value)}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-white text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Ai"
                  />
                </div>
                <div className="relative flex items-center mt-8">
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
                    type="text"
                    value={Dwm}
                    onChange={(e) => setDwm(e.target.value)}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-white text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Dwm"
                  />
                </div>
                <div className="relative flex items-center mt-8">
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
                    type="text"
                    value={Bce}
                    onChange={(e) => setBce(e.target.value)}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-white text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Bce"
                  />
                </div>

                <div className="relative flex items-center mt-6">
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
                    type="text"
                    value={Wc}
                    onChange={(e) => setWc(e.target.value)}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-white text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Wc"
                  />
                </div>
                <div className="relative flex items-center mt-4">
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
                    type="Cn"
                    value={Cn}
                    onChange={(e) => setCn(e.target.value)}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-white text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Cn"
                  />
                </div>
                <div className="relative flex items-center mt-4">
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
                    type="text"
                    value={Stats}
                    onChange={(e) => setStats(e.target.value)}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-white text-black dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Stats"
                  />
                </div>

                <div className="my-6  flex">
                  <button
                    onClick={Post}
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-black bg-white capitalize transition-colors duration-300 transform rounded-md hover:bg-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  >
                    Add
                  </button>
                  <button
                    onClick={() => setmodel(false)}
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white bg-red-800 capitalize transition-colors duration-300 transform rounded-md  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
        <table class="t">
          <thead className="h-10 rounded-lg text-white font-extrabold text-xs lg:text-sm">
            <tr className="border-2 md:text-sm    lg:min-w-screen justify-between border-gray-800">
              <th className="bg-indigo-900 text-xs">name </th>
              <th className="bg-indigo-900">RNo </th>
              <th className="bg-indigo-900">Date</th>
              <th className="bg-indigo-900">Ai</th>
              <th className="bg-indigo-900">Dwm</th>
              <th className="bg-indigo-900">Wc</th>
              <th className="bg-indigo-900">Stats</th>
              <th className="bg-indigo-900">Cn</th>
              <th className="bg-indigo-900">Bce</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((item, ind) => {
              return (
                <tr key={ind} className="text-white lg:text-sm text-xs">
                  <td className="lg:w-44 sm:w-12 p-3 border- border-0 shadow-sm bg-white text-black">
                    {item.NameOfUser}
                  </td>
                  <td className="lg:w-44 sm:w-12 p-3 border- border-0 shadow-sm bg-white text-black">
                    {item.roll}
                  </td>
                  <td className="lg:w-44  sm:w-5 p-3 border- border-0 shadow-sm bg-white text-black">
                    {item.day}
                  </td>
                  <td className="lg:w-44 sm:w-12 p-3 border- border-0 shadow-sm bg-white text-black">
                    {item.Ai}
                  </td>
                  <td className="lg:w-44 sm:w-12 p-3 border2 border-0 shadow-sm bg-white text-black">
                    {item.Dwm}
                  </td>
                  <td className="lg:w-44 sm:w-12 p-3 border2 border-0 shadow-sm bg-white text-black">
                    {item.Wc}
                  </td>
                  <td className="lg:w-44 sm:w-12 p-3 border2 border-0 shadow-sm bg-white text-black">
                    {item.Stats}
                  </td>
                  <td className="lg:w-44 sm:w-12 p-3 border2 border-0 shadow-sm bg-white text-black">
                    {item.Cn}
                  </td>
                  <td className="lg:w-44 sm:w-12 p-3 border2 border-0 shadow-sm bg-white text-black">
                    {item.Bce}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AttandanceShhet;
