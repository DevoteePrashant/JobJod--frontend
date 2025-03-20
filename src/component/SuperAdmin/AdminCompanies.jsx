
import { useState } from "react";
import dashboard from "../../image/dashboard.png";
import { RxDashboard } from "react-icons/rx";
import { PiBagSimpleFill } from "react-icons/pi";
import { PiMonitorFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
// import { IoMdSettings } from "react-icons/io";
import logo2 from "../../image/logo2.png";
import img from "../../image/icon.png";
import Dheader2 from "../Dheader2";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Search, AlignJustify, ChevronDown } from "lucide-react";
import AdminSidebar from "./AdminSidebar";

function AdminCompanies() {
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
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <div className="lg:block">
          <Dheader2 />
        </div>
        {/* Content Area */}
        <main className="flex-1 p-3 sm:p-4 overflow-y-auto">
          <div className="max-h-screen mx-auto p-0 sm:p-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="search company..."
                  className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none text-sm"
                />
              </div>
              <div className="relative">
                <button className="w-full sm:w-auto flex items-center justify-between px-4 py-2.5 bg-white border border-gray-200 rounded-lg min-w-[140px] sm:min-w-[180px]">
                  <div className="flex items-center gap-2">
                    <AlignJustify className="h-5 w-5 text-gray-700" />
                    <span className="font-medium text-gray-700">Filter by</span>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gray-700 ml-2" />
                </button>
              </div>
            </div>

            {/* Company Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Image icon */}
                  <img
                    src={img || "/placeholder.svg"}
                    alt="icon"
                    className="w-10 h-10 sm:w-auto sm:h-auto"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Linear company
                      </h3>
                      <span className="mt-1 sm:mt-0 px-3 sm:px-4 py-1 bg-emerald-500 text-white text-xs sm:text-sm rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6 mt-1 text-xs sm:text-sm text-gray-600">
                      <span>Joining: 07/March/2025</span>
                      <span>Expiry: 15/March/2025</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                  <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                    Details
                  </button>
                  <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                    Job Posts
                  </button>
                  <button className="px-4 sm:px-6 py-2 bg-purple-400 text-white rounded-full text-xs sm:text-sm font-medium">
                    Check Messages
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Image icon */}
                  <img
                    src={img || "/placeholder.svg"}
                    alt="icon"
                    className="w-10 h-10 sm:w-auto sm:h-auto"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Linear company
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                        <span className="px-3 sm:px-4 py-1 bg-orange-400 text-white text-xs sm:text-sm rounded-full whitespace-nowrap">
                          Verification Pending
                        </span>
                        <span className="px-3 sm:px-4 py-1 bg-red-600 text-white text-xs sm:text-sm rounded-full">
                          Inactive
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6 mt-1 text-xs sm:text-sm text-gray-600">
                      <span>Joining: 07/March/2025</span>
                      <span>Expiry: 15/March/2025</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                  <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                    Details
                  </button>
                  <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                    Job Posts
                  </button>
                  <button className="px-4 sm:px-6 py-2 bg-purple-400 text-white rounded-full text-xs sm:text-sm font-medium">
                    Check Messages
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Image icon */}
                  <img
                    src={img || "/placeholder.svg"}
                    alt="icon"
                    className="w-10 h-10 sm:w-auto sm:h-auto"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start">
                      <h3 className="text-base sm:text-lg font-semibold">
                        Linear company
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
                        <span className="px-3 sm:px-4 py-1 bg-red-700 text-white text-xs sm:text-sm rounded-full whitespace-nowrap">
                          Policy Violet
                        </span>
                        <span className="px-3 sm:px-4 py-1 bg-emerald-500 text-white text-xs sm:text-sm rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6 mt-1 text-xs sm:text-sm text-gray-600">
                      <span>Joining: 07/March/2025</span>
                      <span>Expiry: 15/March/2025</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                  <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                    Details
                  </button>
                  <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium">
                    Job Posts
                  </button>
                  <button className="px-4 sm:px-6 py-2 bg-purple-400 text-white rounded-full text-xs sm:text-sm font-medium">
                    Check Messages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminCompanies;
