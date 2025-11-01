import User from '../model/userModel.js';
export const create=async(requestAnimationFrame,res)=>{
    try{
        const newUser=new User(requestAnimationFrame.body);
        const {email}=newUser; 
        const userExist=await User.findOne({email});
        if (userExist){
            return res.status(400).json({message:"User with this email already exists"});
        }
        const savedData= await newUser.save();
        res.status(200).json(savedData);

    }catch(error){
        res.status(500).json({errorMessage:error.message});
    }
}