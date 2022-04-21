import express from "express";
const router = express.Router();

import {adminSignin, adminSignup} from "../controllers/admin.js";

router.post("/adminsignin", adminSignin);
router.post("/adminsignup", adminSignup);

export default router;