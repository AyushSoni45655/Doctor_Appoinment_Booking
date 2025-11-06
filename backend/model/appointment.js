import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
userId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User',
  required:true
},
docId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Doctor',
  required:true
},
slotDate:{
  type:Object,required:true
},
slotTime:{
  type:String,required:true
},
userData:{
  type:Object,required:true
},
docData:{
  type:Object,required:true
},
amount:{
  type:Number,required:true
},
date:{
  type:Number,required:true
},
cancelled:{
  type:Boolean,required:true,default:false
},
payment:{
  type:Boolean,required:true,default:false
},
isComplete:{
  type:Boolean,required:true,default:false
},
},{timestamps:true});

const AppointmentModel = mongoose.models.Appointment || mongoose.model('Appointment',appointmentSchema,'Appointments');
export default AppointmentModel;