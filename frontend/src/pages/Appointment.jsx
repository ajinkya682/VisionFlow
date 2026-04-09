import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiArrowRight,
  HiArrowLeft,
  HiCheckCircle,
  HiStar,
} from "react-icons/hi";
import { IMAGES } from "../utils/constants";

/* ── Step data ─────────────────────────────────── */
const SYMPTOMS = [
  "Blurred Vision",
  "Eye Strain",
  "Watery Eyes",
  "Light Sensitivity",
  "Frequent Headaches",
  "Floaters",
  "Redness / Irritation",
  "Double Vision",
];

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

const DAYS = [
  { day: "Mon", date: "14" },
  { day: "Tue", date: "15" },
  { day: "Wed", date: "16" },
  { day: "Thu", date: "17" },
  { day: "Fri", date: "18" },
];

const STEPS = [
  { num: 1, label: "Personal Details" },
  { num: 2, label: "Symptoms" },
  { num: 3, label: "Schedule" },
  { num: 4, label: "Confirm" },
];

/* ── Page wrapper animation ────────────────────── */
const PAGE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35 },
};

const SLIDE = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
  transition: { duration: 0.35 },
};

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const [selectedDay, setSelectedDay] = useState("14");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    visitType: "",
  });

  const toggleSymptom = (s) =>
    setSymptoms((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const handleField = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const next = () => setStep((p) => Math.min(p + 1, 4));
  const prev = () => setStep((p) => Math.max(p - 1, 1));

  if (done) return <SuccessScreen />;

  return (
    <motion.div {...PAGE} className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 py-10">
        <div className="container-xl text-center">
          <span className="section-label justify-center">Easy Booking</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-900">
            Schedule Your <span className="gradient-text italic">Visit</span>
          </h1>
          <p className="text-slate-500 mt-3 text-sm">
            Complete four simple steps to book your appointment with Dr. Sharma.
          </p>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {STEPS.map(({ num, label }) => (
              <div key={num} className="flex items-center gap-2">
                <div
                  className={`step-circle ${
                    step === num
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-500/40"
                      : step > num
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {step > num ? <HiCheckCircle size={20} /> : num}
                </div>
                <span
                  className={`text-xs font-medium hidden sm:inline ${
                    step === num ? "text-primary-600" : "text-slate-400"
                  }`}
                >
                  {label}
                </span>
                {num < 4 && (
                  <div
                    className={`w-12 h-0.5 rounded ${step > num ? "bg-primary-500" : "bg-slate-200"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container-xl py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 lg:p-12">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="s1" {...SLIDE}>
                    <h2 className="font-bold text-2xl text-slate-900 mb-7">
                      01. Personal Details
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      {[
                        {
                          name: "name",
                          label: "Full Name",
                          placeholder: "Rahul Sharma",
                        },
                        {
                          name: "email",
                          label: "Email",
                          placeholder: "rahul@gmail.com",
                        },
                        {
                          name: "phone",
                          label: "Phone Number",
                          placeholder: "+91 98765 43210",
                        },
                        { name: "age", label: "Age", placeholder: "32" },
                      ].map((f) => (
                        <div key={f.name}>
                          <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                            {f.label}
                          </label>
                          <input
                            name={f.name}
                            value={form[f.name]}
                            onChange={handleField}
                            placeholder={f.placeholder}
                            className="form-input"
                          />
                        </div>
                      ))}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                          Visit Type
                        </label>
                        <select
                          name="visitType"
                          value={form.visitType}
                          onChange={handleField}
                          className="form-input"
                        >
                          <option value="">Select consultation type…</option>
                          <option>Routine Eye Exam</option>
                          <option>Cataract Consultation</option>
                          <option>LASIK Evaluation</option>
                          <option>Paediatric Eye Care</option>
                          <option>Glaucoma Screening</option>
                          <option>Emergency / Urgent</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" {...SLIDE}>
                    <h2 className="font-bold text-2xl text-slate-900 mb-2">
                      02. Symptoms Checklist
                    </h2>
                    <p className="text-slate-400 text-sm mb-7">
                      Select all symptoms you are currently experiencing.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {SYMPTOMS.map((s) => (
                        <button
                          key={s}
                          onClick={() => toggleSymptom(s)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm
                            font-medium transition-all duration-200 text-left
                            ${
                              symptoms.includes(s)
                                ? "bg-primary-50 border-primary-500 text-primary-700"
                                : "bg-slate-50 border-slate-200 text-slate-600 hover:border-primary-300"
                            }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center
                              justify-center transition-colors duration-200
                              ${
                                symptoms.includes(s)
                                  ? "border-primary-600 bg-primary-600"
                                  : "border-slate-300"
                              }`}
                          >
                            {symptoms.includes(s) && (
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            )}
                          </div>
                          {s}
                        </button>
                      ))}
                    </div>
                    {symptoms.length > 0 && (
                      <p className="mt-4 text-xs text-primary-600 font-medium">
                        ✓ {symptoms.length} symptom
                        {symptoms.length > 1 ? "s" : ""} selected
                      </p>
                    )}
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="s3" {...SLIDE}>
                    <h2 className="font-bold text-2xl text-slate-900 mb-7">
                      03. Preferred Schedule
                    </h2>

                    {/* Day selector */}
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      Select Date
                    </p>
                    <div className="flex gap-3 mb-8 flex-wrap">
                      {DAYS.map(({ day, date }) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDay(date)}
                          className={`flex flex-col items-center px-5 py-3 rounded-2xl border transition-all duration-200
                            ${
                              selectedDay === date
                                ? "bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/30"
                                : "bg-white border-slate-200 text-slate-600 hover:border-primary-300"
                            }`}
                        >
                          <span className="text-xs">{day}</span>
                          <span className="font-bold text-lg">{date}</span>
                        </button>
                      ))}
                    </div>

                    {/* Time selector */}
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      Select Time
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {TIME_SLOTS.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-2.5 rounded-xl text-sm font-medium border transition-all duration-200
                            ${
                              selectedTime === t
                                ? "bg-primary-600 text-white border-primary-600 shadow-md"
                                : "bg-white border-slate-200 text-slate-600 hover:border-primary-400"
                            }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="s4" {...SLIDE}>
                    <h2 className="font-bold text-2xl text-slate-900 mb-7">
                      04. Confirm Selection
                    </h2>
                    <div className="space-y-4 mb-8">
                      {[
                        {
                          label: "Patient",
                          value: form.name || "Not provided",
                        },
                        {
                          label: "Contact",
                          value: form.phone || "Not provided",
                        },
                        {
                          label: "Visit Type",
                          value: form.visitType || "Not selected",
                        },
                        {
                          label: "Date & Time",
                          value: `April ${selectedDay}, 2026 — ${selectedTime || "Not selected"}`,
                        },
                        {
                          label: "Symptoms",
                          value: symptoms.length
                            ? symptoms.join(", ")
                            : "None selected",
                        },
                      ].map(({ label, value }) => (
                        <div
                          key={label}
                          className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                        >
                          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wide w-24 flex-shrink-0">
                            {label}
                          </span>
                          <span className="text-sm text-slate-700 font-medium">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-primary-50 border border-primary-100 rounded-xl text-sm text-primary-700 mb-6">
                      ℹ️ &nbsp;You will receive a confirmation SMS and email
                      within 15 minutes of booking.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    onClick={prev}
                    className="btn-outline flex items-center gap-2"
                  >
                    <HiArrowLeft /> Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button onClick={next} className="btn-primary">
                    Continue <HiArrowRight />
                  </button>
                ) : (
                  <button
                    onClick={() => setDone(true)}
                    className="btn-primary bg-green-600 hover:bg-green-700 shadow-green-500/40"
                  >
                    Complete Booking <HiCheckCircle size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right sidebar — Doctor card */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <img
                src={IMAGES.doctorProfile}
                alt="Dr. Sharma"
                className="w-full h-56 object-cover object-top"
              />
              <div className="p-6">
                <p className="text-xs text-primary-600 font-semibold uppercase tracking-wide mb-1">
                  Your Doctor
                </p>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Dr. Sharma
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  MS Ophthalmology · 20+ yrs exp.
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-amber-400" size={14} />
                  ))}
                  <span className="text-xs text-slate-500 ml-1">
                    4.9 (2,400+ reviews)
                  </span>
                </div>
                <div className="p-3 bg-green-50 rounded-xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-green-700">
                    Accepting new patients
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-primary-600 rounded-3xl p-6 text-white">
              <h4 className="font-bold mb-3">Need Help?</h4>
              <p className="text-primary-100 text-sm mb-4">
                Our team is available Mon–Sat 9 AM to 8 PM.
              </p>
              <a
                href="tel:+911173454789"
                className="flex items-center gap-2 text-white font-bold text-lg"
              >
                📞 +91 11 7345 4789
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen flex items-center justify-center bg-slate-50 pt-20"
    >
      <div className="text-center max-w-md mx-auto px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <HiCheckCircle className="text-green-600" size={48} />
        </motion.div>
        <h2 className="font-display text-4xl font-bold text-slate-900 mb-3">
          Booking Confirmed!
        </h2>
        <p className="text-slate-500 mb-8">
          Your appointment with Dr. Sharma has been successfully booked. A
          confirmation will be sent to your phone and email shortly.
        </p>
        <a href="/" className="btn-primary mx-auto">
          Back to Home <HiArrowRight />
        </a>
      </div>
    </motion.div>
  );
}
