


import React, { useContext } from "react";
import { Contextt } from "../AppContext/Context";
import CardAllDoctors from "../components/CardAllDoctors";

const AllDoctors = () => {
  const { specialist, selectCurruntSpecialist, cSpecialist, curruntDoctors } =
    useContext(Contextt);

  return (
    <div className="w-full min-h-screen bg-[#0F172A] py-8 px-3 sm:px-6 lg:px-12">
      <div className="w-full flex flex-col lg:flex-row gap-8">
        {/* -------- Speciality Sidebar -------- */}
        <div className="lg:w-1/5 w-full flex flex-col items-center lg:items-start gap-3 bg-[#1E293B] p-4 rounded-2xl shadow-md">
          <h4 className="text-white font-semibold text-center lg:text-left text-base sm:text-lg mb-2">
            Browse Doctors by Speciality
          </h4>

          <div className="flex lg:flex-col flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            {specialist.map((val, idx) => (
              <button
                key={idx}
                onClick={() => selectCurruntSpecialist(val.speciality)}
                className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                  cSpecialist === val.speciality
                    ? "bg-gradient-to-r from-[#8A4BD6] to-[#712ABD] text-white shadow-lg"
                    : "bg-[#334155] text-gray-300 hover:bg-[#475569]"
                }`}
              >
                {val.speciality}
              </button>
            ))}
          </div>
        </div>

        {/* -------- Doctors Cards Section -------- */}
        <div className="flex-1">
          <h2 className="text-white font-bold text-xl sm:text-2xl mb-6">
            {cSpecialist === "All"
              ? "All Available Doctors"
              : `${cSpecialist} Specialists`}
          </h2>

          <div className="flex flex-wrap justify-center sm:justify-start gap-5">
            {curruntDoctors.length > 0 ? (
              curruntDoctors.map((obj) => (
                <CardAllDoctors key={obj._id} data={obj} />
              ))
            ) : (
              <p className="text-gray-300 font-semibold text-lg sm:text-xl">
                No doctors found for this speciality.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
