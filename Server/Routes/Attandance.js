import express from "express";
import { AddAttandance, AllEntry } from "../Controllers/Attandance.js";
const router = express.Router();

router.post("/add", AddAttandance);
router.post("/All", AllEntry);
export default router;
