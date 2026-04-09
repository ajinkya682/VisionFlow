import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiStar, HiPhone } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

const DOCTOR_IMG =
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=85&fit=crop&crop=top";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f8faff",
        display: "flex",
        alignItems: "center",
        paddingTop: "68px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle bg blob */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(219,234,254,0.8) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-xl"
        style={{ width: "100%", padding: "60px 16px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* LEFT — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#EFF6FF",
                border: "1px solid #BFDBFE",
                borderRadius: "100px",
                padding: "6px 14px",
                marginBottom: "28px",
              }}
            >
              <MdVerified style={{ color: "#2563EB", fontSize: "14px" }} />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1d4ed8",
                  letterSpacing: "0.05em",
                }}
              >
                TRUSTED SINCE 2005
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "clamp(40px, 5vw, 58px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#0f172a",
                marginBottom: "20px",
              }}
            >
              Clear Vision,
              <br />
              <span style={{ color: "#2563EB" }}>Caring Hands</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: "16px",
                color: "#64748b",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "460px",
              }}
            >
              With over 20+ years of clinical excellence, Dr. Sharma Eye Clinic
              provides world-class ophthalmic care using the latest surgical
              precision and empathetic patient support.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginBottom: "48px",
              }}
            >
              <button
                onClick={() => navigate("/appointment")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#2563EB",
                  color: "white",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1d4ed8";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Book Appointment →
              </button>
              <a
                href="tel:+919876543210"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "white",
                  color: "#0f172a",
                  border: "2px solid #e2e8f0",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "none",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2563EB";
                  e.currentTarget.style.color = "#2563EB";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.color = "#0f172a";
                }}
              >
                <HiPhone /> Call Now ↓
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              style={{ display: "flex", gap: "36px", alignItems: "center" }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    marginBottom: "4px",
                  }}
                >
                  <HiStar style={{ color: "#f59e0b", fontSize: "16px" }} />
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "22px",
                      color: "#0f172a",
                    }}
                  >
                    4.9
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
                  Patient Rating
                </p>
              </div>
              <div
                style={{ width: "1px", height: "40px", background: "#e2e8f0" }}
              />
              <div>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: "22px",
                    color: "#0f172a",
                    display: "block",
                  }}
                >
                  10,000+
                </span>
                <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
                  Successful Surgeries
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{ position: "relative", width: "100%", maxWidth: "440px" }}
            >
              {/* Background card */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, #DBEAFE, #EFF6FF)",
                  borderRadius: "24px",
                  transform: "rotate(2deg) scale(0.98)",
                }}
              />
              {/* Doctor photo */}
              <img
                src={DOCTOR_IMG}
                alt="Dr. Sharma — Ophthalmologist"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  height: "460px",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
              />

              {/* Floating availability badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                style={{
                  position: "absolute",
                  top: "28px",
                  left: "-24px",
                  zIndex: 10,
                  background: "white",
                  borderRadius: "16px",
                  padding: "12px 16px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    animation: "pulse 2s infinite",
                  }}
                />
                <div>
                  <p style={{ fontSize: "11px", color: "#94a3b8", margin: 0 }}>
                    Available Today
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    3 Slots Left
                  </p>
                </div>
              </motion.div>

              {/* Floating rating badge */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                style={{
                  position: "absolute",
                  bottom: "32px",
                  right: "-20px",
                  zIndex: 10,
                  background: "#2563EB",
                  borderRadius: "16px",
                  padding: "12px 16px",
                  boxShadow: "0 8px 30px rgba(37,99,235,0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <HiStar style={{ color: "#fbbf24", fontSize: "22px" }} />
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.7)",
                      margin: 0,
                    }}
                  >
                    Patient Rating
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 800,
                      color: "white",
                      margin: 0,
                    }}
                  >
                    4.9 / 5.0
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; } 50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
