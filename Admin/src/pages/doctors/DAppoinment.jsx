



import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
// import { X, CheckCircle } from "lucide-react"; // icons (cancel & completed)
import { assets } from "../../assets/assets";
import { useContext } from "react";
import {AContextt} from "../../contexts/AdminContext"

const DAppoinment = () => {
  // Dummy appointment data'
  const {singleDocAppoinment,completeAppoinment,cancelAppoinment} = useContext(AContextt)
 
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800"> All Appointments</h2>

      <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Sr No.
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Patient 
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Payment
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
               Date & Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Fees
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {singleDocAppoinment.map((item,index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                  <td className="px-6 py-4 text-gray-800 font-medium">
                {index+1}
                </td>
                <td className="px-6 py-4 text-gray-800 flex gap-2 font-medium">
                  <img src={item.userData.image} className="h-8 w-8 rounded-full object-center object-contain" alt="" />
                 
                   <span className="text-gray-800 font-medium">
                    {`${item.userData.name}`}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">
                 
                  <div className="p-1 px-2 border-1 font-bold items-center justify-center h-fit w-fit border-gray-500 rounded-full">
                    <h4 className="text-sm font-semibold tracking-tight">CASH</h4>
                  </div>
                </td>
                <td className="px-6 py-4 flex items-center gap-3">
                  {`${item.slotDate.year} ${item.slotDate.month} ${item.slotDate.date} || ${item.slotTime}`}
                </td>
                <td className="px-6 py-4 text-gray-700">{item.amount}</td>
                
                 {
                  item.cancelled ? <p className="text-red-600 font-bold">Cancelled</p>:item.isComplete? <p className="text-green-600 font-bold">Completed</p>:<td className="px-6 py-4 text-center flex gap-2"><RxCross2 onClick={()=>cancelAppoinment(item._id)} className="h-8 p-2 rounded-full bg-red-400 text-black w-8"/>
                  <IoCheckmark onClick={()=>completeAppoinment(item._id)} className="h-8 p-2 rounded-full bg-green-400 text-black w-8"/>
                 

                </td>
                 }
                  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DAppoinment
