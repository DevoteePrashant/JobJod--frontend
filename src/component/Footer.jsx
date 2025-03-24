import logo1 from "../image/Logo1.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:w-full text-lg">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-10 lg:w-[82%]">
        {/* JobJod Section */}
        <div className="lg:col-span-2">
          <Link to="/">
            <img src={logo1} alt="JobJod" />
          </Link>
          <p className="text-gray-400 mt-4">
            Great platform for the job seeker that is passionate about startups.
            Find your dream job easier.
          </p>
        </div>

        {/* About and Resources Section */}
        <div className="flex sm:space-x-7 sm:col-span-2 lg:col-span-1">
          {/* About Section */}
          <div className="mb-7 sm:mb-0">
            <h2 className="text-lg font-bold mb-4">About</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link href="##" className="hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Advice
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Resources</h2>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link href="##" className="hover:text-white">
                  Help Docs
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Job Notifications Section */}
        <div className="lg:col-span-2 lg:gap-10">
          <h2 className="text-lg font-bold mb-4">Get job notifications</h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <div className="flex space-x-2 items-center">
            <input
              type="email"
              placeholder="Email Address"
              style={{ width: "1500px" }}
              className="flex-grow p-2 border border-gray-700 bg-white text-black text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
            <button className="bg-purple-700 text-white p-2 text-sm hover:bg-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center md:flex md:justify-between md:items-center w-[80%] mx-auto space-y-6 md:space-y-0">
        {/* Copyright Section */}
        <p className="text-gray-400 text-lg">2025 @ JobJod. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-xl text-gray-400 cursor-pointer">
          <FaFacebook />
          <FaInstagram />
          <RiBasketballLine />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
