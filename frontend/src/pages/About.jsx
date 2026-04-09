import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiArrowRight, HiStar, HiCheckCircle } from "react-icons/hi";
import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "../hooks/useInView";
import {
  IMAGES,
  JOURNEY,
  SPECIALIZATIONS,
  TESTIMONIALS,
} from "../utils/constants";

const PAGE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35 },
};

const CREDENTIALS = [
  "MBBS — Grant Medical College, Mumbai",
  "MS Ophthalmology — AIIMS, New Delhi",
  "Fellowship — Vitreo-Retina, Sankara Nethralaya",
  "Member — All India Ophthalmological Society",
];

const CLINIC_STATS = [
  { value: 15, suffix: "k+", label: "Happy Patients" },
  { value: 50, suffix: "k+", label: "Avg. Reviews" },
  { value: 24, suffix: "/7", label: "Emergency Care" },
  { value: 12, suffix: "+", label: "Specialists" },
];

/* ── Timeline Item ──────────────────── */
function TimelineItem({ year, title, desc, index, last }) {
  const [ref, inView] = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative flex gap-6"
    >
      {/* Line */}
      <div className="flex flex-col items-center">
        <div className="timeline-dot mt-1" />
        {!last && <div className="flex-1 w-0.5 bg-primary-100 mt-2" />}
      </div>
      {/* Content */}
      <div className="pb-12">
        <span
          className="inline-block bg-primary-600 text-white text-xs font-bold
                         px-3 py-1 rounded-full mb-2"
        >
          {year}
        </span>
        <h3 className="font-bold text-xl text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

/* ── Testimonial Card ───────────────── */
function TestimonialCard({ name, role, avatar, text, rating, index }) {
  const [ref, inView] = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="card p-6"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <HiStar key={i} className="text-amber-400" size={14} />
        ))}
      </div>
      <p className="text-slate-600 text-sm leading-relaxed mb-5">{text}</p>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-100"
        />
        <div>
          <p className="font-bold text-slate-900 text-sm">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [heroRef, heroInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const navigate = useNavigate();

  return (
    <motion.div {...PAGE}>
      {/* ── Doctor Hero ─────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative pt-20 overflow-hidden bg-gradient-to-br from-slate-50 to-primary-50"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-[120px]" />
        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh] py-20">
            {/* Left — text */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                className="section-label"
              >
                Chief Ophthalmologist
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="font-display text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6"
              >
                Dr. Sharma, <br />
                <span className="italic text-primary-600">
                  MS Ophthalmology
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.25 }}
                className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg"
              >
                Dedicated to combining clinical excellence with genuine
                compassion, Dr. Sharma has transformed the vision of thousands
                of patients using cutting-edge technology and a patient-first
                philosophy.
              </motion.p>

              {/* Credentials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 }}
                className="space-y-2 mb-10"
              >
                {CREDENTIALS.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <HiCheckCircle
                      className="text-primary-600 flex-shrink-0 mt-0.5"
                      size={16}
                    />
                    <span className="text-sm text-slate-600">{c}</span>
                  </div>
                ))}
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.45 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => navigate("/appointment")}
                  className="btn-primary"
                >
                  Book Appointment <HiArrowRight />
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="btn-outline"
                >
                  Get in Touch
                </button>
              </motion.div>

              {/* Quick contact pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.55 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                {[
                  { Icon: MdEmail, label: "dr@visionflow.in" },
                  { Icon: MdPhone, label: "+91 11 7345 4789" },
                  { Icon: MdWhatsapp, label: "WhatsApp" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-xs font-medium text-slate-600
                               bg-white border border-slate-200 rounded-full px-3 py-1.5"
                  >
                    <Icon className="text-primary-600" size={14} /> {label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — doctor image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, x: 40 }}
              animate={heroInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-primary-600 rounded-[3rem] translate-x-5 translate-y-5" />
                <img
                  src={IMAGES.doctorProfile}
                  alt="Dr. Sharma"
                  className="relative z-10 w-full rounded-[3rem] object-cover object-top
                             h-[480px] shadow-2xl animate-float"
                />
                {/* Badge overlay */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20
                                glass rounded-2xl px-6 py-3 shadow-xl text-center whitespace-nowrap"
                >
                  <p className="font-bold text-slate-900 text-sm">Dr. Sharma</p>
                  <p className="text-xs text-slate-500">
                    20+ Years · MS Ophthalmology
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Clinic Stats ────────────────────────────── */}
      <section ref={statsRef} className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {CLINIC_STATS.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-5xl text-slate-900 mb-2 flex items-baseline justify-center gap-0.5">
                  {statsInView ? (
                    <CountUp end={value} duration={2.2} delay={0.3 + i * 0.1} />
                  ) : (
                    "0"
                  )}
                  <span className="text-primary-600 text-3xl">{suffix}</span>
                </div>
                <p className="text-slate-500 text-sm font-medium">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ─────────────────────────── */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — heading + story */}
            <div>
              <span className="section-label">Our Journey</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our Journey of <br />
                <span className="gradient-text italic">Precision</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10">
                From a small consultation room to a multi-specialty eye care
                centre — every milestone reflects our commitment to providing
                world-class ophthalmology care to every patient who walks
                through our doors.
              </p>
              <img
                src={IMAGES.clinic}
                alt="VisionFlow Clinic"
                className="w-full rounded-3xl object-cover h-64 shadow-xl"
              />
            </div>

            {/* Right — timeline */}
            <div className="pt-4">
              {JOURNEY.map((item, i) => (
                <TimelineItem
                  key={item.year}
                  {...item}
                  index={i}
                  last={i === JOURNEY.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinical Specializations ─────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-label justify-center">Expertise</span>
            <h2 className="font-display text-4xl font-bold text-slate-900">
              Clinical{" "}
              <span className="gradient-text italic">Specializations</span>
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto text-sm">
              Providing specialised, compassionate eye care services using
              cutting-edge medical technology for optimal patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SPECIALIZATIONS.map(({ icon, title, items }, i) => {
              const [ref, inView] = useInView();
              return (
                <motion.div
                  key={title}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="card p-7"
                >
                  <div
                    className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center
                                  justify-center text-xl mb-5"
                  >
                    {icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-500"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Vision Behind Story ──────────────────────── */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src={IMAGES.clinic}
                alt="Clinic interior"
                className="w-full rounded-3xl object-cover h-96 shadow-2xl"
              />
              <div
                className="absolute -bottom-6 -right-6 bg-primary-600 text-white
                              rounded-2xl p-5 shadow-xl max-w-xs"
              >
                <p className="text-sm font-semibold leading-relaxed italic">
                  "Our goal has always been clear: make world-class eye care
                  accessible, affordable and deeply human."
                </p>
                <p className="text-primary-200 text-xs mt-2">
                  — Dr. Sharma, Founder
                </p>
              </div>
            </motion.div>

            <div>
              <span className="section-label">Our Philosophy</span>
              <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">
                The Vision Behind <br />
                <span className="gradient-text italic">Our Story</span>
              </h2>
              <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
                <p>
                  VisionFlow was founded on a simple but powerful belief: every
                  person deserves clear vision and the confidence that comes
                  with it. Dr. Sharma began his journey witnessing preventable
                  blindness in communities with limited access to quality eye
                  care.
                </p>
                <p>
                  Every decision at VisionFlow — from the equipment we invest in
                  to the way our staff greets patients — is guided by our core
                  philosophy of transparency, precision and empathy. We believe
                  that the finest medical technology is only as powerful as the
                  human care surrounding it.
                </p>
              </div>
              <button
                onClick={() => navigate("/appointment")}
                className="btn-primary mt-8"
              >
                Start Your Journey <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-label justify-center">
              Patient Stories
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900">
              Voices of <span className="gradient-text italic">Clarity</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              Real stories from patients who trusted us with their vision.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
