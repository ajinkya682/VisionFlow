import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiArrowRight,
  HiCheckCircle,
} from "react-icons/hi";
import { MdWhatsapp, MdAccessTime, MdCalendarToday } from "react-icons/md";
import { useInView } from "../hooks/useInView";

const PAGE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35 },
};

const CONTACT_ITEMS = [
  {
    icon: HiLocationMarker,
    label: "Clinic Address",
    value: "12, Raj Bhavan Road, Worli, Mumbai — 400 018",
    sub: "Ground Floor, Heritage Medical Tower",
    color: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: HiPhone,
    label: "Direct Line",
    value: "+91 11 7345 4789",
    sub: "Mon – Sat, 9 AM to 8 PM",
    color: "bg-green-50",
    iconColor: "text-green-600",
    href: "tel:+911173454789",
  },
  {
    icon: MdWhatsapp,
    label: "WhatsApp",
    value: "+91 98765 43210",
    sub: "Quick response within 30 mins",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    href: "https://wa.me/919876543210",
  },
  {
    icon: HiMail,
    label: "Email Us",
    value: "care@visionflow.in",
    sub: "We respond within 4 hours",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "mailto:care@visionflow.in",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
  { day: "Saturday", time: "10:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Emergency Only" },
];

const WHAT_TO_BRING = [
  "Previous eye prescriptions or reports",
  "Government ID for registration",
  "Insurance card (if applicable)",
  "List of current medications",
];

export default function Contact() {
  const [heroRef, heroInView] = useInView({ threshold: 0.2 });
  const [formRef, formInView] = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <motion.div {...PAGE}>
      {/* ── Hero ──────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-slate-50 to-primary-50 pt-20 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/30 rounded-full blur-[100px]" />
        <div className="container-xl relative z-10 py-24 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            className="section-label justify-center"
          >
            We'd Love to Hear From You
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-slate-900"
          >
            Get in <span className="italic text-primary-600">Touch.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-slate-500 mt-4 text-lg max-w-lg mx-auto"
          >
            Experience personalised eye care — reach out for an appointment,
            consultation, or any queries at all.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Info Cards ────────────────────── */}
      <section className="bg-white py-16">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT_ITEMS.map(
              (
                { icon: Icon, label, value, sub, color, iconColor, href },
                i,
              ) => {
                const [ref, inView] = useInView();
                const Wrap = href ? "a" : "div";
                return (
                  <motion.div
                    key={label}
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: i * 0.1 }}
                  >
                    <Wrap
                      href={href}
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="card p-6 flex flex-col gap-4 h-full hover:border-primary-200 block"
                    >
                      <div
                        className={`w-11 h-11 ${color} rounded-2xl flex items-center justify-center`}
                      >
                        <Icon className={`${iconColor}`} size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                          {label}
                        </p>
                        <p className="font-bold text-slate-900 text-sm">
                          {value}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                      </div>
                    </Wrap>
                  </motion.div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* ── Main Content: Form + Map + Hours ─────── */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — Message form */}
            <div ref={formRef} className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 lg:p-10"
              >
                <h2 className="font-display text-3xl font-bold text-slate-900 mb-2">
                  Send a Message
                </h2>
                <p className="text-slate-400 text-sm mb-8">
                  Fill in the form and our team will respond within 4 hours.
                </p>

                {sent ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HiCheckCircle className="text-green-600" size={36} />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="btn-outline mt-6"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                          Full Name
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Rahul Sharma"
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="rahul@gmail.com"
                          className="form-input"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can we help you today?"
                        rows={5}
                        className="form-input resize-none"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center text-base py-4"
                    >
                      Submit Enquiry <HiArrowRight />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Right — Hours + Map + What to bring */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
              >
                <div className="h-52 bg-gradient-to-br from-primary-100 to-blue-100 relative">
                  {/* Simulated map */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center
                                      mx-auto mb-2 shadow-lg animate-pulse"
                      >
                        <HiLocationMarker className="text-white" size={22} />
                      </div>
                      <span className="text-xs font-bold text-primary-700 bg-white px-3 py-1 rounded-full shadow">
                        VisionFlow Eye Clinic
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-slate-900 text-sm mb-1">
                    Heritage Medical Tower, Worli
                  </p>
                  <p className="text-xs text-slate-400">
                    12, Raj Bhavan Road, Mumbai — 400 018
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary-600 font-semibold mt-3 hover:underline"
                  >
                    Open in Google Maps <HiArrowRight size={12} />
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-2 mb-5">
                  <MdAccessTime className="text-primary-600" size={20} />
                  <h3 className="font-bold text-slate-900">
                    Consultation Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {HOURS.map(({ day, time }) => (
                    <div
                      key={day}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-slate-500">{day}</span>
                      <span className="font-semibold text-slate-900">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <p className="text-xs text-red-600 font-medium">
                    Emergency line available 24/7 — +91 98765 43210
                  </p>
                </div>
              </motion.div>

              {/* What to bring */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="bg-primary-600 rounded-3xl p-6 text-white"
              >
                <div className="flex items-center gap-2 mb-5">
                  <MdCalendarToday size={18} />
                  <h3 className="font-bold">What to Bring to Your Visit</h3>
                </div>
                <ul className="space-y-3">
                  {WHAT_TO_BRING.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-primary-100"
                    >
                      <HiCheckCircle
                        className="text-white flex-shrink-0 mt-0.5"
                        size={14}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-xl
                               px-4 py-3 text-sm font-semibold text-white transition-all duration-200"
                  >
                    <MdWhatsapp size={18} /> Chat on WhatsApp
                  </a>
                  <a
                    href="/appointment"
                    className="flex items-center gap-2 bg-white text-primary-700 rounded-xl
                               px-4 py-3 text-sm font-semibold hover:bg-primary-50
                               transition-all duration-200"
                  >
                    <MdCalendarToday size={16} /> Book Appointment
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
