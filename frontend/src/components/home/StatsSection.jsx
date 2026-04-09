import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaQuoteLeft } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";

const STATS = [
  {
    value: 20,
    suffix: "+",
    label: "Years of Legacy",
    desc: "Established in 2005, serving families across generations with unwavering trust.",
  },
  {
    value: 10,
    suffix: "k+",
    label: "Happy Patients",
    desc: "Successfully performed over 10,000 surgical procedures with precision.",
  },
  {
    value: 4.9,
    suffix: "",
    decimals: 1,
    label: "Average Rating",
    desc: "Consistently rated as the best eye clinic in the region for surgical outcomes.",
  },
];

const TESTIMONIALS = [
  {
    text: '"The cataract surgery was completely painless. Dr. Sharma\'s calm demeanor made all my anxiety disappear. Highly recommended!"',
    name: "Mrs. Anita Verma",
    role: "Post-op Cataract Patient",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  },
  {
    text: '"Professional staff and world-class equipment. They detected my glaucoma early and saved my vision."',
    name: "Rajesh Khanna",
    role: "General Eye Care Patient",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
];

export default function StatsSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      style={{
        background: "#0B1437",
        padding: "88px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "30%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-xl">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="stats-grid"
        >
          {/* LEFT — Stats */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 800,
                color: "white",
                marginBottom: "48px",
                lineHeight: 1.2,
              }}
            >
              Pioneering Vision Care
              <br />
              for Two Decades
            </motion.h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "36px" }}
            >
              {STATS.map(({ value, suffix, decimals = 0, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  {/* Value */}
                  <div
                    style={{
                      minWidth: "80px",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: 800,
                        fontSize: "42px",
                        color: "white",
                        lineHeight: 1,
                      }}
                    >
                      {inView ? (
                        <CountUp
                          end={value}
                          duration={2.2}
                          decimals={decimals}
                          delay={0.2 + i * 0.1}
                        />
                      ) : (
                        "0"
                      )}
                    </span>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "24px",
                        color: "#60a5fa",
                      }}
                    >
                      {suffix}
                    </span>
                  </div>
                  {/* Text */}
                  <div style={{ paddingTop: "4px" }}>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "white",
                        margin: "0 0 4px",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#94a3b8",
                        margin: 0,
                        lineHeight: 1.55,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Testimonials */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {TESTIMONIALS.map(({ text, name, role, avatar }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.15 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "24px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <FaQuoteLeft
                  style={{
                    color: "#2563EB",
                    fontSize: "20px",
                    marginBottom: "14px",
                    opacity: 0.8,
                  }}
                />
                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                  {text}
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <img
                    src={avatar}
                    alt={name}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid rgba(37,99,235,0.4)",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "white",
                        margin: 0,
                      }}
                    >
                      {name}
                    </p>
                    <p
                      style={{ fontSize: "12px", color: "#60a5fa", margin: 0 }}
                    >
                      {role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .stats-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
