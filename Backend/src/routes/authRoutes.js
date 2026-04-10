import express from "express";
import { register } from "../controllers/auth.controller.js";
import protect from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);


export default router;