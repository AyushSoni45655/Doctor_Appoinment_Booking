import React from 'react'
import LandingPage from '../components/LandingPage'
import HomeSpecialist from '../components/HomeSpecialist'
import TopDoctors from '../components/TopDoctors'
import { assets } from '../assets/assets'
const Home = () => {
  return (
    <div className='w-full h-fit'>
      {/* landing page here */}
     <div className='sections h-fit flex flex-col gap-4'>
      <LandingPage/>
      {/* find by the specialist list of which types of doctors */}
      <HomeSpecialist/>
      {/* top doctors list here */}
      <TopDoctors/>

      {/* bannere here */}

   <div class="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10 bg-gradient-to-r from-[#1F1C2C] to-[#2C5364] rounded-xl text-white">
  
 
  <div class="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
      Book Appointment <br /> With Trusted Doctors
    </h1>
    <p class="text-gray-300 text-sm sm:text-base max-w-md">
      Get instant access to experienced and reliable doctors online.
      Schedule your appointment with just a few clicks — anytime, anywhere.
    </p>
    <button class="mt-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all duration-300">
      Create Account
    </button>
  </div>

 
  <div class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
    <img
      src={assets.appointment_img}  
      alt="Doctor"
      class="w-[80%] sm:w-[70%] md:w-[85%] lg:w-[75%] object-cover rounded-xl"
      loading="lazy"
    />
  </div>
</div>

     </div>
    </div>
  )
}

export default Home
