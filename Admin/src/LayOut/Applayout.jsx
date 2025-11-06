import React from 'react'
import Header from './UI/Header'
import {Outlet} from 'react-router-dom'
import Sidebar from './UI/Sidebar'
const Applayout = () => {
  return (
    <div>
     <Header/>

     {/* BottomPart */}
     <div className='flex flex-row w-full min-h-screen'>
      <div className='h-full w-1/6 border-r-[1px] border-gray-500'>
      <Sidebar/>
      </div>
      {/* outlet here */}
      <Outlet/>
     </div>
    </div>
  )
}

export default Applayout
