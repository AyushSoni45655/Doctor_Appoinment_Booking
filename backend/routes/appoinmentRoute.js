import express from 'express';
const appoinmentRouter = express.Router();
import { addAppoinment,completeAppoinment,getAppointments,getsingleDoctorAppoinments,getAppoinmentSingleUser,cancelAppoinment} from '../controllers/appoinmentCon.js'
appoinmentRouter.post("/add",addAppoinment);
appoinmentRouter.get("/getAppoinment",getAppointments);
appoinmentRouter.post("/doctorAppoinments",getsingleDoctorAppoinments);
appoinmentRouter.post("/userAppoinment",getAppoinmentSingleUser);
appoinmentRouter.post("/toggle",cancelAppoinment);
appoinmentRouter.post("/complete",completeAppoinment)
export default appoinmentRouter;