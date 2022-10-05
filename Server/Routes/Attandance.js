import express from "express";
import {
  AddAttandance,
  AllEntry,
  SearchByRoll,
} from "../Controllers/Attandance.js";
const router = express.Router();

router.post("/add", AddAttandance);
router.get("/All", AllEntry);
router.get("/byroll", SearchByRoll);
export default router;
