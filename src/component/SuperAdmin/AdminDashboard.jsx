import React, { useState } from 'react';
import dashboard from "../../image/dashboard.png";
import { RxDashboard } from "react-icons/rx";
import { PiBagSimpleFill } from "react-icons/pi";
import { PiMonitorFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import logo2 from "../../image/logo2.png";
import Dheader from "../Dheader";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Chartdashboard from "../Chartdashboard";
import Jobs from "../../component/SuperAdmin/Jobs";
ChartJS.register(ArcElement, Tooltip, Legend);

function AdminDashboard() {
  const [hoveredSegment, setHoveredSegment] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const data2 = {
    labels: ['Shortlisted', 'Hired', 'Rejected'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [



        
        'rgb(0 0 0)',
        'rgb(250 151 108)',
        'rgba(158, 134, 224)' 
      ],
      hoverOffset: 4
    }]
  };
  const applicationData = [
    { id: 0, label: "Shortlisted", count: 300, color: "rgb(0, 0, 0)" },
    { id: 1, label: "Hired", count: 50, color: "rgb(250, 151, 108)" },
    { id: 2, label: "Rejected", count: 100, color: "rgba(158, 134, 224)" }
  ]
  const totalApplications = applicationData.reduce(
    (sum, item) => sum + item.count,
    0
  )
  const dataWithPercentage = applicationData.map(item => ({
    ...item,
    percentage: Math.round((item.count / totalApplications) * 100)
  }))
  const chartData = {
    labels: applicationData.map(item => item.label),
    datasets: [
      {
        data: applicationData.map(item => item.count),
        backgroundColor: applicationData.map(item => item.color),
        hoverOffset: 4
      }
    ]
  }
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // Hide default legend as we're creating a custom one
      },
      tooltip: {
        enabled: false // Disable default tooltip as we're creating a custom one
      }
    },
    onHover: (event, elements) => {
      if (elements && elements.length === 1) {
        setHoveredSegment(elements[0].index)
      } else {
        setHoveredSegment(null)
      }
    }
  }


  const config = {
    type: 'pie',
    data: data2,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      onHover: (event, chartElement) => {
        if (chartElement.length === 1) {
          setHoveredSegment(chartElement[0].index);
        } else {
          setHoveredSegment(null);
        }
      }
    }
  };

  // const totalCount = data2.datasets[0].data.reduce((sum, value) => sum + value, 0);
  // const dataWithPercentage = data2.labels.map((label, index) => ({
  //   id: index,
  //   label: label,
  //   count: data2.datasets[0].data[index],
  //   percentage: ((data2.datasets[0].data[index] / totalCount) * 100).toFixed(2)
  // }));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // const data = [
  //   { id: 1, label: "Shortlisted", count: 942, color: "#A3A4FF", percentage: 27.5 },
  //   { id: 2, label: "Hired", count: 250, color: "#FFB380", percentage: 0.7 },
  //   { id: 3, label: "Rejected", count: 2452, color: "#000000", percentage: 71.8 },
  // ];

  // const totalApplications = data.reduce((sum, item) => sum + item.count, 0);
  
  

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 text-gray-700 hover:text-gray-900"
      >
        {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          w-64 flex-shrink-0 bg-white shadow-lg fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:block
        `}
      >
        {/* Sidebar Content */}
        <div className="flex items-center justify-center h-20">
          <img src={logo2} alt="JOBJOD" className="h-9" />
        </div>

        {/* Profile */}
        <div className="flex items-center p-4 space-x-4 m-auto">
          <div className="relative">
            <img
              src={dashboard}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <p className="text-gray-700 font-bold">Hello, Company</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 mt-6">
          <ul>
            <li className="mb-2">
              <Link to="/AdminDashboard" className="flex items-center p-2 rounded-xl text-sm font-medium  text-white bg-gray-900 hover:bg-gray-800">
                <RxDashboard className="mr-2" /> <span className="m-auto">Dashboard</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/Jobs" className="flex items-center p-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">
                <PiBagSimpleFill className="mr-2" />  <span className="m-auto">Jobs</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/AdminJobseeker" className="flex items-center p-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">
              <FaUser className="mr-2" /> <span className="m-auto">Jobseekers</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/AdminCompanies" className="flex items-center p-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">
              <PiMonitorFill className="mr-2" /> <span className="m-auto">Companies</span>
              </Link>
            </li>
            <li>
              <Link to="##" className="flex items-center p-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">
              <FaUser className="mr-2" /> <span className="m-auto">Enquiries</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Dheader />
        {/* <Chartdashboard/> */}

        {/* Content Area */}
        <main className="flex-1 p-4 overflow-y-auto">
          {/* Dashboard Content */}
          
          <div className="bg-white p-4 rounded-lg">
            {/* Adjust grid-cols based on screen size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            </div>
            <Chartdashboard/>
            {/* Adjust grid-cols based on screen size */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Application Response Chart */}
              <div className="bg-white rounded-lg p-4 w-full max-w-4xl mx-auto border border-gray-200 shadow-md">
      <h2 className="text-gray-700 font-bold text-lg md:text-xl mb-4">
        Application Response
      </h2>

      <div className="relative flex flex-col md:flex-row items-start justify-between gap-6 py-4">
        {/* Chart container - LEFT SIDE */}
        <div className="relative w-full md:w-1/2 h-64 md:h-72">
          <Pie data={chartData} options={chartOptions} />
          {hoveredSegment !== null && (
            <div className="absolute top-0 left-0 right-0 -mt-10 flex justify-center pointer-events-none ">
              <div className="bg-gray-800 text-white px-3 py-1 rounded text-sm ">
                {dataWithPercentage[hoveredSegment].label}:{" "}
                {dataWithPercentage[hoveredSegment].count} (
                {dataWithPercentage[hoveredSegment].percentage}%)
              </div>
            </div>
          )}
        </div>

        {/* Legend - RIGHT SIDE */}
        <div className="flex flex-col space-y-3 w-full md:w-1/2 md:min-w-[180px] pt-12">
          {dataWithPercentage.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-2 cursor-pointer transition-opacity duration-200"
              style={{
                opacity:
                  hoveredSegment !== null && hoveredSegment !== item.id
                    ? 0.5
                    : 1
              }}
              onMouseEnter={() => setHoveredSegment(item.id)}
              onMouseLeave={() => setHoveredSegment(null)}
            >
              <div
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="flex justify-between w-full">
                <span className="text-sm md:text-base">{item.label}:</span>
                <span className="text-sm md:text-base font-bold ml-2">
                  {item.count.toLocaleString()}
                </span>
              </div>
            </div>
          ))}

          <div className="pt-2 border-t border-gray-200 mt-2">
            <div className="flex justify-between w-full">
              <span className="text-sm md:text-base">Total:</span>
              <span className="text-sm md:text-base font-bold ml-2">
                {totalApplications.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

              {/* Recent Job Posts */}
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md">
                <div className="flex flex-col md:flex-row justify-end mb-4">
                  <h2 className="font-bold mr-auto text-2xl">Recent Job Post</h2>
                  <div className="flex space-x-1 ">
                    <button className="bg-gray-100 text-gray-700 rounded-l-full px-2 py-2 text-sm">Monthly</button>
                    <button className="bg-gray-100 text-gray-700 px-2 py-2 text-sm">Weekly</button>
                    <button className="bg-violet-400 text-white font-semibold rounded-r-full px-2 py-2 text-sm">Today</button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Job Title</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Category</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Openings</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Applications</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">UI UX Designer</td>
                        <td className="px-4 py-2">Full Time</td>
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">135</td>
                        <td className="px-4 py-2"><button type="button" className="bg-emerald-400 text-white px-4 py-2 rounded-xl ">Active</button></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Full Stack Dev</td>
                        <td className="px-4 py-2">Full Time</td>
                        <td className="px-4 py-2">08</td>
                        <td className="px-4 py-2">100</td>
                        <td className="px-4 py-2"><button type="button" className="bg-orange-400 text-white px-2 py-2 rounded-xl ">Inactive</button></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">DevOps</td>
                        <td className="px-4 py-2">Internship</td>
                        <td className="px-4 py-2">12</td>
                        <td className="px-4 py-2">05</td>
                        <td className="px-4 py-2"><button type="button" className="bg-emerald-400 text-white px-4 py-2 rounded-xl ">Active</button></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Android Dev</td>
                        <td className="px-4 py-2">Full Time</td>
                        <td className="px-4 py-2">04</td>
                        <td className="px-4 py-2">45</td>
                        <td className="px-4 py-2"><button type="button" className="bg-emerald-400 text-white px-4 py-2 rounded-xl ">Active</button></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">IOS Developer</td>
                        <td className="px-4 py-2">Full Time</td>
                        <td className="px-4 py-2">18</td>
                        <td className="px-4 py-2">96</td>
                        <td className="px-4 py-2"><button type="button" className="bg-orange-400 text-white px-2 py-2 rounded-xl ">Inactive</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
