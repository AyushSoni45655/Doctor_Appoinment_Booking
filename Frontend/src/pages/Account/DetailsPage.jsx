


import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Contextt } from '../../AppContext/Context';
import { getNextDays } from '../../helpers/GetNextDay';

const DetailsPage = () => {
  const { doctorss,addAppoinment } = useContext(Contextt);
  const { id } = useParams();
  const doctorFilter = doctorss.find((obj) => obj._id === id);  
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const slot = getNextDays();

  const times = [
    '04:00 PM',
    '05:00 PM',
    '05:30 PM',
    '06:00 PM',
    '07:00 PM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
  ];

  const [selectedDay, setSelectedDay] = useState(slot[0]);
  const [selectedTime, setSelectedTime] = useState(times[0]);
  console.log(selectedTime,selectedDay,doctorFilter);
  
  if (!doctorFilter) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center text-white text-lg font-semibold">
        Loading doctor details...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen mt-6 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col gap-6">
        {/* Image and Details Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Image Box */}
          <div className="w-full md:w-1/3 lg:w-1/4 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <img
              src={doctorFilter.image}
              alt="doctor"
              className="w-full h-72 sm:h-80 md:h-72 lg:h-80 object-cover object-center"
            />
          </div>

          {/* Content Box */}
          <div className="w-full flex-1 bg-[#111827] border border-gray-700 rounded-xl p-4 md:p-6 shadow-lg">
            <h1 className="font-bold text-2xl md:text-3xl text-white">
              {doctorFilter.name}
            </h1>

            <div className="flex flex-wrap gap-2 text-gray-300 font-medium mt-2">
              <h5>{doctorFilter.degree} -</h5>
              <h5>{doctorFilter.speciality}</h5>
              <h5>({doctorFilter.experience})</h5>
            </div>

            <h3 className="text-blue-400 font-bold text-xl mt-4">About</h3>
            <p className="text-gray-300 text-sm md:text-base mt-1 leading-relaxed">
              {doctorFilter.about}
            </p>

            <div className="flex flex-row gap-3 mt-4 items-center">
              <h4 className="font-semibold text-md text-white">Appointment Fee:</h4>
              <h5 className="font-bold text-green-400 text-lg">
                ${doctorFilter.fees}
              </h5>
            </div>
          </div>
        </div>

        {/* Booking Slots Section */}
        <div className="mt-8">
          <h2 className="text-white font-bold text-xl sm:text-2xl mb-4">
            Booking Slots
          </h2>

          {/* Day Slots */}
          <div className="flex flex-wrap gap-3">
            {slot.map((day, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 cursor-pointer border border-gray-500 rounded-xl transition-all ${
                  day === selectedDay.dayName
                    ? 'bg-blue-500 text-white scale-105'
                    : 'bg-[#1f2937] text-gray-200 hover:bg-blue-400 hover:text-white'
                }`}
              >
                <h4 className="font-bold text-lg">{day.dayName}</h4>
                <h5 className="font-semibold text-green-400">
                 {day.date}
                </h5>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="flex flex-wrap gap-3 mt-6">
            {times.map((time, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTime(time)}
                className={`border px-3 py-2 rounded-full cursor-pointer text-sm sm:text-base font-semibold transition-all ${
                  time === selectedTime
                    ? 'bg-blue-500 text-white border-blue-500 scale-105'
                    : 'border-gray-400 text-green-400 hover:bg-blue-400 hover:text-white'
                }`}
              >
                {time}
              </div>
            ))}
          </div>

          {/* button for submit */}
          <div className='w-full mt-6 items-center justify-center flex flex-row h-fit'>
            <button onClick={()=>addAppoinment(doctorFilter._id,selectedDay,selectedTime,doctorFilter,doctorFilter.fees)} className='px-4 py-2 bg-blue-300 font-bold text-md text-white rounded-full'> Book An Appoinment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
