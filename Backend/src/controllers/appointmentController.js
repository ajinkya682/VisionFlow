import appointModel from "../models/Appointment.js";


// Public - Patient Appointment
export const createAppointment = async (req, res) => {
  try {
    const {
      patientName,
      phone,
      age,
      gender,
      symptoms,
      problemDescription,
      isUrgent,
      preferredDate,
      timeSlot,
      whatsappConsent,
    } = req.body;

    // 
    const existing = await appointModel.findOne({
      preferredDate,
      timeSlot,
      status: { $in: ["Pending", "Confirmed"] },
    });

    if (existing) {
      return res.status(400).json({
        message: "This time slot is already booked, please choose another",
      });
    }

    const appointment = await appointModel.create({
      patientName,
      phone,
      age,
      gender,
      symptoms,
      problemDescription,
      isUrgent: isUrgent || false,
      preferredDate,
      timeSlot,
      whatsappConsent: whatsappConsent || false,
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointment,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  PUBLIC — Patients can check their appointments via phone.
export const getAppointmentByPhone = async (req, res) => {
  try {
    const { phone } = req.params;

    const appointments = await appointModel.find({ phone })
      .sort({ createdAt: -1 });

    if (!appointments.length) {
      return res.status(404).json({ message: "No appointments found" });
    }

    res.status(200).json({ success: true, appointments });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  ADMIN — Check out the appointments. (filter also)
export const getAllAppointments = async (req, res) => {
  try {
    const { status, date } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (date) filter.preferredDate = new Date(date);

    const appointments = await appointModel.find(filter)
      .populate("assignedDoctor", "name email")
      .sort({ isUrgent: -1, createdAt: -1 }); // urgent pehle

    res.status(200).json({ success: true, appointments });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  ADMIN — Single appointment 
export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await appointModel.findById(req.params.id)
      .populate("assignedDoctor", "name email");

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ success: true, appointment });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  ADMIN — Update the status (Confirm/Cancel/Complete)
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { status, assignedDoctor, notes } = req.body;

    const appointment = await appointModel.findByIdAndUpdate(
      req.params.id,
      { status, assignedDoctor, notes },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({
      success: true,
      message: `Appointment ${status}`,
      appointment,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  ADMIN — Appointment delete 
export const deleteAppointment = async (req, res) => {
  try {
    const appointment = await appointModel.findByIdAndDelete(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ success: true, message: "Appointment deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};