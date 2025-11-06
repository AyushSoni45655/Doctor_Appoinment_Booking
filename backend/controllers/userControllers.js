import hashGenerator from "../helpers/hashgenrator.js";
import User from "../model/user.js";
import validator from "validator";
import fs from 'fs';
import bcrypt from 'bcrypt';
import imageKit from "../config/imagekit.js";
import jwt from 'jsonwebtoken';
import DoctorModel from "../model/doctor.js";
import Razorpay from "razorpay"; 
import stripe from 'stripe';
import AppointmentModel from "../model/appointment.js";
const createToken = (id)=>{
  return jwt.sign({id}, process.env.JWT_SECRET)
}
const signIn = async (req,res,next) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, msg: "Please fill all the fields" });
    }

    // 2️⃣ Check if user exists
    const userMatch = await User.findOne({ email });
    if (!userMatch) {
      return res
        .status(404)
        .json({ success: false, msg: "User not found!" });
    }

    // 3️⃣ Compare password
    const checkPassword = await bcrypt.compare(password, userMatch.password);
    if (!checkPassword) {
      return res
        .status(401)
        .json({ success: false, msg: "Invalid credentials!" });
    }

    // 4️⃣ Generate Token
    const token = createToken(userMatch._id);

    // 5️⃣ Prepare user data (hide password)
    const userData = {
      id: userMatch._id,
      name: userMatch.name,
      email: userMatch.email,
      image: userMatch.image,
    };

    // 6️⃣ Send response
    res.status(200).json({
      success: true,
      msg: "Login successful ✅",
      token,
      user: userData,
    });
  } catch (e) {
    console.error("❌ Error in signIn:", e);
    res.status(500).json({ success: false, msg: e.message });
  }
};
// ✅ Sign Up Controller
const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const imageFile = req.file;

    // 1️⃣ Basic Validation
    if (!name || !email || !password || !imageFile) {
      return res.status(400).json({ success: false, msg: "All fields are required" });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ success: false, msg: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, msg: "Invalid email address" });
    }

    if (password.length < 8) {
      return res.status(400).json({ success: false, msg: "Password must be at least 8 characters long" });
    }

    // 2️⃣ Upload Image to ImageKit
    const imageBuffer = fs.readFileSync(imageFile.path);
    const uploadResponse = await imageKit.upload({
      file: imageBuffer,
      fileName: imageFile.originalname,
      folder: "/userAccount",
    });

    // 3️⃣ Optimize Image URL
    const optimizedImage = imageKit.url({
      path: uploadResponse.filePath,
      transformation: [
        { quality: "auto" },
        { width: "1280" },
        { format: "webp" },
      ],
    });

    // 4️⃣ Hash Password
    const hashedPassword = await hashGenerator(password);

    // 5️⃣ Save New User
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image: optimizedImage,
    });

    await newUser.save();

    // 6️⃣ Create Token
    const token = createToken(newUser._id);

    // 7️⃣ Send Response
    res.status(201).json({
      success: true,
      msg: "Sign Up Successful 🎉",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        image: newUser.image,
      },
    });

    // 8️⃣ Delete temp file from local storage
    fs.unlinkSync(imageFile.path);

  } catch (e) {
    console.error("❌ Error during sign up:", e);
    res.status(500).json({ success: false, msg: e.message });
  }
};

const adminLogin = async(req,res,next)=>{
  try{
    const {email,password} = req.body;

    if(!email || !password){
      return   res.json({success:false,msg:"fields are missing"});
    }
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"1d"});
      return   res.json({success:true,msg:"Login successfull",token:token});
    }
    else{
       return res.json({success:false,msg:"Invalid Credentials"}) 
    }
  }catch(e){
    console.log(e);
    res.json({success:false,msg:e.message});
    
  }
}

const forgotPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check if fields are provided
    if (!email || !password) {
      return res.json({ success: false, msg: "All fields are required!" });
    }

    // 2️⃣ Find user by email
    const userMatch = await User.findOne({ email });
    if (!userMatch) {
      return res.json({ success: false, msg: "This email is not registered!" });
    }

    // 3️⃣ Hash new password
    const hashedPassword = await hashGenerator(password);

    // 4️⃣ Update password in database
    const updatedUser = await User.findByIdAndUpdate(
      userMatch._id,
      { password: hashedPassword },
      { new: true, runValidators: true }
    );

    // 5️⃣ Send response
    res.json({
      success: true,
      msg: "Password updated successfully!",
      userId: updatedUser._id,
    });
  } catch (e) {
    console.error("Error in forgotPassword:", e);
    res.json({
      success: false,
      msg: "Something went wrong!",
      error: e.message,
    });
  }
};

const doctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Step 1: Validation
    if (!email || !password) {
      return res.status(400).json({ success: false, msg: "Missing data !!!" });
    }

    // ✅ Step 2: Doctor existence check
    const doctor = await DoctorModel.findOne({ email });
    if (!doctor) {
      return res.status(400).json({ success: false, msg: "Invalid Credentials" });
    }

    // ✅ Step 3: Password verification
    const checkPassword = await bcrypt.compare(password, doctor.password);
    if (!checkPassword) {
      return res.status(400).json({ success: false, msg: "Invalid Credentials" });
    }

    // ✅ Step 4: Token generate (JWT)
    const token = createToken(doctor._id);

    // ✅ Step 5: Password hide before sending data
    const { password: _, ...doctorData } = doctor._doc;

    // ✅ Step 6: Response
    res.status(200).json({
      success: true,
      msg: "Login Completed!!!",
      token: token,
      doctor: doctorData, // doctor info without password
    });

  } catch (e) {
    console.log("Error in doctorLogin:", e);
    res.status(500).json({ success: false, msg: e.message });
  }
};


// payment option here implemented 

// by an a razorpay

const razorpayInstance = new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET
});
const paymentRazorpay = async(req,res)=>{
  try{
    const {appoinmentId} = req.body;
    if(!appoinmentId){
      return res.status(400).json({success:false,msg:"Input missing !!!"})
    }
    const appoinment = await AppointmentModel.findById(appoinmentId);
    if(!appoinment || appoinment.cancelled){
      return res.status(400).json({success:false,msg:"Appoinment cancelled or not found"});
    }
    // creating option for the razorpay payment
    const options = {
      amount:appoinment.amount * 100,
      currency:process.env.CURRENCY,
      receipt:appoinmentId
    }
    //creation of an order 
    const order = await razorpayInstance.orders.create(options);
    res.status(200).json({success:true,msg:"Payment completed successfully!!!",order});
  }catch(e){
    console.log(e.message);
     res.status(500).json({success:false,msg:e.message})
  }
}

//verify the razorpay payment
const verifyRazorpay = async(req,res)=>{
  try{
    const {razorpay_order_id} = req.body;
    if(!razorpay_order_id){
      return res.status(400).json({success:false,msg:"Input field missing"})
    }
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    console.log(orderInfo);
    if(orderInfo.status === "paid"){
      await AppointmentModel.findByIdAndUpdate(orderInfo.receipt,{payment:true});
      return res.status(201).json({success:true,msg:"Payment Successfully completed",orderInfo});
    }else{
      return res.status(400).json({success:false,msg:"Payment failed",orderInfo});
    }
   
    
  }catch(e){
    console.log(e);
    res.status(500).json({success:false,msg:e.message})
  }
}
// by an a Stripe
const paymentStripe = async(req,res)=>{
  try{

  }catch(e){
    
  }
}

export {signIn,signUp,adminLogin,forgotPassword,doctorLogin,paymentRazorpay,paymentStripe,verifyRazorpay}