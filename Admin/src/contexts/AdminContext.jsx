import { useState } from "react";
import { createContext } from "react";
import {toast} from 'react-hot-toast'
import { assets } from "../assets/assets";
import axios from 'axios';
import { useEffect } from "react";
export const AContextt = createContext();

export const AContextProvider = ({children})=>{
   const [token ,setToken] = useState(localStorage.getItem('token')||"");
  // BAKEND URL HERE
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  console.log(backend_url);
  

  // add doctor property here

   const [addDoctor,setAddDoctor] = useState({
      name:"",
      email:"",
      password:"",
      about:"",
      experience:"",
      image:"",
      speciality:"",
      degree:"",
      line1:"",
      line2:"",
      fees:""
    });
    const addDoctorOnChange = (e)=>{
      const {name,type,files,value} = e.target;
      if(type === "file"){
        const file = files[0];
        if(file){
           const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl); // preview update
        setAddDoctor((prev) => ({ ...prev, [name]: file })); // file को state में डालो
        }
      }else{
          setAddDoctor((prev)=>({...prev,[name]:value}))
        }
    }
    console.log(addDoctor);
    
    const addDoctorSubmitHandler = async(e)=>{
      e.preventDefault();
      const {name,about,degree,speciality,line1,line2,image,fees,email,password,experience} = addDoctor;
       
      try{

        if(!name || !email || !password || !about || !fees || !experience || !image || !line1 || !line2 || !speciality || !degree){
          return toast.error("Please Enter all field")
        }
        const formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('speciality',speciality);
        formData.append('about',about);
        formData.append('degree',degree);
        formData.append('line1',line1);
        formData.append('line2',line2);
        formData.append('image',image);
        formData.append('fees',fees);
        formData.append('experience',experience);
       const response = await axios.post(`${backend_url}/api/doctor/add`,formData,  {
        headers: {
          token: token,
          "Content-Type": "multipart/form-data",
        },
      });
       if(response.data.success){
        toast.success(response.data.msg);
        setAddDoctor({
    name: "",
    about: "",
    degree: "",
    speciality: "",
    line1: "",
    line2: "",
    image: "",
    fees: "",
    email: "",
    password: "",
    experience: "",
  });
       }else{
        toast.error(response.data.msg)
       }
      }catch(e){
        console.log(e);
        toast.error(e.response?.data?.msg || "Something went wrong while adding doctor");
      }
    }
    const experience = [
      "1 year",
      "2 years",
      "3 years",
      "4 years",
      "5 years",
      "6 years",
      "7 years",
      "8 years",
      "9 years",
      "10 years",
    ];
  

  

  // login functionality here
    const [signIn,setSignIn] = useState({
      email:"",
      password:""
    })
    const signInOnChangeHandler = (e)=>{
      setSignIn((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

     const [adminDoctorToggle,setAdminDoctorToggle] = useState(false);

    const signInSubmitHandler = async(e)=>{
     
      try{
        const {email,password} = signIn;
        if(!email || !password){
          return toast.error("Enter all Fields!!!");
        }
        const response = await axios.post(`${backend_url}/api/user/admin`,{email:signIn.email,password:signIn.password});
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
          toast.success(response.data.msg);
          setAdminDoctorToggle(true);
          return true;
        }else{
          toast.error(response.data.msg);
          setAdminDoctorToggle(false);
          return false;
        }
      }catch(e){
        console.log(e);
        toast.error(e.response?.data?.msg || "somwthing went wrong when sign In")
        return false;
      }
    }

    // logout functionality here implemented

    const logOut = ()=>{
      if(adminDoctorToggle){
         setToken("");
      localStorage.removeItem('token')
      }else{
        setToken("");
        localStorage.removeItem('token');
        localStorage.removeItem('dDetails')
      }
     
    }

      // get all doctors here implements

    const [allDoctor,setAllDoctor] = useState([]);
    const getDoctors = async()=>{

      try{
        const response = await axios.get(`${backend_url}/api/doctor/get`);
        console.log(response.data);
        
        if(response.data.success){
          setAllDoctor(response.data.doctor);
          toast.success("Doctor added successfully!!!");
        }else{
          toast.error("Something going wrong!!!")
        }
      }catch(e){
        console.log(e);
        toast.error(e.response?.data?.message || 'Something going wrong while fetching doctors list')
        
      }
    }
    useEffect(()=>{
      getDoctors();
    },[token])

    //get all appoinments here
    const [allAppointments, setAllAppointments] = useState([]);

const getAppointments = async () => {
  try {
    const response = await axios.get(`${backend_url}/api/appoinment/getAppoinment`);

    if (response.data.success) {
      setAllAppointments(response.data.allAppointment);
      toast.success(response.data.msg || "Appointments fetched successfully!");
    } else {
      toast.error(response.data.msg || "Failed to fetch appointments!");
    }

  } catch (e) {
    console.log(e);
    toast.error(e.response?.data?.msg || "Something went wrong");
  }
};

useEffect(() => {
  getAppointments();
}, []);


// single doctor appoinments here
const [doctorDetails,setDoctorDetails] = useState(JSON.parse(localStorage.getItem('dDetails'))||{});

const [singleDocAppoinment,setSingleDAppoinment] = useState([]);
const getSingleDoctorAppoinment = async(req,res)=>{
  try{
    const response = await axios.post(`${backend_url}/api/appoinment/doctorAppoinments`,{docId:doctorDetails._id});
    if(response.data.success){
      setSingleDAppoinment(response.data.allAppoinments);
      toast.success(response.data.msg);
    }
    else{
      toast.error(response.data.msg);
    }
  }catch(e){
    console.log(e);
    toast.error(e.response?.data?.msg || "Something going wrong")
    
  }
}

useEffect(()=>{
  getSingleDoctorAppoinment();
},[]);
console.log("I am a single doctor appoinments here implemented",singleDocAppoinment);

const dashBoard_Data = [
  {
    id:121343,
    name:"Doctors",
    len:allDoctor.length,
    icon:assets.doctor_icon
  },
   {
    id:123234,
    name:"Appointments",
    len:allAppointments.length,
    icon:assets.appointments_icon
  },
   {
    id:123443,
    name:"Patients",
    len:allAppointments.length + 4,
    icon:assets.patients_icon
  },
]



// doctor login details here

    const [dSignin ,setDSignIn] = useState({
      email:"",
      password:""
    });
    const dSignInOnChangeHandler = (e)=>{
     const {name , value} = e.target;
     setDSignIn((prev)=>({...prev,[name]:value}))
    }
    const dSignInSubmitHandler = async(e)=>{
      try{
        const {email,password} = dSignin;
        if(!email || !password ){
          return toast.error("Input field missing")
        }
        const response = await axios.post(`${backend_url}/api/user/dsignin`,dSignin);
        console.log("i am doctor signin",response);
        
        if(response.data.success){
          localStorage.setItem('token',JSON.stringify(response.data.token));
          setToken(response.data.token);
          localStorage.setItem('dDetails', JSON.stringify(response.data.doctor));
          setDoctorDetails(response.data.doctor)
          toast.success(response.data.msg);
          return true;

        }
        else{
           toast.error(response.data.msg);
          return false;
        }

      }catch(e){
         toast.error(e.response?.data?.msg || "something went wrong");
          return false;
      }
    }

   
   
    const [imagePreview,setImagePreview] = useState(assets.imgs)


    // doctor dashboard here implemented here

    const earning = singleDocAppoinment.reduce((acc,obj)=>obj.payment ? acc + obj.amount:acc,0);
    const totalPatient = singleDocAppoinment.filter((obj)=>!obj.isComplete && !obj.cancelled).length;
    
    
    
const doctor_DashBoard = [
  {
    id:"djdkjc728",
    name:"Earnings",
    icon:assets.earning_icon,
    data:`$${earning}`
  },
    {
    id:"djdj93ejkeki",
    name:"Appoinments",
    icon:assets.appointments_icon,
    data:singleDocAppoinment.length,
  },
  {
    id:"ksnkskjx374hdjkd",
    name:"Patient",
    icon:assets.patients_icon,
    data:totalPatient,
  },
]
//doctor updation implementation here

 const [dFormData, setDFormData] = useState({
    about: "",
    fees: "",
    line1: "",
    line2: "",
    available:true
  });

  useEffect(() => {
    if (doctorDetails) {
      setDFormData({
        about: doctorDetails.about || "",
        fees: doctorDetails.fees || "",
        line1: doctorDetails.address?.line1 || "",
        line2: doctorDetails.address?.line2 || "",
        available:doctorDetails.available ?? true
      });
    }
  }, [doctorDetails]);

  const handleDFormDataOnChange = (e) => {
    const { name, value,type,checked } = e.target;
    setDFormData((prev) => ({ ...prev, [name]: type === 'checkbox'? checked: value }));
  };

  const handleDFormDataSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!dFormData.about  || !dFormData.fees || !dFormData.line1 || !dFormData.line2 || !doctorDetails._id){
        toast.error("Missing inmput field");
        return;
      }
      const response = await axios.post(`${backend_url}/api/doctor/updation`,{...dFormData,docId:doctorDetails._id});
      if(response.data.success){
        toast.success(response.data.msg);
      }
      else{
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.msg || "server error");
    }
  };

  const cancelAppoinment = async(id)=>{
    try{
       if(!id){
        return toast.error("Appoinment id is missing")
      }
      const response = await axios.post(`${backend_url}/api/appoinment/toggle`,{id});
      if(response.data.success){
        toast.success(response.data.msg);
      }
      else{
        toast.error(response.data.msg);
      }
    }catch(e){
       console.log(e);
      toast.error(e.response?.data?.msg);
    }
  }

  const completeAppoinment = async(id)=>{
    try{
      if(!id){
        return toast.error("Appoinment id is missing")
      }
      const response = await axios.post(`${backend_url}/api/appoinment/complete`,{id});
      if(response.data.success){
        toast.success(response.data.msg);
      }
      else{
        toast.error(response.data.msg);
      }
    }catch(e){
      console.log(e);
      toast.error(e.response?.data?.msg);
    }
  }
  const value = {token,dashBoard_Data,cancelAppoinment,completeAppoinment,doctor_DashBoard,setDSignIn,dSignin,doctorDetails,dSignInOnChangeHandler,dSignInSubmitHandler,setSignIn,signIn,signInOnChangeHandler,dFormData,setDFormData,handleDFormDataOnChange,handleDFormDataSubmit,addDoctor,logOut,adminDoctorToggle,setAddDoctor,addDoctorOnChange,addDoctorSubmitHandler,experience ,signInSubmitHandler,imagePreview,setImagePreview,allDoctor,allAppointments,singleDocAppoinment}
  return <AContextt.Provider value={value}>{children}</AContextt.Provider>
}