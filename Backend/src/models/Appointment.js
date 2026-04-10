import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  symptoms: [{ type: String }],
  problemDescription: { type: String, default: '' },
  isUrgent: { type: Boolean, default: false },
  preferredDate: { type: Date, required: true },
  timeSlot: { type: String, required: true },

  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
    default: 'Pending'
  },

  whatsappConsent: { type: Boolean, default: false },
  assignedDoctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  notes: { type: String, default: '' },

}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);