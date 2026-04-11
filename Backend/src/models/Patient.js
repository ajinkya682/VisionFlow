import mongoose from "mongoose";

const eyeSchema = new mongoose.Schema({
  sphere: String,
  cylinder: String,
  axis: String,
  VA: String,
}, { _id: false });

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  altPhone: { type: String, default: '' },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  address: { type: String, default: '' },
  referredBy: { type: String, default: '' },

  eyeData: {
    rightEye: {
      sphere: String, cylinder: String, axis: String, VA: String
    },
    leftEye: {
      sphere: String, cylinder: String, axis: String, VA: String
    },
    nearVision: {
      sphere: String, cylinder: String, axis: String, VA: String
    }
  },

  diagnosis: [{ type: String }],

  IOP: {
    right: String,
    left: String,
  },

  prescription: { type: mongoose.Schema.Types.Mixed, default: {} },
  attachments: [{ type: String }], // ImageKit URLs

  status: {
    type: String,
    enum: ['Active', 'Follow-up', 'Surgery', 'Inactive'],
    default: 'Active'
  },

  nextReviewDate: { type: Date },

}, { timestamps: true });

const patientModel = mongoose.model('Patient', patientSchema);

export default patientModel