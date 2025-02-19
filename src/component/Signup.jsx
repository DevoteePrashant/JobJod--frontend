import React from "react";
import { FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa6";
import img from "../image/login.png";
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row shadow-lg bg-white rounded-lg overflow-hidden">
          {/* Left Image Section */}
          <div className="hidden md:block md:w-4/5">
            <img
              src={img}
              alt="Login Illustration"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Form Section */}
          <div className="bg-white p-6 sm:p-8 md:p-12 w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800">Sign up</h2>
            <p className="text-sm text-gray-600 mt-2">
              Enter to continue and explore within your grasp.
            </p>

            <form className="mt-6 space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email ID
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your Email ID"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span>Remember Me</span>
                </label>
                <a href="##" className="text-gray-500 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
      type="submit"
      class="w-full bg-blue-900 text-white py-2 rounded-md transition "
    >
      Sign up to Continue
    </button>
            </form>

            {/* Social Login */}
                 <div class="mt-6 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
    <h3 class="font-bold text-blue-900">Sign up with</h3>
    <button class="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
      <span class="text-blue-700"><FaLinkedin /></span>
      <span>LinkedIn</span>
    </button>
    <button class="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
      <span class="text-blue-600"><FaFacebook /></span>
      <span>Facebook</span>
    </button>
    <button class="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
      <span class="text-red-500"><FaGoogle /></span>
      <span>Google</span>
    </button>
  </div>
            {/* Signup Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/LoginPage"  className="text-purple-700 font-bold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
