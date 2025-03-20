import { useState } from "react";
import dashboard from "../../image/dashboard.png";
import { RxDashboard } from "react-icons/rx";
import { PiBagSimpleFill } from "react-icons/pi";
import { PiMonitorFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import logo2 from "../../image/logo2.png";
import img from "../../image/dashboard.png";
import Dheader2 from "../Dheader2";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, AlignJustify } from "lucide-react";
import AdminDashboard from "./AdminDashboard";
import AdminSidebar from "./AdminSidebar";

function AdminJobseeker() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location=useLocation()
  const substrLocation=location.pathname.substring(1)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <AdminSidebar substrLocation={substrLocation} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Dheader2 />
        {/* <Chartdashboard/> */}

        {/* Content Area */}
        <main className="flex-1 p-3 sm:p-4 overflow-y-auto">
          <div className="max-h-screen mx-auto p-0 sm:p-6 bg-white">
            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button className="w-full sm:w-auto flex items-center justify-between px-4 py-2.5 bg-white border border-gray-200 rounded-lg min-w-[140px] sm:min-w-[180px]">
                <div className="flex items-center gap-2">
                  <AlignJustify className="h-5 w-5 text-gray-700" />
                  <span className="font-medium text-gray-700">Filter by</span>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-700 ml-2" />
              </button>
            </div>

            {/* Employee Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Employee Card 1 */}
              <div className="border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <img
                    src={img || "/placeholder.svg"}
                    alt="Employee profile"
                    width={80}
                    height={80}
                    className="rounded-md object-cover w-20 h-20"
                  />
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-start">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold">
                          Anamoul Willioms
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">
                          Joining : 07/March/2025
                        </p>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-full mt-2 sm:mt-0">
                        Active
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                      <button className="px-3 sm:px-6 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                        Details
                      </button>
                      <button className="px-3 sm:px-6 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                        Job Applied
                      </button>
                      <button className="px-3 sm:px-6 py-1.5 sm:py-2 bg-purple-500 text-white rounded-full text-xs sm:text-sm font-medium">
                        Check Messages
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Employee Card 2 */}
              <div className="border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <img
                    src={img || "/placeholder.svg"}
                    alt="Employee profile"
                    width={80}
                    height={80}
                    className="rounded-md object-cover w-20 h-20"
                  />
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-start">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold">
                          Anamoul Willioms
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">
                          Joining : 07/March/2025
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-red-700 rounded-full">
                          Policy Violet
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                      <button className="px-3 sm:px-6 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                        Details
                      </button>
                      <button className="px-3 sm:px-6 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                        Job Applied
                      </button>
                      <button className="px-3 sm:px-6 py-1.5 sm:py-2 bg-purple-500 text-white rounded-full text-xs sm:text-sm font-medium">
                        Check Messages
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminJobseeker;
