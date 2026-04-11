import express from "express";
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  getPatientAppointments,
} from "../controllers/patientController.js";
import protect from "../middleware/auth.js";

const router = express.Router();

// All routes are protected — only admins can access them
router.use(protect);

router.post("/", createPatient);
router.get("/", getAllPatients);
router.get("/:id", getPatientById);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);
router.get("/:id/appointments", getPatientAppointments);

export default router;