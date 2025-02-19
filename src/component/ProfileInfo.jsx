

export function ProfileInfo({ profile, onEdit }) {
  const fields = [
    { label: "Email Address", value: profile.email },
    { label: "Gender", value: profile.gender },
    { label: "Phone Number", value: profile.phone },
    { label: "Location", value: profile.location },
    { label: "Website", value: profile.website },
  ]

  return (
    <div className="flex-1">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Basic Information</h1>
          <p className="text-gray-500">Update profile information</p>
        </div>
        <button
          variant="outline"
          className="px-6 text-purple-600 bg-purple-50 hover:bg-purple-100 border-0"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>
      {/* w-[1053px]  mdf:ertiojre  */}
      <div className="bg-white rounded-2xl shadow-sm border p-4 md:p-6 w-full max-w-screen-xl mx-auto overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
    {fields.map((field) => (
      <div key={field.label} className="break-words">
        <label className="block text-sm text-gray-500 mb-1">{field.label}</label>
        <p className="font-medium text-base md:text-lg">{field.value}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

