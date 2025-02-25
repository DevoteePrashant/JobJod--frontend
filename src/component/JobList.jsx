



import { MapPin, Clock } from "lucide-react"
import icon from "../image/icon.png"
export default function JobList({ jobs }) {
  return (
    <main className="w-full lg:w-1/2 space-y-4 mt-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">3177 Jobs</h1>
        <select className="form-select border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          <option>Filter by</option>
          <option>Most recent</option>
          <option>Highest paid</option>
          <option>Most relevant</option>
        </select>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <article key={job.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <img
                src={icon}
                alt={job.company.name}
                width={40}
                height={40}
                className="rounded-md"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-gray-600">{job.company.name}</p>
                  </div>
                  {job.isNew && (
                    <span className="px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                      New post
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </div>
                  <div className="font-medium text-gray-900">${job.salary}</div>
                </div>
                <p className="mt-2 text-gray-600">{job.description}</p>
                <div className="mt-4 text-sm text-gray-500">Posted {job.postedAt}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">&lt;</button>
        <button className="px-3 py-1 rounded bg-purple-500 text-white">1</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">2</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">3</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">4</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">5</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">&gt;</button>
      </div>
    </main>
  )
}

