import { createContext,useEffect,useState,useMemo } from "react";
import {toast} from "react-hot-toast"
import {assets,specialityData,doctors as localDoctors} from '../assets/assets'
import axios from 'axios';

 export const Contextt = createContext();

export const ContextProvider = ({children})=>{
  const backend_URL = import.meta.env.VITE_BACKEND_URL;
  console.log("my backend url is a : ",backend_URL);
  const [user,setUser] = useState(()=>{const saveduser = localStorage.getItem("user");return saveduser ? JSON.parse(saveduser):{}});
  // token   here
  const [token,setToken] = useState(localStorage.getItem('token') || "");
 
  

  // login functionality here
    const lockOption = ['password', 'text'];
    const [lockState, setLockState] = useState(lockOption[0]);
    const [checked,setChecked] = useState(false);
    
    
   const [signIn,setSignIn] = useState({
      email:"",
      password:"",
    });
    const signInOnChangeHandler = (e)=>{
      setSignIn((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    const signInSubmitHandler = async()=>{
      try{
        const response = await axios.post(`${backend_URL}/api/user/signin`,{email:signIn.email,password:signIn.password});
        if(response.data.success){
         setToken(response.data.token);
         localStorage.setItem('token', response.data.token);
         setUser(response.data.user);
         localStorage.setItem('user', JSON.stringify(response.data.user))
          toast.success(response.data.msg);
        }else{
          toast.error(response.data.msg);
        }
      }catch(e){
       
         toast.error(`Login error ${e}`);
      }
    }

  
      // password criteria
  const passwordCriteria = [" Minimum 8 characters","At least 1 uppercase letter","At least 1 lowercase letter","At least 1 number","At least 1 special character (!@#$%^&*)"];

  const criteria = {
  length: signIn.password.length >= 8,
  uppercase: /[A-Z]/.test(signIn.password),
  lowercase: /[a-z]/.test(signIn.password),
  number: /\d/.test(signIn.password),
  specialChar: /[!@#$%^&*]/.test(signIn.password),
};



const isStrongPassword = Object.values(criteria).every(Boolean);
    const checkedBox = () => {
  if (signIn.email.trim() === "" || signIn.password.trim() === "") {
    toast.error("First Fill All Fields");
  } else if (!isStrongPassword) {
    toast.error("Password is not strong enough");
  } else {
    setChecked(!checked);
  }
};

    

    // signup functionality here


     

    const [imagePreview,setImagePreview] = useState(assets.imgs)
   const [signUp,setSignUp] = useState({
    name:"",
      email:"",
      image:"",
      password:"",
      cPassword:""
    });

    const signUpOnChangeHandler = (e) => {
  const { name, type, files, value } = e.target;

  if (type === "file") {
    const file = files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl); // preview update
      setSignUp((prev) => ({ ...prev, [name]: file })); // file को state में डालो
    }
  } else {
    // बाकी input fields (text, email, etc.)
    setSignUp((prev) => ({ ...prev, [name]: value }));
  }
};
   const signUpSubmitHandler = async () => {
  try {
    const { name, email, password, cPassword } = signUp;

    if (!name || !email || !password || !cPassword) {
      toast.error("Enter All Fields");
      return false;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters!");
      return false;
    }

    if (password !== cPassword) {
      toast.error("Confirm Password must match Password");
      return false;
    }

    const formData = new FormData();
formData.append("name", name);
formData.append("email", email);
formData.append("password", password);
formData.append("image", signUp.image); // file object (from input[type='file'])

    const response = await axios.post(`${backend_URL}/api/user/signup`, formData, {
  headers: {
    "Content-Type": "multipart/form-data"
  }
});


if(response.data.success){
  setToken(response.data.token);
  localStorage.setItem('token', response.data.token);
  setUser(response.data.user);
  localStorage.setItem('user',JSON.stringify(response.data.user))
   // ✅ If all validations pass
    toast.success(response.data.msg);
    // Call your API here
    return true;
}else{
     toast.error(response.data.msg);
    // Call your API here
    return false;
}
   
  } catch (e) {
    toast.error("Something went wrong!");
    return false;
  }
};


   
    // forgot password implementation here

    const [forgotPassword,setFPassword] = useState({
      email:"",
      password:""
    });

    const fPasswordOnChangeHandler = async(e)=>{
      setFPassword((prev)=>({...prev,[e.target.name]:e.target.value}));
    }


  // 🔹 Form submit handler
  const fPasswordSubmitHandler = async () => {
    try {
      if (!forgotPassword.email || !forgotPassword.password) {
        toast.error("All fields are required!");
        return;
      }

      const response = await axios.post(
        `${backend_URL}/api/user/fPassword`,
        forgotPassword
      );

      if (response.data.success) {
        toast.success(response.data.msg);
        setFPassword({ email: "", password: "" }); // reset fields
      } else {
        toast.error(response.data.msg);
      }
    } catch (e) {
     
      toast.error("Something went wrong while updating password!");
    }
  };


    
    
// navigation here
 const navs = [
    {
      id:11,
      path:"/",
      name:"Home"
    },
     {
      id:22,
      path:"/allDoctors",
      name:"All Doctors"
    },
     {
      id:33,
      path:"/contact",
      name:"Contact"
    },
     {
      id:44,
      path:"/about",
      name:"About"
    }
  ]



  // doctors speciality list here

  const [specialist,setSpecialist] = useState([]);
 const [cSpecialist,setCSpecialist] = useState("All");
  const getSpecialist = ()=>{
    setSpecialist(specialityData)
  }

  useEffect(()=>{
    
    getSpecialist();
  },[]);

    // Currunt choise speciality doctor here

  const selectCurruntSpecialist = (specialistt)=>{
setCSpecialist(specialistt);
  }
 
  



 
  
  

  // get doctors data here 

  const [doctorss,setDoctors] = useState([]);
  const [topDoctors,setTopDoctors]= useState([]);
  const getDoctors = async()=>{
    try{
      const response = await axios.get(`${backend_URL}/api/doctor/get`);
      if(response.data.success){
        setDoctors(response.data.doctor);
      }else{
        toast.error(response.data.msg);
      }
    }catch(e){
      
      toast.error(e.response?.data?.msg || 'something going wrong')
      
    }
    
  }
    useEffect(()=>{
    getDoctors();
    
  },[]);


  useEffect(()=>{
    if(doctorss.length > 0){
      setTopDoctors(doctorss);
    }
    
  },[doctorss])


  
  
  
  
  // show doctors by the cspeciality
const [curruntDoctors,setCDoctors] = useState([]);
const findDoctors = ()=>{
  if(cSpecialist === "All"){
    setCDoctors(doctorss)
  }else{
    const filtered = doctorss.filter((obj)=>obj.speciality === cSpecialist)
    setCDoctors(filtered)
  }
}
useEffect(()=>{
findDoctors();
},[cSpecialist,doctorss])
 


  // logout functionaility here implement

  const logOutUser = ()=>{
    setToken("");
    localStorage.removeItem('token');
    localStorage.removeItem('user')
  }

  // my appoinment details implementation here

  const [myAppoinment,setMyAppoinment] = useState([]);

  const getAppoinments = async()=>{
    try{
      const userId = user?.id;
      if(!userId){
        toast.error("User Id is empty");
        return;
      }
      const response = await axios.post(`${backend_URL}/api/appoinment/userAppoinment`,{userId:userId});
      if(response.data.success){
        setMyAppoinment(response.data.appoinments);
      }else{
        toast.error(response.data.msg)
      }
    }catch(e){
      toast.error(e.response?.data?.msg || "Something going wrong")
    }
  }
useEffect(()=>{
  getAppoinments();
},[]);

const cancelAppoinment = async(id)=>{
  try{
if(!id){
   toast.error("Id is missing");
   return;
}
const response = await axios.post(`${backend_URL}/api/appoinment/toggle`,{id});
if(response.data.success){
  await getAppoinments();
  toast.success(response.data.msg);
}
else{
   toast.error(response.data.msg);
}
  }catch(e){
    toast.error(e.response?.data?.msg || "server error")
  }
}

  const addAppoinment = async(docId,slotDate,slotTime,docData,amount)=>{
    if(!docId || !slotDate || !slotTime || !docData || !amount || !user?.id || !user ){
      return toast.error("Fields are missing");
    }

    if(!docData.available){
       return toast.error("Doctor not available for the booking")
    }
    const updatedDoctor = {
      userId:user.id,
      docId:docId,
      slotDate:slotDate,
      slotTime:slotTime,
      userData:user,
      docData:docData,
      amount:amount,
      date:Date.now()
    } 
    try{

        const response = await axios.post(`${backend_URL}/api/appoinment/add`,updatedDoctor);
        
        
    if(response.data.success){
      toast.success(response.data.msg);
    }else{
      toast.error(response.data.msg);
    }

    }catch(e){
       console.error("Error adding appointment:", e);
    toast.error("Something went wrong while adding appointment");
    }
  
   
  }
  
 const initPay = (order,navigator) => {
  const options = {
    key:import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount:order.amount,
    currency:order.currency,
    name:"Appoinment Payment",
    description:"Appoinment description here",
    order_id:order.id,
    receipt:order.receipt,
    handler: async(res)=>{
      console.log(res);
      try{
        const {razorpay_order_id} = res;
        if(!razorpay_order_id){
          toast.error("missing input order id to verify payment!!!");
          return;
        }
        const response = await axios.post(`${backend_URL}/api/user/verRazorpay`,{razorpay_order_id});
        if(response.data.success){
          await getAppoinments();
          navigator("/appoinment")
        }
      }catch(e){
        console.log(e);
        toast.error(e.response?.data?.msg ||"server error");
      }
    }
  }

  const rzp = new window.Razorpay(options)
  rzp.open()
 }
  const razorpayPayment = async(appoinmentId,navigator)=>{
    try{
      if(!appoinmentId){
        toast.error("Missing input");
        return;
      }
      const response = await axios.post(`${backend_URL}/api/user/razorpayPayments`,{appoinmentId});
      if(response.data.success){
        
        initPay(response.data.order,navigator);
        
      }

    }catch(e){
      toast.error(e.response?.data.msg || "server error");
    }
  }
  


  const values = {curruntDoctors,specialist,selectCurruntSpecialist,topDoctors,cSpecialist,setCSpecialist,setSpecialist,navs,forgotPassword,setFPassword,fPasswordOnChangeHandler,fPasswordSubmitHandler,token,logOutUser,myAppoinment,setMyAppoinment,
    passwordCriteria,criteria,isStrongPassword,signUp,setSignUp,signUpOnChangeHandler,signUpSubmitHandler,doctorss,addAppoinment,
    setSignIn,signIn,signInOnChangeHandler,razorpayPayment,cancelAppoinment,signInSubmitHandler,lockState,setLockState,checked,setChecked,lockOption,checkedBox,imagePreview,user
  };
  return <Contextt.Provider value={values}>{children}</Contextt.Provider>
}