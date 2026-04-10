import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['superadmin', 'admin', 'doctor'], default: 'admin' },
  avatar: { type: String, default: '' }, // ImageKit URL
}, { timestamps: true });

const adminModel = mongoose.model('Admin', adminSchema);

export default adminModel