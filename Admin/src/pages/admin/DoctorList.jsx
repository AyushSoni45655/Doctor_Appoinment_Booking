import React from 'react'
import { useContext } from 'react'
import { AContextt } from '../../contexts/AdminContext'
import DoctorCard from '../../components/DoctorCard';

const DoctorList = () => {
  const {allDoctor} = useContext(AContextt);

  return (
    <div className='flex flex-row gap-4 flex-wrap p-4'>
      {
        allDoctor.map((obj)=>(<DoctorCard key={obj._id} data={obj}/>))
      }
     
    </div>
  )
}

export default DoctorList
