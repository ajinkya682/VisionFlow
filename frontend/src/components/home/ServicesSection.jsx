import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "../../hooks/useInView";

const SERVICES = [
  {
    icon: "👁️",
    title: "Cataract Surgery",
    desc: "Advanced micro-incision techniques for rapid recovery and crystal clear vision restoration using premium lenses.",
    color: "#EFF6FF",
    iconBg: "#DBEAFE",
  },
  {
    icon: "✦",
    title: "LASIK Correction",
    desc: "Say goodbye to glasses with our blade-free laser technology. Personalised treatment plans for perfect precision.",
    color: "#F0FDF4",
    iconBg: "#DCFCE7",
  },
  {
    icon: "🩺",
    title: "General Checkup",
    desc: "Comprehensive diagnostic screening for glaucoma, retina health, and routine refractive error management.",
    color: "#FFFBEB",
    iconBg: "#FEF3C7",
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  return (
    <section ref={ref} style={{ background: "white", padding: "88px 0" }}>
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: "56px" }}
        >
          <h2
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 800,
              color: "#0f172a",
              marginBottom: "0",
            }}
          >
            Our Specialized Services
          </h2>
          <div
            style={{
              width: "48px",
              height: "4px",
              background: "#2563EB",
              borderRadius: "2px",
              marginTop: "12px",
            }}
          />
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {SERVICES.map(({ icon, title, desc, color, iconBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              onClick={() => navigate("/appointment")}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "32px",
                border: "1px solid #f1f5f9",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
            >
              {/* Top line accent */}
              <div
                style={{
                  width: "100%",
                  height: "3px",
                  borderRadius: "2px",
                  background: "linear-gradient(90deg, #2563EB, #60a5fa)",
                  marginBottom: "28px",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: iconBg,
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  marginBottom: "20px",
                }}
              >
                {icon}
              </div>

              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#0f172a",
                  marginBottom: "10px",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
              >
                {desc}
              </p>

              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#2563EB",
                  fontWeight: 600,
                  fontSize: "14px",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
