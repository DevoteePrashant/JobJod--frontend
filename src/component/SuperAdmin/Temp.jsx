import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  AlignJustify,
} from "lucide-react";

export default function JobListings() {
  return (
    <div className="min-h-20 mx-auto p-3 sm:p-4 bg-white rounded-lg shadow-sm">
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

      {/* Job Listings */}
      <div className="space-y-4">
        {/* Job 1 */}
        <JobCard
          logo={
            <div className="bg-blue-600 p-2 rounded-lg">
              <div className="w-6 h-6 bg-white/30 rounded-full"></div>
            </div>
          }
          company="Linear company"
          title="Software Engineer"
          isNew={true}
          location="Brussels"
          type="Full time"
          salary="50-55k"
          timeAgo="29 min ago"
          status="active"
        />

        {/* Job 2 */}
        <JobCard
          logo={
            <div className="bg-white border border-gray-200 p-2 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">N</span>
            </div>
          }
          company="Notion"
          title="Junior UI Designer"
          location="Madrid"
          type="Full time"
          salary="30-32k"
          timeAgo="1 day ago"
          status="active"
        />

        {/* Job 3 */}
        <JobCard
          logo={
            <div className="bg-purple-600 p-2 rounded-lg">
              <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full"></div>
            </div>
          }
          company="Spline studio"
          title="Technical Support Engineer"
          location="United States"
          type="Full time"
          salary="50-52k"
          timeAgo="1 day ago"
          status="inactive"
        />

        {/* Job 4 */}
        <JobCard
          logo={
            <div className="bg-red-600 p-2 rounded-lg">
              <div className="w-6 h-6 bg-white/30 rounded-sm rotate-45"></div>
            </div>
          }
          company="Raycast corp"
          title="Product Designer"
          location="London"
          type="Full time"
          salary="40-42k"
          timeAgo="2 day ago"
          status="inactive"
        />

        {/* Job 5 */}
        <JobCard
          logo={
            <div className="bg-blue-500 p-2 rounded-lg">
              <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          }
          company="Loom"
          title="Copywriter (Growth)"
          location="London"
          type="Full time"
          salary="38-40k"
          timeAgo="3 day ago"
          status="active"
        />

        {/* Job 6 */}
        <JobCard
          logo={
            <div className="bg-emerald-500 p-2 rounded-lg">
              <div className="w-6 h-6 bg-white/30 rounded-full"></div>
            </div>
          }
          company="Trainline group"
          title="Senior UX/UI Designer"
          location="Paris"
          type="Full time"
          salary="38-40k"
          timeAgo="4 day ago"
          status="inactive"
        />
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-6 sm:mt-8 gap-1 sm:gap-2">
        <button className="h-7 w-7 sm:h-8 sm:w-8 rounded-md flex items-center justify-center hover:bg-gray-100">
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        <button className="h-7 w-7 sm:h-8 sm:w-8 rounded-md flex items-center justify-center bg-primary/10 text-primary bg-purple-400">
          1
        </button>
        <button className="h-7 w-7 sm:h-8 sm:w-8 rounded-md flex items-center justify-center bg-gray-100 hover:bg-gray-200">
          2
        </button>
        <button className="h-7 w-7 sm:h-8 sm:w-8 rounded-md flex items-center justify-center bg-gray-100 hover:bg-gray-200">
          3
        </button>
        <button className="h-7 w-7 sm:h-8 sm:w-8 rounded-md flex items-center justify-center bg-gray-100 hover:bg-gray-200 xs:flex">
          4
        </button>
        <button className="h-7 w-7 sm:h-8 sm:w-8 rounded-md flex items-center justify-center bg-gray-100 hover:bg-gray-200  sm:flex">
          5
        </button>
        <button className="h-7 w-7 sm:h-8 sm:w-8 rounded-md flex items-center justify-center hover:bg-gray-100">
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  );
}

function JobCard({
  logo,
  company,
  title,
  isNew = false,
  location,
  type,
  salary,
  timeAgo,
  status,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 w-12 h-12">{logo}</div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
          <div>
            <p className="text-sm text-gray-600">{company}</p>
            <h3 className="font-semibold text-gray-900 flex items-center gap-2 flex-wrap">
              {title}
              {isNew && (
                <span className="text-xs text-purple-600 font-normal">
                  New post
                </span>
              )}
            </h3>
          </div>
          <div className="sm:ml-auto">
            <span
              className={`px-2 sm:px-3 py-1 text-xs rounded-full ${
                status === "active"
                  ? "bg-green-500 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {status === "active" ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>{type}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>{salary}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>{timeAgo}</span>
          </div>
        </div>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 line-clamp-2 sm:line-clamp-none">
          Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.
          Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum
          tempor Lorem incididunt.
        </p>
      </div>
    </div>
  );
}
