
import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../../../assets/assets";

const DSidebar = () => {
  const sidedata = [
    { id: "a1231", name: "Dashboard", image: assets.home_icon, path: "/" },
    { id: "aa13412", name: "Appointments", image: assets.appointment_icon, path: "/dappoinment" },
    { id: "aaa124211", name: "Profile", image:assets.people_icon, path: "/dprofile" },
    
  ];

  return (
    <div className="min-h-screen w-full bg-white shadow-md border-r border-gray-200 flex flex-col justify-between py-4 px-2 md:px-4 transition-all duration-300">
      {/* Sidebar Menu */}
      <div className="flex flex-col gap-2">
        {sidedata.map((obj) => (
          <NavLink
            key={obj.id}
            to={obj.path}
            className={({ isActive }) =>
              `flex items-center gap-3 w-full px-3 py-2 rounded-lg border transition-all duration-300
              ${isActive
                ? "bg-blue-100 border-blue-400 text-blue-600"
                : "border-transparent text-gray-700 hover:bg-blue-50 hover:text-blue-500"
              }`
            }
          >
            {/* Icon */}
            <div className="h-6 w-6 flex-shrink-0">
              <img
                src={obj.image}
                alt={obj.name}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Name (hidden on small screens) */}
            <h3 className="text-sm sm:text-base font-semibold hidden md:block">
              {obj.name}
            </h3>
          </NavLink>
        ))}
      </div>

      {/* Optional Footer */}
      <div className="hidden md:block text-center text-gray-400 text-sm mt-auto mb-2">
        <p>Admin Panel © 2025</p>
      </div>
    </div>
  );
};

export default DSidebar;
