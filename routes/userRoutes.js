import { Router } from "express";
import {  getUserDetails, signInWithGoogle } from "../controllers/userController.js";

const router = new Router();

router.post('/signinwithgoogle',signInWithGoogle);
router.get('/getuser',getUserDetails)

export default router;