import emailModel from "../models/emailModel.js";
import asyncHandler from "express-async-handler";
import { APIError, BadRequestError, NotFoundError } from "../utils/appError.js";
import userModel from "../models/userModel.js";
import {sendMail as sendMailViaPostMark} from '../utils/postmarkapp.js'

export const getMails = asyncHandler(async (req,res) =>{
    const user = req.user;
    const userData = await userModel.findOne({ email: user.email }).populate('sentMails');
    console.log(userData);
    console.log(userData.sentMails);
    return res.status(200).json({
        message: "OK",
        sentMails: userData.sentMails
    })
})
export const getRecievedMails = asyncHandler(async (req,res) =>{
    const user = req.user;
    const emails = await emailModel.find({to: user.email});

    return res.status(200).json({
        message: "OK",
        data: emails
    })
})

export const sendMail = asyncHandler(async(req, res) =>{
    const user = req.user;
    const {data} = req.body;
    console.log(user,data)
    let response = null;
    try{
    response = await sendMailViaPostMark(data.To,data.TemplateAlias,data.TemplateModel);
    }catch(e){
        throw new APIError("Couldn't send mail",500,e);
    }
    const newmessage = new emailModel({
        user: user.id,
        to: data.To,
        templateModel: data.TemplateModel,
        templateAlias: data.TemplateAlias,
        messageId: response.MessageID,
        submittedAt: response.SubmittedAt
    })
    await newmessage.save();

    await userModel.findOneAndUpdate({
        _id: user.id,
    },{"$push":{sentMails: newmessage}})


    res.status(200).json({
        message: "OK"
    })

})
