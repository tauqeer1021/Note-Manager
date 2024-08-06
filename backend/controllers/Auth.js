import UserModel from "../models/Auth.js";
import bycript from "bcryptjs"
import jwt from "jsonwebtoken"

const Register = async(req,res) => {
    try {
        const {userName, email, password} = req.body;
        if(!userName || !email || !password){
            return res.status(303).json({success: false, message: "All fields are required"})

        }
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.status(303).json({success: false,message: "User already exist Please Login"})
        }
        const hasehpassword = await bycript.hashSync(password, 10);
        const NewUser = new UserModel({
            userName, email, password: hasehpassword
        })
        NewUser.save();
        res.status(200).json({success: true,message: "User Resgister Successfully",User: NewUser})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false,message: "Internal Server Error"})

    }
}


const Login = async(req,res) => {
    try {
        const {email,password} = req.body;
        const FindUser = await UserModel.findOne({email});
        if(!FindUser){
            return res.status(303).json({success: false, message: "User not found please Register"});

        }
        const comparePassword = await bycript.compare(password, FindUser.password);
        if(!comparePassword){
            return res.status(303).json({success: false, message: "Invalid Password"})

        }

        const token = await jwt.sign({userId: FindUser._id},process.env.SecreateKey,{expiresIn: "3d"});
        res.cookie("token",token,{
            httpOnly: true,
            secure: false,
            maxAge: 3 * 24 * 3600 * 1000
        })
        res.status(200).json({success: true, message: "Login successfully", user: FindUser,
            token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"})
    }
}
const Logout = async(req,res) => {
    try {
        
        res.clearCookie('token');
        res.status(200).json({success: true, message: "User Logout Successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error"})
    }
}
export {Register,Login,Logout}