
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets';
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { motion, easeIn } from "motion/react";
import { AContextt } from '../../contexts/AdminContext';

const Header = () => {
  const MotionNavLink = motion(NavLink);
  const { token,logOut } = useContext( AContextt);


  return (
    <div className='w-full h-fit'>
      <div className=' sections border-b-[1px] border-gray-500 flex items-center justify-between py-2 px-4'>
        {/* Logo */}
        <div className='h-12 w-28'>
          <img src={assets.dlogo} className='h-full w-full object-contain' alt="logo" />
        </div>

      

        {/* Buttons */}
       <button onClick={()=>logOut()} className='bg-blue-400 px-8 py-1 rounded-lg font-bold tracking-wider text-md'>{token ? "LogOut":"Login"}</button>
      </div>
    </div>
  )
}

export default Header;

