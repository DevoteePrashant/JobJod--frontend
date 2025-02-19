import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { RxDashboard } from "react-icons/rx";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMessage, MdContentPasteSearch, MdNotifications } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import image2 from "../image/logo2.png";
import profile from "../image/profile.jpg";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const jobStats = [
    { title: "Job Posts", value: "2,456", change: "+2.5%", color: "text-green-500" },
    { title: "Total Applications", value: "4,561", change: "-4.4%", color: "text-red-500" },
    { title: "No of Meetings", value: "125", change: "+1.5%", color: "text-orange-500" },
    { title: "No of Hirings", value: "2,456", change: "+4.5%", color: "text-green-500" },
  ];

  const jobPosts = [
    { title: "UI UX Designer", category: "Full Time", openings: "12", applications: "135", status: "Active" },
    { title: "Full Stack Dev", category: "Full Time", openings: "08", applications: "100", status: "Inactive" },
    { title: "DevOps", category: "Internship", openings: "12", applications: "05", status: "Active" },
    { title: "Android Dev", category: "Full Time", openings: "04", applications: "45", status: "Active" },
    { title: "iOS Developer", category: "Full Time", openings: "18", applications: "96", status: "Inactive" },
    { title: "UI UX Designer", category: "Full Time", openings: "12", applications: "135", status: "Active" },
    { title: "Full Stack Dev", category: "Full Time", openings: "08", applications: "100", status: "Inactive" },
  ];

  const pieData = {
    labels: ["Shortlisted", "Hired", "Rejected"],
    datasets: [
      {
        data: [942, 25, 2452],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#2F86C1", "#E6B800", "#E64848"],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-between items-center bg-white shadow p-4 flex-wrap">
        <h1 className="text-xl font-bold text-indigo-700">Dashboard</h1>
        <div className="flex items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0">
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full w-full sm:w-auto">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for Jobs and etc."
              className="bg-gray-100 outline-none px-2 w-full sm:w-auto"
            />
          </div>
          <div className="relative">
            <MdNotifications className="text-gray-600 text-2xl" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full px-1">2</span>
          </div>
          <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </header>

      <div className="flex flex-col lg:flex-row flex-1">
        <aside className="w-full lg:w-64 bg-white shadow-md p-4">
          <div className="flex items-center gap-2 text-2xl font-bold text-indigo-700">
            <img src={image2} alt="JobJod Logo" className="w-30 h-8" />
          </div>
          <nav className="mt-6 space-y-4">
            <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <RxDashboard /> Dashboard
            </button>
            <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <PiSuitcaseSimpleLight /> Post Job
            </button>
            <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <BsPersonWorkspace /> Post Internship
            </button>
            <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <MdMessage /> Message
            </button>
            <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <MdContentPasteSearch /> Application
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {jobStats.map((stat, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow text-center">
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-xl sm:text-2xl font-bold">{stat.value}</h3>
                <p className={`${stat.color} text-sm`}>{stat.change}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Application Response</h3>
                <a href="##" className="text-indigo-600 text-sm">Download Report</a>
              </div>
              <Pie data={pieData} />
              <div className="mt-4 flex justify-around text-gray-700">
                <p>Shortlisted: <strong>942</strong></p>
                <p>Hired: <strong>25</strong></p>
                <p>Rejected: <strong>2,452</strong></p>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-4">Recent Job Posts</h3>
              <div className="overflow-x-auto ">
                <table className="w-full text-sm text-left ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2">Job Title</th>
                      <th className="px-3 py-2">Category</th>
                      <th className="px-3 py-2">Openings</th>
                      <th className="px-3 py-2">Applications</th>
                      <th className="px-3 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobPosts.map((job, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-3 py-2">{job.title}</td>
                        <td className="px-3 py-2">{job.category}</td>
                        <td className="px-3 py-2">{job.openings}</td>
                        <td className="px-3 py-2">{job.applications}</td>
                        <td className="px-3 py-2">
                          <span className={`px-2 py-1 rounded-full text-white text-xs ${
                            job.status === "Active" ? "bg-green-500" : "bg-red-500"
                          }`}>
                            {job.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <footer className="text-center text-gray-500 text-xs mt-6">
            <img src={image2} alt="JobJod Logo" className="mx-auto w-32 h-8" />
            © 2025 All Rights Reserved to JobJod | Version 0.1
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;