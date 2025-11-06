import imageKit from "../config/imagekit.js";
import hashGenerator from "../helpers/hashgenrator.js";
import DoctorModel from "../model/doctor.js";
import fs from "fs";

const addDoctor = async (req, res) => {
  try {
    const { name, email, password, about, fees, line1, line2, experience, speciality, degree } = req.body;
    const imageFile = req.file;

    if (!name || !email || !password || !about || !experience || !speciality || !degree || !line1 || !line2 || !fees || !imageFile) {
      return res.json({ success: false, msg: "Input fields are missing!!!" });
    }

    const existingDoctor = await DoctorModel.findOne({ email });
    if (existingDoctor) {
      return res.json({ success: false, msg: "Enter another Email Address" });
    }

    if (password.length < 8) {
      return res.json({ success: false, msg: "Password must be at least 8 characters long" });
    }

    const hashedPassword = await hashGenerator(password);

    // Upload image to ImageKit
    const imageBuffer = fs.readFileSync(imageFile.path);
    const uploadResponse = await imageKit.upload({
      fileName: imageFile.originalname,
      file: imageBuffer,
      folder: "/doctors",
    });

    const optimizedImage = imageKit.url({
      src: uploadResponse.url,
      transformation: [
        { quality: "auto" },
        { width: "1280" },
        { format: "webp" },
      ],
    });

    const addedDoctor = new DoctorModel({
      name,
      email,
      password: hashedPassword,
      image: optimizedImage,
      about,
      fees,
      speciality,
      degree,
      experience,
      address: { line1, line2 },
    });

    await addedDoctor.save();
    fs.unlinkSync(imageFile.path); // clean up local file

    res.json({ success: true, msg: "Doctor Added Successfully!!!" });
  } catch (e) {
    console.log(e);
    res.json({ success: false, msg: e.message });
  }
};

const getDoctor = async (req,res)=>{
  try{
    const allDoctors = await DoctorModel.find({});
    if(allDoctors.length > 0){
      return res.json({success:true,msg:"doctors fetched successsfully",doctor:allDoctors});
    }else{
      return res.json({success:false,msg:"Not fetched doctors"});
    }

  }catch(e){
console.log(e.message);
res.json({success:false,msg:e.message});
  }
}

const updateDoctor = async (req, res) => {
  try {
    const { about, fees, available, line1, line2, docId } = req.body;

    if (!about || !fees || line1 === "" || line2 === "" || !docId) {
      return res
        .status(400)
        .json({ success: false, msg: "Input fields are empty" });
    }
    const isUpdated = await DoctorModel.findByIdAndUpdate(
      docId,
      {
        about,
        fees,
        available,
        "address.line1": line1,
        "address.line2": line2,
      },
      { new: true } // return updated doc
    );

    if (isUpdated) {
      return res
        .status(200)
        .json({ success: true, msg: "Update Completed ✅", doctor: isUpdated });
    } else {
      return res
        .status(400)
        .json({ success: false, msg: "Updation failed ❌" });
    }
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ success: false, msg: e.message || "Server error ❗" });
  }
};

export { addDoctor , getDoctor ,updateDoctor};
