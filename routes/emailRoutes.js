import { Router } from "express";
import { getMails, getRecievedMails, sendMail } from "../controllers/emailController.js";
import auth from "../middlewares/auth.js";

const router = new Router();
router.post('/sendmail',auth,sendMail);
router.get('/getmails',auth,getMails)
router.get('/getrecievedmails',auth,getRecievedMails)
export default router;