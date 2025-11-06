import React, { useContext } from 'react';
import { AContextt } from '../../contexts/AdminContext';
import { assets } from '../../assets/assets';
import { RxCross2 } from 'react-icons/rx';

const Dashboard = () => {
  const { dashBoard_Data, allAppointments } = useContext(AContextt);

  // ✅ sort and take latest 5
  const latestBooking = allAppointments
    .sort((a, b) => b.date - a.date)
    .slice(0, 5);

  console.log('I am latest', latestBooking);

  return (
    <div className='w-full min-h-screen px-3 py-2 flex flex-col gap-4'>
      {/* Dashboard Stats Cards */}
      <div className='flex flex-row h-fit w-fit gap-4 flex-wrap'>
        {dashBoard_Data.map((obj) => (
          <div
            key={obj.id}
            className='flex border-[2px] p-2 rounded-md border-gray-400 flex-row gap-1 items-center justify-center h-fit w-fit'
          >
            <img src={obj.icon} className='h-14 w-16' alt='' />
            <div className='flex flex-col items-center justify-center'>
              <h1 className='font-bold text-black text-lg tracking-wider'>
                {obj.len}
              </h1>
              <h5 className='font-semibold text-gray-400 text-sm tracking-wider'>
                {obj.name}
              </h5>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Bookings Section */}
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
          {latestBooking.map((obj, index) => (
            <div
              key={index}
              className='flex flex-row items-center justify-between h-fit w-full px-4 py-2 border-b border-gray-200'
            >
              {/* image and doctor name */}
              <div className='flex flex-row items-center justify-center gap-2'>
                <img
                  src={obj.docData.image}
                  className='h-10 w-10 rounded-full'
                  alt=''
                />
                <div className='flex flex-col'>
                  <h5 className='font-bold text-md text-black tracking-tighter'>
                    {obj.docData.name}
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
  );
};

export default Dashboard;
