import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
// import { X, CheckCircle } from "lucide-react"; // icons (cancel & completed)
import { assets } from "../../../../Frontend/src/assets/assets";
import { useContext } from "react";
import { AContextt } from "../../contexts/AdminContext";

const Appoinment = () => {
  // Dummy appointment data'
  const {allAppointments} = useContext(AContextt)
  const appointments = [
    {
      id: 1,
      patientName: "Ayush Soni",
      dateTime: "2025-11-01 | 10:30 AM",
      doctorName: "Dr. Pradeep Kumar",
      doctorImage: assets.dlogo,
      fees: "₹500",
      status: "Completed",
    },
    {
      id: 2,
      patientName: "Riya Sharma",
      dateTime: "2025-11-02 | 04:00 PM",
      doctorName: "Dr. Mahadev Anuragi",
      doctorImage: assets.dlogo,
      fees: "₹600",
      status: "Cancelled",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Appointments</h2>

      <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 border-b">
            <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Sr No.
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Doctor
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
            {allAppointments.map((item,index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                  <td className="px-6 py-4 text-gray-800 font-medium">
                {index+1}
                </td>
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {`${item.userData.name}`}
                </td>
                <td className="px-6 py-4 text-gray-600">{`${item.slotDate.year} ${item.slotDate.month} ${item.slotDate.date} || ${item.slotTime}`}</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={item.docData.image}
                    
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-gray-800 font-medium">
                    {item.docData.name}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700">{item.amount}</td>
                <td className="px-6 py-4 text-center">
                  {item.status === "Cancelled" ? (
                    <RxCross2
                      className="text-red-500 mx-auto cursor-pointer"
                      size={22}
                      title="Cancelled"
                    />
                  ) : (
                    <IoCheckmark 
                      className="text-green-500 mx-auto cursor-pointer"
                      size={22}
                      title="Completed"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appoinment;
