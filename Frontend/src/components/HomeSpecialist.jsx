


import React, { useContext } from "react";
import { Contextt } from "../AppContext/Context";

const HomeSpecialist = () => {
  const { specialist } = useContext(Contextt);
  const data = specialist.slice(1);

  return (
    <section className="w-full py-10 flex flex-col items-center text-white px-4 sm:px-8 md:px-16">
      {/* Heading */}
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-2">
        Find By Speciality
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-center max-w-2xl text-sm sm:text-base font-medium mb-6">
        Simply browse through our extensive list of trusted doctors and schedule
        your appointment hassle-free.
      </p>

      {/* Specialist Cards */}
      <div className="w-full flex flex-wrap justify-center gap-6 md:gap-10">
        {data.map((obj) => (
          <div
            key={obj._id}
            className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            {/* image */}
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gray-200 overflow-hidden shadow-md">
              <img
                src={obj.image}
                alt={obj.speciality}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* title */}
            <h6 className="font-semibold text-sm sm:text-base text-gray-200 tracking-wide">
              {obj.speciality}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSpecialist;
