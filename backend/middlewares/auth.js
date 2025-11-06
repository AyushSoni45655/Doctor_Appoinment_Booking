import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const auth = async(req,res,next)=>{
  try{
    const {token} = req.headers;

     jwt.verify(token, process.env.JWT_SECRET);
    next();
    
  }catch(e){
     res.json({success:false,msg:e.message});

  }
}

export default auth;