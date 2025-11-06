

import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRightLong } from "react-icons/fa6";


const LandingPage = () => {
  
  return (
    <section
      className="w-full bg-cover bg-center h-[70vh] sm:h-[80vh] md:h-[82vh] my-4 rounded-xl flex flex-col justify-center items-center md:items-end px-6 sm:px-10 md:px-20"
      style={{ backgroundImage: `url(${assets.landingpage})` }}
    >
    </section>
  );
};

export default LandingPage;
