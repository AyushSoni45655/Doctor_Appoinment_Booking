import express from 'express';
const doctorRouter = express.Router();
import {addDoctor,getDoctor,updateDoctor} from '../controllers/doctorControllers.js'
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';
doctorRouter.post("/add",auth,upload.single("image"),addDoctor);
doctorRouter.get("/get",getDoctor);
doctorRouter.post("/updation",updateDoctor)
export default doctorRouter;