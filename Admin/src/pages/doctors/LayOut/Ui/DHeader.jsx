
import React, { useContext, useState } from 'react'
 import { assets } from '../../../../assets/assets';
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { motion, easeIn } from "motion/react";
import { AContextt } from '../../../../contexts/AdminContext';

const DHeader = () => {
  const MotionNavLink = motion(NavLink);
  const { token,logOut } = useContext( AContextt);


  return (
    <div className='w-full h-fit'>
      <div className=' sections border-b-[1px] border-gray-500 flex items-center justify-between py-2 px-4'>
        {/* Logo */}
        <div className='flex flex-row '>
           <div className='h-12 w-28'>
          <img src={assets.dlogo} className='h-full w-full object-contain' alt="logo" />
        </div>
         <div className='p-1 border-[2px] h-8 w-16 rounded-full items-center justify-center border-gray-500 font-bold text-green-700'><h4 className='text-sm font-semibold'>Doctor</h4></div>
        </div>
       

      

        {/* Buttons */}
       <button onClick={()=>logOut()} className='bg-blue-400 px-8 py-1 rounded-lg font-bold tracking-wider text-md'>{token ? "LogOut":"Login"}</button>
      </div>
    </div>
  )
}

export default DHeader;

