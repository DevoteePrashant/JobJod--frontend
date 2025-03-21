import { useState } from "react";

export default function ProfileInformation() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    emailAddress: "nihargami@gmail.com",
    phoneNumber: "+919876543210",
    location: "New York, USA",
    yearEstablished: "22/02/2025",
    website: "www.godhanitechnology.com",
    pincode: "123456",
    interviewPerson: "John Smith,John Doe",
  });

  const [tempInfo, setTempInfo] = useState({ ...profileInfo });

  const handleEdit = () => {
    setTempInfo({ ...profileInfo });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfileInfo({ ...tempInfo });
    setIsEditing(false);
    // Here you would typically send the updated data to your backend
  };

  const handleChange = (field, value) => {
    setTempInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="  flex-1 rounded-lg max-w-screen-lg mx-auto w-full sm:w-full sticky top-20">
      <div className="flex justify-between items-start mb-6 p-1">
        <div className="mx-5">
          <h1 className="text-2xl font-semibold">Basic Information</h1>
          <p className="text-gray-500">Update profile information</p>
        </div>
        {isEditing ? (
          <div className="space-x-2">
            <button
              type="button"
              className="border border-gray-300 rounded-xl px-4 py-2 text-gray-600 hover:bg-gray-100 "
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-4 py-2"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="px-6 py-2 font-semibold text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-100 rounded-xl"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
      </div>
      <div className="p-4 md:p-6 w-full max-w-screen-xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {isEditing ? (
            // Edit mode - show form inputs
            <>
              <EditItem
                label="Email Address"
                value={tempInfo.emailAddress}
                onChange={(value) => {}}
                editable={false}
              />
              <EditItem
                label="Phone Number"
                value={tempInfo.phoneNumber}
                onChange={(value) => handleChange("phoneNumber", value)}
              />
              <EditItem
                label="Location"
                value={tempInfo.location}
                onChange={(value) => handleChange("location", value)}
              />
              <EditItem
                label="Year Established"
                value={tempInfo.yearEstablished}
                onChange={(value) => handleChange("yearEstablished", value)}
              />
              <EditItem
                label="Website"
                value={tempInfo.website}
                onChange={(value) => handleChange("website", value)}
              />
              <EditItem
                label="Pincode"
                value={tempInfo.pincode}
                onChange={(value) => handleChange("pincode", value)}
              />
              <EditItem
                label="Interview Person"
                value={tempInfo.interviewPerson}
                onChange={(value) => handleChange("interviewPerson", value)}
              />
            </>
          ) : (
            // View mode - show information
            <>
              <InfoItem
                label="Email Address"
                value={profileInfo.emailAddress}
              />
              <InfoItem label="Phone Number" value={profileInfo.phoneNumber} />
              <InfoItem label="Location" value={profileInfo.location} />
              <InfoItem
                label="Year Established"
                value={profileInfo.yearEstablished}
              />
              <InfoItem label="Website" value={profileInfo.website} />
              <InfoItem label="Pincode" value={profileInfo.pincode} />
              <InfoItem
                label="Interview Person"
                value={profileInfo.interviewPerson}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className=" p-4 rounded-lg shadow-sm border border-gray-100">
      <p className="text-gray-500 text-sm mb-1">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function EditItem({ label, value, onChange, editable = true }) {
  return (
    <div className=" p-4 rounded-lg shadow-sm border border-gray-100">
      <label
        htmlFor={label.replace(/\s+/g, "-").toLowerCase()}
        className="text-gray-500 text-sm mb-1"
      >
        {label}
      </label>
      {editable ? (
        <input
          id={label.replace(/\s+/g, "-").toLowerCase()}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
        />
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  );
}
