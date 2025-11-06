import React, { useContext } from "react";
import { Contextt } from "../AppContext/Context";
import { NavLink } from "react-router-dom";

const TopDoctors = () => {
  const { topDoctors } = useContext(Contextt);

  // Top doctors data slice
  const data = topDoctors.slice(0, topDoctors.length - 9);

  return (
    <section className="w-full py-10 flex flex-col items-center text-white px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-3">
        Top Doctors To Book
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-center max-w-2xl text-sm sm:text-base font-medium mb-8">
        Simply browse through our extensive list of trusted doctors and choose
        the one that fits your needs best.
      </p>

      {/* Doctor Cards Container */}
      <div className="w-full flex flex-wrap justify-center gap-6 md:gap-8">
        {data.map((obj) => (
          
            <div  key={obj._id}
            
            className="
              bg-gradient-to-b from-[#1F1C2C] to-[#2C5364]
              text-white rounded-2xl overflow-hidden shadow-lg
              transition-all duration-300 hover:scale-105 hover:shadow-2xl
              w-full sm:w-[47%] lg:w-[30%] xl:w-[22%]
            "
          >
            {/* Doctor Image */}
            <NavLink to={`/allDoctors/${obj._id}`}>
            <div className="w-full h-48 sm:h-56 md:h-64">
              <img
                src={obj.image}
                alt={obj.name}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            </NavLink>
            

            {/* Content Section */}
            <div className="p-4 flex flex-col gap-2">
              {/* Availability */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <p className={`${obj.available ? "text-green-400":"text-red-600"} text-xs sm:text-sm font-medium tracking-wide`}>
                  {obj.available ? "Available":"Unvailable"}
                </p>
              </div>

              {/* Doctor Info */}
              <h4 className="text-base sm:text-lg font-bold tracking-wide">
                {obj.name}
              </h4>
              <p className="text-xs sm:text-sm font-medium tracking-wider text-gray-300">
                {obj.speciality}
              </p>
            </div>
          </div>
          
        ))}
      </div>

      {/* View All Button */}
      <button className="mt-10 px-6 py-2 rounded-full border-2 border-amber-500 text-white font-semibold hover:bg-amber-500/20 transition-all duration-300">
        View All Doctors
      </button>
    </section>
  );
};

export default TopDoctors;
