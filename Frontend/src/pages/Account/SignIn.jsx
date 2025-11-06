import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { RiLock2Fill } from "react-icons/ri";
import { IoMailOpen } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { Contextt } from '../../AppContext/Context';
const SignIn = () => {
  const navigate = useNavigate();
  const {passwordCriteria,criteria,isStrongPassword,
    setSignIn,signIn,signInOnChangeHandler,signInSubmitHandler,checkedBox,lockState,setLockState,checked,setChecked,lockOption} = useContext(Contextt)
 
  const submitter = async(e)=>{
    e.preventDefault();
    const success = await signInSubmitHandler();
    if(success)navigate("/",{replace:true})
  }

  const criteriia = Object.keys(criteria);



  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${assets.logSign})` }}
    >
      <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col-reverse md:flex-row items-center justify-center gap-8 py-10 m-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg md:shadow-xl">
        
        {/* Left: Form Section */}
        <form onSubmit={submitter} className="flex flex-col gap-2 w-full md:w-1/2 px-6 sm:px-10">
          <div className="flex flex-col justify-center items-center mb-4">
            <h1 className="tracking-wide font-bold text-3xl text-[#712ABD]">Hello!</h1>
            <p className="font-semibold tracking-wide text-md text-gray-600">Sign In To Your Account</p>
          </div>

          {/* Email */}
          <div className="flex items-center lsShadow bg-white rounded-xl px-3 py-2">
            <IoMailOpen className="h-6 w-6 text-[#822aef]" />
            <input
              type="email"
              name="email"
              value={signIn.email}
              onChange={signInOnChangeHandler}
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
              value={signIn.password}
              onChange={signInOnChangeHandler}
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

          {/* here is password criteria design */}

          {/* Password Criteria */}
          <div className="mt-2 mb-2">
            {criteriia.map((key, idx) => (
              <ul key={idx} className="text-sm mb-1 flex items-center gap-2">
                {criteria[key] ? (
                  <span className="text-green-600 font-bold">✔</span>
                ) : (
                  <span className="text-red-600 font-bold">✖</span>
                )}
                <li className="leading-[0.1px]">{key}</li>
              </ul>
            ))}
          </div>


          {/* Remember Me + Forgot Password */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" checked={checked} onChange={()=>checkedBox()} className="h-[14px] w-[14px]" />
              <span className="text-sm">Remember Me</span>
            </label>

            <NavLink
              to="/fPassword"
              className="font-semibold text-[#712ABD] hover:underline text-sm"
            >
              Forgot Password?
            </NavLink>
          </div>

          {/* Submit Button */}
          <button disabled={!checked} className={`mt-2 px-4 py-2 w-full rounded-2xl font-bold text-lg sm:text-xl tracking-wide text-white bg-gradient-to-r ${checked 
      ? 'bg-gradient-to-r from-[#8A4BD6] to-[#712ABD] hover:opacity-90 transition-all'
      : 'bg-gradient-to-r from-[#8A4BD6] to-[#712ABD] opacity-50 cursor-not-allowed'} hover:opacity-90 transition-all`}>
            Sign In
          </button>

          {/* Signup Redirect */}
          <div className="flex justify-center items-center gap-2 mt-2">
            <h4 className="text-gray-600 text-sm sm:text-base">Don't have an account?</h4>
            <NavLink to="/signup">
              <h2 className="text-[#712ABD] font-bold text-sm sm:text-base hover:underline">
                Create
              </h2>
            </NavLink>
          </div>
        </form>

        {/* Right: Info Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 md:px-8 w-full md:w-1/2">
          <h1 className="font-bold text-3xl sm:text-4xl text-[#712ABD] mb-3">Welcome Back!</h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
            Log in to continue sharing your photos, stories, and moments with the people who matter most. 
            Stay connected, explore inspiration, and express yourself freely every day. 
            Let’s make every moment count together.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
