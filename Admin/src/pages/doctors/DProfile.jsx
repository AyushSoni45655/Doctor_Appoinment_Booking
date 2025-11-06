import React, { useContext, useEffect, useState } from "react";
import { AContextt } from "../../contexts/AdminContext";
const DProfile = () => {
  const { doctorDetails,dFormData,setDFormData,handleDFormDataOnChange,handleDFormDataSubmit } = useContext(AContextt);

 
  

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center py-10 px-4">
      <form
        onSubmit={handleDFormDataSubmit}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300"
      >
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-40 h-40 rounded-full border-4 border-blue-500 overflow-hidden shadow-md">
            <img
              src={doctorDetails.image}
              alt="doctor"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {doctorDetails.name}
            </h1>
            <p className="text-gray-600 mt-1">
              {doctorDetails.degree} • {doctorDetails.speciality} •{" "}
              {doctorDetails.experience}
            </p>
          </div>
        </div>

        {/* About */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            About
          </label>
          <textarea
            name="about"
            value={dFormData.about}
            onChange={handleDFormDataOnChange}
            placeholder="Write something about yourself..."
            className="w-full h-24 resize-none border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
          />
        </div>

        {/* Fees */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <label className="text-gray-700 font-semibold">Appointment Fees</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <span className="text-gray-600 font-semibold mr-2">$</span>
            <input
              type="number"
              name="fees"
              value={dFormData.fees}
              onChange={handleDFormDataOnChange}
              placeholder="Enter fees"
              className="w-24 border-none outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Clinic Address
          </label>
          <input
            type="text"
            name="line1"
            value={dFormData.line1}
            onChange={handleDFormDataOnChange}
            placeholder="Address line 1"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            name="line2"
            value={dFormData.line2}
            onChange={handleDFormDataOnChange}
            placeholder="Address line 2"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={dFormData.available}
            name="available"
            onChange={handleDFormDataOnChange}
            className="h-5 w-5 accent-blue-600"
          />
          <label className="text-blue-600 font-semibold text-md">
            Available for Appointments
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            💾 Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default DProfile;
