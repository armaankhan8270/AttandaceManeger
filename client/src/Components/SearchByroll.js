import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchByroll = () => {
  const [Data, setData] = useState([]);
  const [update, setupdate] = useState(0);
  const [SearchRoll, setSearchRoll] = useState(18);
  useEffect(() => {
    const getData = async () => {
      const geturl = `http://localhost:3002/attandance/byroll?roll=${SearchRoll}`;
      await axios.get(geturl).then((e) => {
        setData(e.data);
        console.log(e.data);
      });
    };
    getData();
  }, [update]);
  return (
    <div className="lg:p-12 bg-gray-900">
      <div class="relative ">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Your Attandance By Roll"
          required
          value={SearchRoll}
          onChange={(e) => {
            setSearchRoll(e.target.value);
            setupdate(update + 1);
          }}
        />
        <button
          // type="button"
          onClick={() => setupdate(update + 1)}
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      <table class="t">
        <thead>
          <tr className="border-2 text-white min-w-screen justify-between border-gray-800">
            <th className="bg-indigo-900">RollNo</th>
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
              <tr key={ind} className="text-white">
                <td className="lg:w-44 sm:w-12 p-3 border- border-0 shadow-sm bg-white text-black">
                  {item.roll}
                </td>
                <td className="lg:w-44 sm:w-12 p-3 border- border-0 shadow-sm bg-white text-black">
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
    </div>
  );
};

export default SearchByroll;
