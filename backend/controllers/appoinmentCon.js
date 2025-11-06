import AppointmentModel from "../model/appointment.js";
import DoctorModel from "../model/doctor.js";

const addAppoinment = async(req,res)=>{
try{
   console.log("📥 Incoming Appointment Data:", req.body); // check frontend data
  const {userId,docId,slotDate,slotTime,userData,docData,amount,date} = req.body;
  if(!userId || !docId || !slotDate || !slotTime || !userData || !docData || !amount || !date){
    return res.status(400).json({success:false,msg:"Fields are missing"});
  }
  
  const appoinmentAdd = new AppointmentModel({
    userId,docId,slotDate,slotTime,userData,docData,amount,date
  });
  await appoinmentAdd.save();
   
    res.status(201).json({success:true,msg:'Appoinment Added Successfully'});
     
    
 
}catch(e){
console.log(e);
res.status(500).json({success:false,msg:e.message});
}
}
const getAppointments = async (req, res) => {
  try {
    const allAppointment = await AppointmentModel.find({});

    if (allAppointment.length > 0) {
      // ✅ जब Appointments मिल जाएँ
      return res.status(200).json({
        success: true,
        msg: "All Appointments fetched successfully",
        allAppointment,
      });
    } else {
      // ⚠️ जब कोई Appointment नहीं मिले
      return res.status(404).json({
        success: false,
        msg: "No appointments found",
        allAppointment: [],
      });
    }
  } catch (e) {
    console.error("Error fetching appointments:", e);
    return res.status(500).json({
      success: false,
      msg: "Server error occurred",
      error: e.message,
    });
  }
};
 const getsingleDoctorAppoinments = async(req,res)=>{
try{
const {docId} = req.body;
if(!docId){
  return res.status(400).json({success:false,msg:"missing fields"});
}
const appoinments = await AppointmentModel.find({docId:docId})
if(appoinments.length > 0){
  return res.status(200).json({success:true,msg:"Appoinment fetched!!!",allAppoinments:appoinments});
}else{
  return res.status(400).json({success:false,msg:"No Appoinment found!!!"})
}
}catch(e){
  console.log(e);
  res.status(500).json({success:false,msg:e.message});
  
}
 }

const getAppoinmentSingleUser = async(req,res)=>{
  try{
    const {userId} = req.body;
    if(!userId){
      return res.status(400).json({success:false,msg:"Missing input"});
    }
    const appoinments = await AppointmentModel.find({userId:userId});
    if(appoinments.length > 0){
      return res.status(200).json({success:true,msg:"Fetched all Appoinments",appoinments:appoinments});
    }else{
      return res.status(400).json({success:false,msg:"No appoinments found here"});
    }
  }catch(e){
    console.log(e);
    res.status(500).json({success:false,msg:e.message || "server error"});
    
  }
}
const cancelAppoinment = async (req, res) => {
  try {
    const { id } = req.body;

    // 1️⃣ Input Validation
    if (!id) {
      return res.status(400).json({
        success: false,
        msg: "Missing input field (appointment ID required)",
      });
    }

    // 2️⃣ Find Appointment
    const appointment = await AppointmentModel.findById(id);
    if (!appointment) {
      return res.status(404).json({
        success: false,
        msg: "No appointment found with this ID",
      });
    }

  

    // 3️⃣ Toggle cancel status
    appointment.cancelled = !appointment.cancelled;
    await appointment.save();

    // 4️⃣ Return Updated Data
    return res.status(200).json({
      success: true,
      msg: `Appointment ${appointment.cancelled ? "cancelled" : "re-activated"} successfully`,
      appointment,
    });
  } catch (e) {
    console.error("Error in cancelAppoinment:", e);
    return res.status(500).json({
      success: false,
      msg: e.message || "Server side error",
    });
  }
};

const completeAppoinment = async (req, res) => {
  try {
    const { id } = req.body;

    // 🔹 Input Validation
    if (!id) {
      return res.status(400).json({ success: false, msg: "Input is missing!!!" });
    }

    // 🔹 Appointment Fetch
    const appoinment = await AppointmentModel.findById(id);
    if (!appoinment) {
      return res.status(404).json({ success: false, msg: "Appointment not found!" });
    }

    // 🔹 Already Completed Check
    if (appoinment.isComplete) {
      return res.status(400).json({ success: false, msg: "Appointment already completed!" });
    }

    // 🔹 Mark as Completed
    appoinment.isComplete = true;
    await appoinment.save();

    return res.status(200).json({
      success: true,
      msg: "Appointment marked as completed ✅",
      appointment: appoinment,
    });
  } catch (e) {
    console.error("❌ Error in completeAppointment:", e);
    res.status(500).json({ success: false, msg: e.message });
  }
};


export{
  addAppoinment,getAppointments,getsingleDoctorAppoinments,getAppoinmentSingleUser,cancelAppoinment,completeAppoinment
}