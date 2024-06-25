import express from "express";
import { GetAllRegister, Login, Register } from "../Controllers/user.js";

import multer from "multer";
const router = express.Router();

// router.post("/register", Resgister);
router.post("/register", Register);
router.post("/login", Login);

export default router;
