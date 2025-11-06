


import React, { useContext } from 'react'
import { Contextt } from '../AppContext/Context'
import { useNavigate } from 'react-router-dom';
const Appoinment = () => {
  const navigator = useNavigate();
  const { myAppoinment,cancelAppoinment,razorpayPayment} = useContext(Contextt);

  const  filterAppoinment = myAppoinment.filter((obj)=>!obj.cancelled);

  return (
    <div className='w-full min-h-screen mt-4 px-4 sm:px-6 md:px-10'>
      <div className='sections h-fit flex flex-col gap-4'>
        <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-green-500 tracking-wide'>
          My Appoinments
        </h1>

        <div className='flex flex-col gap-4'>
          {filterAppoinment.length > 0 ? (
            filterAppoinment.map((obj) => (
              <div
                key={obj._id}
                className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gray-800 rounded-lg p-4'
              >
                {/* Image and Content */}
                <div className='flex flex-col sm:flex-row gap-4 w-full md:w-2/3'>
                  {/* Image Box */}
                  <div className='w-full sm:w-32 h-32 bg-blue-300 overflow-hidden rounded-md flex-shrink-0'>
                    <img
                      src={obj.docData.image}
                      alt="doctor"
                      className='h-full w-full object-cover rounded-md'
                    />
                  </div>

                  {/* Content Box */}
                  <div className='flex flex-col gap-1 text-white flex-1'>
                    <h3 className='font-semibold text-md sm:text-lg'>{obj.docData.name}</h3>
                    <h4 className='font-semibold text-gray-300 text-sm sm:text-md'>
                      {obj.speciality}
                    </h4>

                    {/* Address */}
                    <h4 className='font-bold text-green-300 text-sm sm:text-md mt-2'>Address:</h4>
                    <p className='text-gray-200 text-sm sm:text-base'>{obj.docData.address.line1}</p>
                    <p className='text-gray-200 text-sm sm:text-base'>{obj.docData.address.line2}</p>

                    {/* Date & Time */}
                    <p className='text-gray-200 text-sm sm:text-base mt-2'>
                      Date & Time: <span>{`${obj.slotDate.date} ${obj.slotDate.month} ${obj.slotDate.year} | ${obj.slotTime}`}</span>
                    </p>
                  </div>
                </div>

                
             
                <div className="flex flex-row md:flex-col gap-2 mt-2 md:mt-0 items-start md:items-end w-full md:w-auto relative">
  {/* Pay Online Dropdown */}
  
    <button  disabled={!obj.cancelled && obj.payment} onClick={()=>razorpayPayment(obj._id,navigator)} className="font-semibold text-green-400 text-sm border border-green-400 rounded-md px-3 py-1 hover:bg-green-400 hover:text-gray-900 transition">
      {
         !obj.cancelled && obj.payment ? "Paid":"Pay Online"
      }
     
    </button>

    {/* Dropdown Options */}
   
  

  {/* Cancel Appointment Button */}
  {
    !obj.payment ? (  <button
    onClick={() => cancelAppoinment(obj._id)}
    className="font-semibold text-green-400 text-sm border border-green-400 rounded-md px-3 py-1 hover:bg-red-500 hover:text-white transition"
  >
    Cancel Appointment
  </button>):null
  }

</div>

              </div>
              
            ))
          ) : (
            <h2 className='text-center text-gray-200 mt-4'>No Appoinment found now</h2>
          )}
        </div>
      </div>
    </div>
  )
}

export default Appoinment
