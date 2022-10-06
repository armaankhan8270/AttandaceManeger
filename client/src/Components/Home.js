import React, { useEffect, useState } from "react";
import axios from "axios";
import Error from "./Error";
import Success from "./Success";
import { GlobalUserContetx } from "../Context/UserContext";

const Home = () => {
  const {
    UserLogin,
    setUserLogin,
    UserLogout,
    setUserLogout,
    NameOfUser,
    setNameOfUser,
  } = GlobalUserContetx();
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
        setUserLogin("True");
        setNameOfUser(data.data);
      })
      .catch((e) => seterr(true));
    // setUserLogin(false);
    setTimeout(() => {
      setsuccess(false);
      seterr(false);
    }, 2000);
  };
  return (
    <div>
      {err ? <Error error={"check your username or password"} /> : ""}
      {success ? <Success m={"loginned successfully"} /> : ""}
      <header className="bg-gray-900 pattern">
        <div className="container px-6 mx-auto">
          <nav className="flex flex-col py-2 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <a
                href="#"
                className="text-2xl font-semibold text-white hover:text-gray-300"
              >
                Brand
              </a>
            </div>
          </nav>
          <div className="flex flex-col items-center py-6 lg:h-[32rem] lg:flex-row">
            <div className="lg:w-1/2">
              {/* <h2 className="text-4xl font-semibold text-gray-100">Brand</h2> */}
              <h3 className="text-2xl font-semibold text-gray-100">
                Hello <span className="text-blue-400">Churan</span>
              </h3>
              <p className="mt-3 text-gray-100">
                Weclome To Attandance Maneger
              </p>
            </div>
            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
              <div className="max-w-sm bg-white rounded-lg dark:bg-gray-800">
                <div className="p-5 text-center">
                  <h2 className="text-2xl font-semibold text-gray-700 dark:text-white fo">
                    Sign In
                  </h2>
                  <form action="#">
                    <div className="mt-4">
                      <input
                        className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Email address"
                        aria-label="Email address"
                      />
                      <input
                        className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        placeholder="Password"
                        aria-label="Password"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <a
                        href="/signin"
                        onClick={() => alert("abe dusra account bana ab ")}
                        className="text-sm text-gray-600 dark:text-gray-200 hover:underline"
                      >
                        Forget Password?
                      </a>
                      <button
                        onClick={Login}
                        className="px-4 py-2 font-semibold text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
