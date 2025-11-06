import React from "react";
import { NavLink } from "react-router-dom";

const CardAllDoctors = ({ data }) => {
  const { _id, name, image, speciality,
available } = data;

  return (
    <div
      key={_id}
      className="
        bg-gradient-to-b from-[#1F1C2C] to-[#2C5364]
        text-white rounded-xl overflow-hidden shadow-lg
        transition-transform duration-300 hover:scale-[1.02]
        w-full sm:w-[48%] lg:w-[31%] 2xl:w-[23%]
        mx-auto
      "
    >
      {/* Image Section */}
      <NavLink to={`/allDoctors/${_id}`}>
         <div className="w-full h-48 sm:h-56 md:h-64">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
      </NavLink>
     

      {/* Content Section */}
      <div className="p-3 sm:p-4 flex flex-col gap-1">
        {/* Availability */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          <p className={`${available ? "text-green-400":"text-red-600"} text-xs sm:text-sm font-medium tracking-wide`}>
            {available ? "Available":"Unvailable"}
          </p>
        </div>

        {/* Doctor Info */}
        <h4 className="text-base sm:text-lg font-bold tracking-wide">{name}</h4>
        <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-300">
          {speciality}
        </p>
      </div>
    </div>
  );
};

export default CardAllDoctors;
