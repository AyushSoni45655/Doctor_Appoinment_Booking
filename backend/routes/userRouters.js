import {signIn,signUp,adminLogin,forgotPassword,doctorLogin,paymentRazorpay,verifyRazorpay} from "../controllers/userControllers.js";
import express from 'express';
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.post("/signin",signIn);
userRouter.post("/signup",upload.single('image'),signUp);
userRouter.post("/admin",adminLogin);
userRouter.post("/fPassword",forgotPassword);
userRouter.post("/dsignin",doctorLogin);
userRouter.post("/razorpayPayments",paymentRazorpay);
userRouter.post("/verRazorpay",verifyRazorpay)
export default userRouter;