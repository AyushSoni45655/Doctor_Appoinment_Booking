
import React, { useContext } from 'react';
import { Contextt } from '../AppContext/Context';

const Profile = () => {

  const {user} = useContext(Contextt);
  return (
    <div className="w-full min-h-screen mt-14 flex items-center justify-center  px-4 sm:px-8 py-10">
      <div className="w-full max-w-3xl flex flex-col items-center text-center bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-green-400/30 shadow-xl">
        
        {/* Profile Image */}
        <div className="h-36 w-36 sm:h-44 sm:w-44 border-2 border-green-400 rounded-full p-2 overflow-hidden shadow-md">
          <img
            src={user.image}
            alt="user_Image"
            className="h-full w-full rounded-full object-cover object-center"
          />
        </div>

        {/* Name */}
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white mt-4">
          {`Mr. ${user.name}`}
        </h1>

        {/* Divider */}
        <div className="w-full sm:w-3/4 my-4 h-[1px] bg-gray-600"></div>

        {/* Contact Info */}
        <h2 className="font-semibold text-green-400 text-lg sm:text-xl mb-2">
          —— Contact Information ——
        </h2>

        <div className="w-full sm:w-3/4 flex flex-col gap-3 mt-2 text-left">
          <div className="flex flex-col sm:flex-row justify-between">
            <h2 className="font-semibold text-white text-base sm:text-lg">Email:</h2>
            <p className="text-gray-400 text-base sm:text-lg break-words">{user.email}</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <h2 className="font-semibold text-white text-base sm:text-lg">Phone:</h2>
            <p className="text-gray-400 text-base sm:text-lg">+91 8422974818</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <h2 className="font-semibold text-white text-base sm:text-lg">Address:</h2>
            <p className="text-gray-400 text-base sm:text-lg">Delhi - Noida, Sec-64, India</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full sm:w-3/4 my-6 h-[1px] bg-gray-600"></div>

        {/* Basic Info */}
        <h2 className="font-semibold text-amber-400 text-lg sm:text-xl mb-2">
          —— Basic Information ——
        </h2>

        <div className="w-full sm:w-3/4 flex flex-col gap-3 mt-2 text-left">
          <div className="flex flex-col sm:flex-row justify-between">
            <h2 className="font-semibold text-white text-base sm:text-lg">Gender:</h2>
            <p className="text-gray-400 text-base sm:text-lg">Male</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <h2 className="font-semibold text-white text-base sm:text-lg">Marital Status:</h2>
            <p className="text-gray-400 text-base sm:text-lg">Unmarried</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <h2 className="font-semibold text-white text-base sm:text-lg">Birthday:</h2>
            <p className="text-gray-400 text-base sm:text-lg">23 / Aug / 2001</p>
          </div>
        </div>

        {/* Edit Button */}
        <button className="mt-8 px-8 py-2 sm:px-10 sm:py-3 text-white text-lg sm:text-xl font-semibold rounded-xl border border-green-400 hover:bg-green-500/20 transition-all duration-300">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Profile;
