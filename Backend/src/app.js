import express from "express"
import cors from "cors"
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/authRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js"
import patientRoutes from "./routes/patientRoutes123.js";

const app = express();

// security
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))


// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests, please try again later."
})
app.use("/api", limiter);

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health checker
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is running" })
})

//route
app.use("/api/auth", authRoutes)

// appointment route
app.use("/api/appointments", appointmentRoutes)

// patient routes
app.use("/api/patients", patientRoutes )

export default app;