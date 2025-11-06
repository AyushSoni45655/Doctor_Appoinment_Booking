import React from 'react'
import DHeader from './Ui/DHeader'
import DSidebar from './Ui/DSidebar'
import { Outlet } from 'react-router-dom'

const DAppLayOut = () => {
  return (
    <div>
      <DHeader/>
      {/* side bar here */}
      <div className='w-full min-h-screen flex flex-row'>

        <div className='w-1/6 h-full border-r-[1px] border-gray-500'>
        <DSidebar/>
        </div>

        <Outlet/>
      </div>
    </div>
  )
}

export default DAppLayOut
