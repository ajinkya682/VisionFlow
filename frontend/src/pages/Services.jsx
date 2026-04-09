import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { ALL_SERVICES, FAQS, IMAGES } from "../utils/constants";

const PAGE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35 },
};

/* ── FAQ accordion item ──────────────── */
function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08 }}
      className="faq-item"
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center justify-between p-5 text-left font-semibold
                    text-slate-800 hover:text-primary-600 transition-colors duration-200
                    ${open ? "text-primary-600" : ""}`}
      >
        {q}
        {open ? (
          <HiChevronUp className="flex-shrink-0 text-primary-500" size={20} />
        ) : (
          <HiChevronDown className="flex-shrink-0 text-slate-400" size={20} />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-slate-500 text-sm leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Service card ────────────────────── */
function ServiceCard({ icon, tag, title, desc, price, index }) {
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="card p-7 group cursor-pointer"
      onClick={() => navigate("/appointment")}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center
                        text-xl group-hover:bg-primary-100 transition-colors duration-300"
        >
          {icon}
        </div>
        <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Starting from{" "}
          <span className="font-bold text-slate-700">{price}</span>
        </span>
        <button
          className="inline-flex items-center gap-1 text-primary-600 font-semibold text-xs
                           group-hover:gap-2 transition-all duration-300"
        >
          Book Now <HiArrowRight size={12} />
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const navigate = useNavigate();

  return (
    <motion.div {...PAGE}>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative bg-navy min-h-[60vh] flex items-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={IMAGES.eyeExam}
            alt="Eye clinic"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
        </div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-700/20 rounded-full blur-[100px]" />

        <div className="container-xl relative z-10 py-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            className="section-label text-primary-400"
          >
            Clinical Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-white max-w-2xl leading-tight"
          >
            Clinical Excellence <br />
            <span className="italic text-primary-400">Perfected.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-slate-400 mt-6 text-lg max-w-xl"
          >
            We offer a comprehensive range of advanced ophthalmic treatments,
            supported by state-of-the-art technology and our unwavering
            professionalism to restore your vision.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <span className="section-label justify-center">What We Offer</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900">
              Our Specialised{" "}
              <span className="gradient-text italic">Treatments</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-primary-600 py-16">
        <div className="container-xl text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
            Not Sure About Your Symptoms?
          </h2>
          <p className="text-primary-100 mb-8 max-w-lg mx-auto">
            Use our AI-powered symptom checker or call us — our clinical team
            will guide you to the right specialist within 30 minutes.
          </p>
          <button
            onClick={() => navigate("/appointment")}
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold
                       px-8 py-4 rounded-full hover:bg-primary-50 transition-all duration-300
                       shadow-xl hover:-translate-y-0.5"
          >
            Try Symptom Checker <HiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl max-w-3xl">
          <div className="text-center mb-14">
            <span className="section-label justify-center">
              Common Questions
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900">
              Frequently Asked{" "}
              <span className="gradient-text italic">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <FAQItem key={f.q} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
