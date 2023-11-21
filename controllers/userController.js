import userModel from "../models/userModel.js"
import asyncHandler from 'express-async-handler'
import verify from "../utils/GoogleOuth.js";
import { JWT_SECRET } from "../config/constants.js";

import jwt from "jsonwebtoken";
export const signInWithGoogle = asyncHandler( async (req,res) =>{
    const tokenId = req.body.token;
    console.log(tokenId);
    const userdata = await verify(tokenId);
    let user = null;
    user = await userModel.findOne({email: userdata.email});
    if(!user){
        const newuser = new userModel({name: userdata.name, email: userdata.email,picture:userdata.picture});
        await newuser.save();
        user = newuser;
    } 
    
    const token = jwt.sign(
      {email: user.email, id: user._id,name:user.name},
      JWT_SECRET,
      {expiresIn: "24h"}
    );
    res.status(200).json({
        token: token,
        user:user
})});


export const getUserDetails = asyncHandler(async (req, res) => {
    const user = req.user;
    const userData = await userModel.findById(user.id);

    res.status(200).json({
        user: userData,
        message: "OK"
    })
})