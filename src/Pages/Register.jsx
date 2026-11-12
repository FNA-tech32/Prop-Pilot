import React from "react";
import { NavLink } from "react-router-dom";
import AboutUs from "../Components/About/AboutUs";

const Register = () => {
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
            Create your account
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Join Prop Pilot for exclusive property rates and member perks
          </p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Create a password"
                  required
                  className="block w-full rounded-md border border-slate-300 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-[#24ab70] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="gap-y-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md primary-button px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1f9360] transition"
              >
                Create Account
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md bg-[#d1e9ff] px-3 mt-4 py-2 text-sm font-semibold leading-6 text-blue-700 shadow-sm hover:bg-blue-100 transition"
              >
                <div className="rounded-full">
                  <svg className="w-4 h-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-2">Continue with Google</span>
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500 capitalize">
            Already have an account?{" "}
            <NavLink to="/login" className="text-[#24ab70] font-semibold hover:underline">
              Log in
            </NavLink>
          </p>
        </div>
      </div>
      <div className="px-3 py-12">
        <AboutUs />
      </div>
    </section>
  );
};

export default Register;
