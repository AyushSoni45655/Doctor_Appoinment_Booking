
import React, { useContext, useState } from 'react'
import { assets } from "../../assets/assets"
import { Contextt } from '../../AppContext/Context'
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { motion, easeIn } from "motion/react";

const Header = () => {
  const MotionNavLink = motion(NavLink);
  const { navs,token,logOutUser } = useContext(Contextt);
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full h-fit'>
      <div className=' sections border-b-[1px] border-gray-500 flex items-center justify-between py-2 px-4'>
        {/* Logo */}
        <div className='h-12 w-28'>
          <img src={assets.dlogo} className='h-full w-full object-contain' alt="logo" />
        </div>

        {/* Navigation */}
        <nav className={`${open ? "flex flex-col absolute top-0 left-0 h-screen w-full bg-gray-600 items-center justify-center gap-4 pt-20 z-50" : "hidden"} md:flex md:flex-row md:gap-8 md:static md:overflow-hidden`}>
          {navs.map((obj) => (
            <MotionNavLink
              key={obj.id}
              to={obj.path}
              className={({ isActive }) => `border-b-2 border-b-transparent ${open ? "text-white":"text-black"} hover:border-b-green-600 transition-all uppercase font-bold text-white tracking-tight text-md`}
              onClick={()=>setOpen(false)}
            >
              {obj.name}
            </MotionNavLink>
          ))}
        </nav>

        {/* Buttons */}
        <div className='flex items-center gap-4'>
          {
            token ? (

              <div className="relative group">
  {/* Profile Image */}
  <div className="flex p-1 w-14 h-14 items-center justify-center overflow-hidden rounded-full border border-green-400 cursor-pointer">
    <img
      src="https://png.pngtree.com/png-vector/20250718/ourmid/pngtree-cartoon-hand-drawn-handsome-boy-avatar-png-image_16798195.webp"
      alt="profile"
      className="object-cover object-center rounded-full h-full w-full bg-gray-300"
    />
  </div>

  {/* Hover Menu */}
  {/* <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg border border-gray-200 hidden group-hover:block z-50">
    <ul className="flex flex-col text-gray-700 font-medium">
      <NavLink to={`/profile`}><li className="px-4 py-2 hover:bg-green-100 cursor-pointer">👤 Profile</li></NavLink>
     <NavLink to={`/appoinment`}> <li className="px-2 py-2 hover:bg-green-100 cursor-pointer">📅 My Appointment</li></NavLink>
      <li onClick={()=>logOutUser()} className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer">🚪 Logout</li>
    </ul>
  </div> */}
  <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg border border-gray-200 
     hidden group-hover:block group-focus-within:block z-50">
  <ul className="flex flex-col text-gray-700 font-medium">
    <NavLink to={`/profile`}>
      <li className="px-4 py-2 hover:bg-green-100 cursor-pointer">👤 Profile</li>
    </NavLink>
    <NavLink to={`/appoinment`}>
      <li className="px-2 py-2 hover:bg-green-100 cursor-pointer">📅 My Appointment</li>
    </NavLink>
    <li
      onClick={() => logOutUser()}
      className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
    >
      🚪 Logout
    </li>
  </ul>
</div>

  
</div>


            ):(<button className='px-4 py-2 font-bold text-sm bg-blue-400 text-white rounded-full'>Create Account</button>)
          }
          
          <button onClick={() => setOpen(!open)} className='md:hidden'>
            <RxHamburgerMenu className=" text-white h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;

