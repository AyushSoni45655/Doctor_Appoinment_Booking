import React, { useContext,  } from 'react'
import { assets } from '../assets/assets';
import { RiLock2Fill } from "react-icons/ri";
import { IoMailOpen } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Contextt } from '../AppContext/Context';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    forgotPassword,setFPassword,fPasswordOnChangeHandler,fPasswordSubmitHandler
    } = useContext(Contextt)
 
  const submitter = async(e)=>{
    e.preventDefault();
    const success = await fPasswordSubmitHandler();
    if(success)navigate("/signin",{replace:true})
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
            <h1 className="tracking-wide font-bold text-3xl text-[#712ABD]">Forgot Password?</h1>
            <p className="font-semibold tracking-wide text-md text-gray-600">Don’t worry, it happens!</p>
          </div>

          {/* Email */}
          <div className="flex items-center lsShadow bg-white rounded-xl px-3 py-2">
            <IoMailOpen className="h-6 w-6 text-[#822aef]" />
            <input
              type="email"
              name="email"
              value={forgotPassword.email}
              onChange={fPasswordOnChangeHandler}
              placeholder="E-mail"
              className="ml-2 w-full outline-none border-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center lsShadow bg-white rounded-xl px-3 py-2">
            <RiLock2Fill className="h-6 w-6 text-[#822aef]" />
            <input
              type='password'
              name="password"
              value={forgotPassword.password}
              onChange={fPasswordOnChangeHandler}
              placeholder="Password"
              className="ml-2 w-full outline-none border-none text-gray-700 placeholder-gray-400"
            />
           
          </div>


       

          {/* Submit Button */}
          <button  className={`mt-2 px-4 py-2 w-full rounded-2xl font-bold bg-gradient-to-r from-[#8A4BD6] to-[#712ABD]  text-lg sm:text-xl tracking-wide text-white `}>
            Sign In
          </button>

          {/* Signup Redirect */}
          <div className="flex justify-center items-center gap-2 mt-2">
           
            <NavLink to="/signin">
              <h2 className="text-[#712ABD]  font-bold text-sm sm:text-base hover:underline">
                Back To Login
              </h2>
            </NavLink>
          </div>
        </form>

        {/* Right: Info Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-8 w-full md:w-1/2">
          <h1 className="font-bold text-3xl sm:text-4xl text-[#712ABD] mb-3">Forgot Password!</h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
           Enter your registered email address and Password or we’ll update your password.
Stay secure and regain access to your account quickly.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
