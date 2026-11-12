import React from "react";
import Popular from "../Components/Popular/Popular";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 py-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <NavLink to="/" className="inline-block">
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="text-[#24ab70]">Prop</span> Pilot
            </h2>
          </NavLink>
          <h3 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Access your booked stays and saved properties
          </p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full rounded-md border border-slate-300 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-[#24ab70] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a href="#forgot" className="text-[#24ab70] hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="block w-full rounded-md border border-slate-300 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-[#24ab70] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md primary-button px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1f9360] transition"
              >
                Login Now
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500 capitalize">
            Don't have an account?{" "}
            <NavLink to="/register" className="text-[#24ab70] font-semibold hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
      <div className="px-3 py-12">
        <Popular />
      </div>
    </section>
  );
};

export default Login;
