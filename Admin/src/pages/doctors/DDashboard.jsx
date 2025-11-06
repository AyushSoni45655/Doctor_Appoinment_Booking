import React, { useContext } from 'react'
import { AContextt } from '../../contexts/AdminContext'
import { assets } from '../../assets/assets';
import { RxCross2 } from 'react-icons/rx';
const DDashboard = () => {
  const {doctor_DashBoard,singleDocAppoinment} = useContext(AContextt);
  return (
    <div className='flex flex-col gap-8 min-h-screen w-full p-4'>

      {/* doctor details here */}
      <div className='flex h-fit bg-gray-200 rounded-md w-fit px-4 py-2 flex-row gap-2'>
        {
          doctor_DashBoard.map((obj)=>(<div className='h-fit w-fit border-[2px] border-gray-300 rounded-md p-2 flex gap-1 items-center justify-between'>
            <img src={obj.icon} className='h-10 w-12 object-center rounded-md object-cover' alt="" />
            <div className='flex flex-col items-center justify-center '>
              <h4 className='font-bold text-lg'>{`${ obj.data}`}</h4>
              <p className='font-semibold text-sm tracking-wider'>{obj.name}</p>
            </div>
          </div>))
        }
      </div>

       {/* all appoinments here */}
        
            <div className='max-w-3xl w-full h-fit flex flex-col gap-2'>
              <div className='flex flex-row items-center justify-center h-fit w-fit gap-2'>
                <img src={assets.list_icon} className='h-6 w-8' alt='' />
                <h4 className='font-bold text-md text-md tracking-wide'>
                  Latest Booking
                </h4>
              </div>
              <div className='text-gray-500 h-[1px] bg-gray-400 w-full'></div>
      
              {/* Latest 5 bookings */}
              <div className='flex flex-col gap-1 h-fit w-full'>
                {singleDocAppoinment.map((obj, index) => (
                  <div
                    key={index}
                    className='flex flex-row items-center justify-between h-fit w-full px-4 py-2 border-b border-gray-200'
                  >
                    {/* image and doctor name */}
                    <div className='flex flex-row items-center justify-center gap-2'>
                      <img
                        src={obj.userData.image}
                        className='h-10 w-10 rounded-full'
                        alt=''
                      />
                      <div className='flex flex-col'>
                        <h5 className='font-bold text-md text-black tracking-tighter'>
                          {obj.userData.name}
                        </h5>
                        <p className='font-semibold text-gray-600 text-sm'>
                          Booking On {obj.slotDate.date} {obj.slotDate.month}{' '}
                          {obj.slotDate.year}
                        </p>
                      </div>
                    </div>
      
                    {/* Status */}
                    <div className='h-fit w-fit font-semibold tracking-tighter'>
                      {obj.isComplete ? (
                        <h2 className='text-green-600'>Completed</h2>
                      ) : obj.cancelled ? (
                        <h2 className='text-red-500'>Cancelled</h2>
                      ) : (
                        <RxCross2 className='text-gray-500 text-lg' />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}

export default DDashboard
