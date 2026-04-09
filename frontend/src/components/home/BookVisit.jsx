import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiPhone } from "react-icons/hi";
import { useInView } from "../../hooks/useInView";

export default function BookVisit() {
  const [ref, inView] = useInView();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    service: "Eye Checkup",
  });
  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputStyle = {
    width: "100%",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "12px 14px",
    fontSize: "14px",
    color: "#0f172a",
    outline: "none",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    transition: "border-color 0.2s ease",
    background: "white",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "8px",
  };

  return (
    <section ref={ref} style={{ background: "white", padding: "88px 0" }}>
      <div className="container-xl">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="book-grid"
        >
          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: "14px",
                lineHeight: 1.15,
              }}
            >
              Book Your Visit
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#64748b",
                lineHeight: 1.65,
                marginBottom: "36px",
              }}
            >
              Ready to see the world more clearly?
              <br />
              Schedule your appointment in under 60 seconds.
            </p>

            {/* Emergency card */}
            <div
              style={{
                background: "#EFF6FF",
                border: "1px solid #BFDBFE",
                borderRadius: "14px",
                padding: "20px 24px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#64748b",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Emergency Help
              </p>
              <a
                href="tel:+919876543210"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  textDecoration: "none",
                  color: "#1d4ed8",
                  fontWeight: 800,
                  fontSize: "22px",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                <HiPhone /> +91 98765 43210
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              <div>
                <label style={labelStyle}>Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                  onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
                />
              </div>
              <div>
                <label style={labelStyle}>Service Type</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: "auto" }}
                >
                  <option>Eye Checkup</option>
                  <option>Cataract Consultation</option>
                  <option>LASIK Evaluation</option>
                  <option>Glaucoma Screening</option>
                  <option>Paediatric Eye Care</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => navigate("/appointment")}
              style={{
                width: "100%",
                background: "#2563EB",
                color: "white",
                border: "none",
                padding: "15px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
                transition: "all 0.25s ease",
                marginBottom: "12px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1d4ed8";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Confirm Appointment Request
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                color: "#94a3b8",
                margin: 0,
              }}
            >
              We will call you back within 15 minutes to confirm the slot.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .book-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
