import express from "express";
import {
    createAppointment,
    getAppointmentByPhone,
    getAllAppointments,
    getAppointmentById,
    updateAppointmentStatus,
    deleteAppointment,
} from "../controllers/appointmentController.js";
import protect from "../middleware/auth.js";


const router = express.Router();

// Public routes
router.post("/", createAppointment);
router.get("/phone/:phone", getAppointmentByPhone);

// Protected Routes (Admin only)
router.get("/", protect, getAllAppointments);
router.get("/:id", protect, getAppointmentById);
router.patch("/:id", protect, updateAppointmentStatus);
router.delete("/:id", protect, deleteAppointment);

export default router;

