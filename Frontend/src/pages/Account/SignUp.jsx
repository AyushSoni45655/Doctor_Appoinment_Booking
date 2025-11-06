import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { RiLock2Fill } from "react-icons/ri";
import { IoMailOpen } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { Contextt } from '../../AppContext/Context';
const SignUp = () => {
  const navigate = useNavigate();
  const {
    imagePreview,
    setSignUp,signUp,signUpOnChangeHandler,signUpSubmitHandler,lockState,setLockState,lockOption} = useContext(Contextt)
 
  const submitter = async(e)=>{
    e.preventDefault();
    const success = await signUpSubmitHandler();
    if(success)navigate("/",{replace:true})
  }

  



  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${assets.logSign})` }}
    >
      <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-10 m-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg md:shadow-xl">
        
        {/* Left: Form Section */}
        <form onSubmit={submitter} className="flex flex-col gap-2 w-full md:w-1/2 px-6 sm:px-10">
          <div className="flex flex-col justify-center items-center mb-4">
            <h1 className="tracking-wide font-bold text-3xl text-[#712ABD]">Welcome!</h1>
            <p className="font-semibold tracking-wide text-md text-gray-600">Sign Up To Your Account</p>
          </div>

          {/* image here */}




          <div className="h-fit w-full my-2 flex items-center justify-center">
  <div className="h-24 w-24 rounded-full border-[2px] border-green-500 overflow-hidden">
    <label htmlFor="image" className="h-full w-full rounded-full cursor-pointer block">
      <img
        src={imagePreview}
        className="h-full w-full rounded-full object-cover object-center"
        alt="User"
      />
    </label>
    <input
      id="image"
      type="file"
      name="image"
      accept="image/*"
      onChange={signUpOnChangeHandler}
      className="hidden"
    />
  </div>
</div>
      
         
          

          

          {/* Nam field here */}
          <div className="flex items-center lsShadow bg-white rounded-xl px-3 py-2">
           
            <FaRegUserCircle className="h-6 w-6 text-[#822aef]" />
            <input
              type="text"
              name="name"
              value={signUp.name}
              onChange={signUpOnChangeHandler}
              placeholder="Enter Name"
              className="ml-2 w-full outline-none border-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex items-center lsShadow bg-white rounded-xl px-3 py-2">
            <IoMailOpen className="h-6 w-6 text-[#822aef]" />
            <input
              type="email"
              name="email"
              value={signUp.email}
              onChange={signUpOnChangeHandler}
              placeholder="E-mail"
              className="ml-2 w-full outline-none border-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center lsShadow bg-white rounded-xl px-3 py-2">
            <RiLock2Fill className="h-6 w-6 text-[#822aef]" />
            <input
              type={lockState}
              name="password"
              value={signUp.password}
              onChange={signUpOnChangeHandler}
              placeholder="Password"
              className="ml-2 w-full outline-none border-none text-gray-700 placeholder-gray-400"
            />
            {lockState === 'password' ? (
              <GoEyeClosed
                onClick={() => setLockState('text')}
                className="h-6 w-6 text-[#822aef] cursor-pointer"
              />
            ) : (
              <GoEye
                onClick={() => setLockState('password')}
                className="h-6 w-6 text-[#822aef] cursor-pointer"
              />
            )}
          </div>

        
          {/*  confirm Password */}
          <div className="flex items-center lsShadow bg-white rounded-xl px-3 py-2">
            <RiLock2Fill className="h-6 w-6 text-[#822aef]" />
            <input
              type={lockState}
              name="cPassword"
              value={signUp.cPassword}
              onChange={signUpOnChangeHandler}
              placeholder="Confirm Password"
              className="ml-2 w-full outline-none border-none text-gray-700 placeholder-gray-400"
            />
           
          </div>

        

         

          {/* Submit Button */}
          <button  className={`mt-2 px-4 py-2 w-full rounded-2xl font-bold text-lg sm:text-xl tracking-wide
             text-white bg-gradient-to-r from-[#8A4BD6] to-[#712ABD] `}>
            Sign Up
          </button>

          {/* Signup Redirect */}
          <div className="flex justify-center items-center gap-2 mt-2">
            <h4 className="text-gray-600 text-sm sm:text-base">Already have an account?</h4>
            <NavLink to="/signin">
              <h2 className="text-[#712ABD] font-bold text-sm sm:text-base hover:underline">
                login
              </h2>
            </NavLink>
          </div>
        </form>

        {/* Right: Info Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-8 w-full md:w-1/2">
          <h1 className="font-bold text-3xl sm:text-4xl text-[#712ABD] mb-3">Create Account</h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
           Stay connected with healthcare professionals, explore available specialists, and manage your wellness effortlessly.
Take control of your health and make every appointment count!
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
