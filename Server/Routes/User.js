import express from "express";
import { GetAllResgister, Login, Resgister } from "../Controllers/user.js";
import multer from "multer";
const router = express.Router();

// router.post("/register", Resgister);
router.post("/register", Resgister);
router.post("/login", Login);
router.get("/register", GetAllResgister);

export default router;
