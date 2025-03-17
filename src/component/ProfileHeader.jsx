import { Share2} from "lucide-react"
import { useRef, useEffect } from 'react';
import img from "../image/profile.jpg"
import { Link } from "react-router-dom";
export function ProfileHeader({ name, role, avatarUrl }) {
    const buttonRef = useRef(null);

    useEffect(() => {
      const handleClick = () => console.log('Button clicked!');
      if (buttonRef.current) {
        buttonRef.current.addEventListener('click', handleClick);
  
        // Cleanup event listener on component unmount
        return () => {
          buttonRef.current.removeEventListener('click', handleClick);
        };
      }
    }, []);
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('myButton');
        if (button) {
          button.addEventListener('click', () => {
            console.log('Button clicked!');
          });
        }
      });
        
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="relative order-1 sm:order-none">
          <img
            src={img}
            alt={"Profile "}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-purple-500 rounded-full" />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>

      <div className="flex items-center justify-center sm:justify-start gap-2">
        <button className="p-2 rounded-md hover:bg-gray-100">
          <Share2 className="w-4 h-4" />
        </button>
{/* 
        <!-- Dropdown --> */}
  <div class="relative inline-block text-left">
    {/* <!-- Dropdown Trigger --> */}
    <button id="dropdownButton" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Options
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
{/*  */}
    {/* <!-- Dropdown Menu --> */}
    <div id="dropdownMenu" class="hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div class="py-1">
        <Link href="##" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
        <Link href="##" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
        <Link href="##" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
      </div>
    </div>
  </div>

      </div>
    </div>
  )
}

