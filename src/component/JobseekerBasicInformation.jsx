import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ProfileInformation() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    emailAddress: "nihargami@gmail.com",
    phoneNumber: "+919876543210",
    Gender: "Male",
    date: new Date("2025-02-22"),
    location: "New York,USA",
    pincode: "123456",
  });

  const [tempInfo, setTempInfo] = useState({ ...profileInfo });
  const [errors, setErrors] = useState({});

  const handleEdit = () => {
    setTempInfo({ ...profileInfo });
    setIsEditing(true);
    setErrors({}); // Reset errors when editing starts
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    if (Object.keys(errors).length === 0) {
      setProfileInfo({ ...tempInfo });
      setIsEditing(false);
      // Here you would typically send the updated data to your backend
    }
  };

  const handleChange = (field, value) => {
    if (field === "phoneNumber") {
      const phoneNumber = value.replace(/\D+/g, ''); // Remove non-digit characters
      if (phoneNumber.length < 10 || phoneNumber.length > 12) {
        setErrors((prev) => ({ ...prev, phoneNumber: "Phone number must be between 10 and 12 digits" }));
      } else {
        setErrors((prev) => ({ ...prev, phoneNumber: null }));
      }
    }

    setTempInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDateChange = (date) => {
    setTempInfo((prev) => ({
      ...prev,
      date: date,
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
                error={errors.phoneNumber}
              />
              <EditItem
                label="Gender"
                value={tempInfo.Gender}
                onChange={(value) => handleChange("Gender", value)}
              />
              <div className=" p-4 rounded-lg shadow-sm border border-gray-100">
                <label
                  htmlFor="date-of-birth"
                  className="text-gray-500 text-sm mb-1"
                >
                  Date of Birth
                </label>
                <DatePicker
                  selected={tempInfo.date}
                  onChange={(date) => handleDateChange(date)}
                  dateFormat="dd/MM/yyyy"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-2"
                />
              </div>
              <EditItem
                label="Location"
                value={tempInfo.location}
                onChange={(value) => handleChange("location", value)}
              />
              <EditItem
                label="Pincode"
                value={tempInfo.pincode}
                onChange={(value) => handleChange("pincode", value)}
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
              <InfoItem label="Gender" value={profileInfo.Gender} />
              <InfoItem label="Date Of Birth" value={formatDate(profileInfo.date)} />
              <InfoItem label="Location" value={profileInfo.location} />
              <InfoItem label="Pincode" value={profileInfo.pincode} />
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

function EditItem({ label, value, onChange, editable = true, error }) {
  return (
    <div className=" p-4 rounded-lg shadow-sm border border-gray-100">
      <label
        htmlFor={label.replace(/\s+/g, "-").toLowerCase()}
        className="text-gray-500 text-sm mb-1"
      >
        {label}
      </label>
      {editable ? (
        <div>
          <input
            id={label.replace(/\s+/g, "-").toLowerCase()}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`mt-1 block w-full rounded-lg border ${
              error ? "border-red-500" : "border-gray-300"
            } p-2`}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
