import { useState } from "react";
import { User } from "lucide-react";
import profile from "../image/profile.jpg";

export default function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    email: "anamoulrouf.bd@gmail.com",
    phone: "+919876543210",
    gender: "Male",
    dateOfBirth: "2003-03-07", // Use YYYY-MM-DD format for date input
    location: "New York, USA",
    pincode: "123456",
  });

  const [formData, setFormData] = useState({ ...profileData });
  const [errors, setErrors] = useState({});

  const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\d{3})[-.\s]?(\d{4,6})$/;
  const pincodeRegex = /^[0-9]{6}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!phoneRegex.test(value)) {
        setErrors({
          ...errors,
          phone: "Invalid phone number format",
        });
      } else {
        setErrors({
          ...errors,
          phone: null,
        });
      }
    } else if (name === "pincode") {
      if (!pincodeRegex.test(value)) {
        setErrors({
          ...errors,
          pincode: "Invalid pincode. Please enter a 6-digit pincode.",
        });
      } else {
        setErrors({
          ...errors,
          pincode: null,
        });
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (errors.phone || errors.pincode) {
      alert("Please correct the errors");
      return;
    }

    setProfileData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({ ...profileData });
    setIsEditing(false);
    setErrors({});
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-6 p-4 border border-gray-200 rounded-xl">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-orange-300 to-blue-500">
            {/* <User  /> */}
            <img src={profile} alt="Profile" className="rounded-full " />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Basic Information</h2>
            <p>Update profile information</p>
          </div>
        </div>
        {isEditing ? (
          <div className="flex flex-col gap-2 w-full md:w-auto md:flex-row mt-4 md:mt-0">
            <button
              className="py-2 px-4 border border-gray-200 rounded-xl hover:bg-gray-100 w-full md:w-auto"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="py-2 px-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 w-full md:w-auto"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        ) : (
          <button
            className="py-2 mt-2 px-4 border border-purple-500 text-purple-500 rounded-xl hover:bg-purple-50"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Email */}
        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-500">Email Address</div>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-500">{profileData.email}</div>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-500">Phone Number</div>
          {isEditing ? (
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.phone && (
                <div className="text-red-500 text-sm">{errors.phone}</div>
              )}
            </div>
          ) : (
            <div className="text-gray-700 font-medium">{profileData.phone}</div>
          )}
        </div>

        {/* Gender */}
        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-500">Gender</div>
          {isEditing ? (
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-700 font-medium">
              {profileData.gender}
            </div>
          )}
        </div>

        {/* Date of Birth */}
        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-500">Date of Birth</div>
          {isEditing ? (
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-700 font-medium">
              {profileData.dateOfBirth}
            </div>
          )}
        </div>

        {/* Location */}
        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-500">Location</div>
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-700 font-medium">
              {profileData.location}
            </div>
          )}
        </div>

        {/* Pincode */}
        <div className="space-y-1">
          <div className="text-sm font-medium text-gray-500">Pincode</div>
          {isEditing ? (
            <div>
              <input
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${
                  errors.pincode ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.pincode && (
                <div className="text-red-500 text-sm">{errors.pincode}</div>
              )}
            </div>
          ) : (
            <div className="text-gray-700 font-medium">
              {profileData.pincode}
            </div>
          )}
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex-col {
            flex-direction: column;
          }
          .w-full {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
