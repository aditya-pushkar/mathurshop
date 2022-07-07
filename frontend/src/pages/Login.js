import React from "react";

import "../assets/css/Login.css";

const Login = () => {
  return (
    <div className="pt-32 loginStyle">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  bg-gray-100 text-neutral-600">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Admin Login</h1>
          <p className="text-sm dark:text-gray-400">
            Login to access your account
          </p>
        </div>
        <form
          novalidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label for="username" className="block mb-2 text-sm">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your Username"
                className="w-full px-3 py-2 border rounded-md dark:bg-white dark:text-black"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:bg-white dark:text-black"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="place-self-center w-full px-8 py-3 font-semibold rounded-md bg-primaryBtn text-white"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
