import React, { useEffect, useState } from "react";
import axios from "axios";
import Error from "./Error";
import Success from "./Success";

const Login = () => {
  const [err, seterr] = useState(false);
  const [success, setsuccess] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Login = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3002/user/login`;
    await axios
      .post(url, { email, password })
      .then((data) => {
        console.log(data);
        setsuccess(true);
      })
      .catch((e) => seterr(true));
    setTimeout(() => {
      setsuccess(false);
      seterr(false);
    }, 2000);
  };
  return (
    <div className="bg-[#595b86]   pt-0 lg:py-12">
      {err ? <Error error={"check your username or password"} /> : ""}
      {/* {success ? <Success message={"loginned successfully"} /> : ""} */}
      <div class="bg-gray-300 mt-4 w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md dark:bg-gray-800">
        <div class="px-6 py-4">
          <h2 class="text-3xl font-bold text-center text-gray-900  dark:text-white">
            Brand
          </h2>

          <h3 class="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>

          <p class="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login or create account
          </p>

          <form>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <div class="flex items-center justify-between mt-4">
              <a
                href="#"
                class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
              >
                Forget Password?
              </a>

              <button
                class="px-4 py-2 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="button"
                onClick={Login}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span class="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?{" "}
          </span>

          <a
            href="#"
            class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
