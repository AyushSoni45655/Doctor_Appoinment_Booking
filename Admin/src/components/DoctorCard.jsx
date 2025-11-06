// export default function DoctorCard({data}) {
//     return (
//         <div className="relative flex items-center justify-center text-sm text-white/80 rounded-lg shadow-sm max-w-80 h-fit">
//             <div className="absolute bottom-2 flex items-center justify-around bg-gray-500 backdrop-blur-sm w-full max-w-72 rounded  border border-white/20 py-2">
//             <div className="flex flex-col gap-1 items-start font-bold ">
//               <h4 className="text-md text-center">{data.name}</h4>
             
//               <p className="text-center">{data.speciality}</p>
//             </div>
                
//                 <button type="button" className="green- rounded-full px-6 py-1.5">Available</button>
//             </div>
//             <img className="rounded-md object-center object-contain" src={data.image}  alt="" />
//         </div>
//     );
// };

export default function DoctorCard({ data }) {
  return (
    <div className="relative flex items-center justify-center text-sm text-white rounded-xl shadow-lg overflow-hidden max-w-80 w-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      
      {/* Doctor Image */}
      <img
        className="w-full h-64 object-cover object-center"
        src={data.image}
        alt={data.name}
      />

      {/* Doctor Info Overlay */}
      <div className="absolute bottom-2 flex items-center justify-between bg-gray-800/70 backdrop-blur-md w-[90%] mx-auto rounded-lg border border-white/20 px-4 py-2">
        
        {/* Name & Speciality */}
        <div className="flex flex-col gap-1 items-start font-semibold text-white">
          <h4 className="text-base">{data.name}</h4>
          <p className="text-sm text-gray-300">{data.speciality}</p>
        </div>

        {/* Availability Button */}
        <button
          type="button"
          className={`rounded-full px-4 py-1.5 text-xs font-medium ${
            data.available
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          {data.available ? "Available" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}
