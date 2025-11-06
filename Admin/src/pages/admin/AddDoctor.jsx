
import React, { useContext, useState } from "react";
import { AContextt } from "../../contexts/AdminContext";

const AddDoctor = () => {
  const { imagePreview,setImagePreview,addDoctor,setAddDoctor,addDoctorOnChange,addDoctorSubmitHandler,experience } = useContext(AContextt);
 
  

  return (
    <div className="w-full flex flex-col items-center justify-start px-4 py-8 bg-gray-50">
      {/* ===== Form Container ===== */}
      <form
        action=""
        onSubmit={addDoctorSubmitHandler}
        className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 flex flex-col gap-6"
      >
        {/* ===== Image Upload ===== */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="image"
            className="relative h-28 w-28 rounded-full border-2 border-green-500 overflow-hidden cursor-pointer"
          >
            <img
              src={imagePreview}
              alt="Doctor"
              className="h-full w-full object-cover object-center"
            />
            <input
              id='image'
              type="file"
              name='image'
              accept="image/*"
              onChange={addDoctorOnChange}
              className="hidden"
            />
          </label>
          <p className="text-gray-600 text-sm mt-2">Upload Profile Photo</p>
        </div>

        {/* ===== Form Fields ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="font-semibold text-gray-800 text-sm"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={addDoctor.name}
              onChange={addDoctorOnChange}
              placeholder="Enter your name"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Speciality */}
          <div>
            <label
              htmlFor="speciality"
              className="font-semibold text-gray-800 text-sm"
            >
              Speciality
            </label>
            <input
              type="text"
              name="speciality"
                value={addDoctor.speciality}
              onChange={addDoctorOnChange}
              placeholder="Enter speciality"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="font-semibold text-gray-800 text-sm"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
                value={addDoctor.email}
              onChange={addDoctorOnChange}
              placeholder="Enter your email"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Degree */}
          <div>
            <label
              htmlFor="degree"
              className="font-semibold text-gray-800 text-sm"
            >
              Degree
            </label>
            <input
              type="text"
              name="degree"
              value={addDoctor.degree}
              onChange={addDoctorOnChange}
              placeholder="Enter degree"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="font-semibold text-gray-800 text-sm"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
                value={addDoctor.password}
              onChange={addDoctorOnChange}
              placeholder="Enter password"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="line1"
              className="font-semibold text-gray-800 text-sm"
            >
              Address
            </label>
            <input
              type="text"
              name="line1"
                value={addDoctor.line1}
              onChange={addDoctorOnChange}
              placeholder="Address Line 1"
              className="mt-1 mb-2 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="line2"
                value={addDoctor.line2}
              onChange={addDoctorOnChange}
              placeholder="Address Line 2"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Experience */}
          <div>
            <label
              htmlFor="experience"
              className="font-semibold text-gray-800 text-sm"
            >
              Experience
            </label>
            <select
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
              name="experience"
                value={addDoctor.experience}
              onChange={addDoctorOnChange}
            >
              {experience.map((val, idx) => (
                <option key={idx} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>

          {/* Fees */}
          <div>
            <label
              htmlFor="fees"
              className="font-semibold text-gray-800 text-sm"
            >
              Fees
            </label>
            <input
              type="text"
              name="fees"
                value={addDoctor.fees}
              onChange={addDoctorOnChange}
              placeholder="Enter consultation fees"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* About */}
          <div className="md:col-span-2">
            <label
              htmlFor="about"
              className="font-semibold text-gray-800 text-sm"
            >
              About
            </label>
            <textarea
              name="about"
              rows="4"
                value={addDoctor.about}
              onChange={addDoctorOnChange}
              placeholder="Write about the doctor..."
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-400 resize-none"
            ></textarea>
          </div>
        </div>

        {/* ===== Submit Button ===== */}
        <div className="flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2 rounded-lg transition duration-200 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
