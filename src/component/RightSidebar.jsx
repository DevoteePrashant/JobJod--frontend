export default function RightSidebar() {
  return (
    <aside className="w-full lg:w-1/4 space-y-6 mt-12">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-lg mb-4">Email me for jobs</h3>
        <p className="text-sm text-gray-700">Get the latest job news and articles sent to your inbox weekly.</p>
        <input
          type="email"
          placeholder="name@email.com"
          className="w-full mt-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="w-full mt-4  rounded-3xl py-2 bg-purple-500 hover:bg-purple-600 transition text-white ">
          Subscribe
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-4">Get noticed faster</h3>
        <button className="w-full py-2 rounded-3xl   bg-purple-500 hover:bg-purple-600 transition text-white ">
          Upload your resume
        </button>
      </div>
    </aside>
  )
}

