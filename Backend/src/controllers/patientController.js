import patientModel from "../models/Patient.js"

// ✅ Create new patient
export const createPatient = async (req, res) => {
  try {
    const {
      name,
      phone,
      altPhone,
      age,
      gender,
      address,
      referredBy,
      eyeData,
      diagnosis,
      IOP,
      prescription,
      status,
      nextReviewDate,
    } = req.body;

    // Patient with this phone number already exists
    const existing = await patientModel.findOne({ phone });
    if (existing) {
      return res.status(400).json({
        message: "Patient with this phone number already exists",
      });
    }

    const patient = await patientModel.create({
      name,
      phone,
      altPhone,
      age,
      gender,
      address,
      referredBy,
      eyeData,
      diagnosis,
      IOP,
      prescription,
      status: status || "Active",
      nextReviewDate,
    });

    res.status(201).json({
      success: true,
      message: "Patient created successfully",
      patient,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// See all patient (search + filter also)
export const getAllPatients = async (req, res) => {
  try {
    const { status, search, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (status) filter.status = status;

    // Search by name or phone
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ];
    }

    const total = await patientModel.countDocuments(filter);

    const patients = await patientModel.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      patients,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Look single Patient
export const getPatientById = async (req, res) => {
  try {
    const patient = await patientModel.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({ success: true, patient });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Patient 
export const updatePatient = async (req, res) => {
  try {
    const patient = await patientModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({
      success: true,
      message: "Patient updated successfully",
      patient,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// By deleting patients
export const deletePatient = async (req, res) => {
  try {
    const patient = await patientModel.findByIdAndDelete(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({
      success: true,
      message: "Patient deleted successfully",
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Check the patient's appointment history
export const getPatientAppointments = async (req, res) => {
  try {
    const patient = await patientModel.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const appointments = await (await import("../models/Appointment.js"))
      .default.find({ phone: patient.phone })
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, appointments });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};