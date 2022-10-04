import React, { useEffect, useState } from "react";
import axios from "axios";

import { useRef } from "react";
const Index = () => {
  const [Data, setData] = useState([]);
  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    // console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  useEffect(() => {
    const getData = async () => {
      const url = `http://localhost:3002/user/register`;
      await axios.get(url).then((data) => {
        setData(data.data);
        console.log(data.data[0].username);
      });
    };
    getData();
  }, []);
  return (
    <form id="login" onSubmit={handleSubmit}>
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                {/* {Data[0].username} */}
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div className="rounded relative mt-8 h-48">
                <img
                  src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg"
                  alt
                  className="w-full h-full object-cover rounded absolute shadow"
                />
                <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
                <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                  <p className="text-xs text-gray-100">{}</p>
                  <div className="ml-2 text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                  </div>
                </div>
                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                  <img
                    src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                    alt
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                  />
                  <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                  <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-edit"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                    <p className="text-xs text-gray-100">Edit Picture</p>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="@example"
                />
              </div>
              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="about"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  About
                </label>
                <textarea
                  id="about"
                  name="about"
                  required
                  className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Let the world know who you are"
                  rows={5}
                  defaultValue={""}
                />
                <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                  Character Limit: 200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Index;
