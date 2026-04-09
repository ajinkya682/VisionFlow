import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaShareAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ background: "white", borderTop: "1px solid #f1f5f9" }}>
      <div className="container-xl" style={{ padding: "56px 16px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "60px",
            paddingBottom: "40px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "#2563EB",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MdOutlineRemoveRedEye
                  style={{ color: "white", fontSize: "16px" }}
                />
              </div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#0f172a",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
              >
                Dr. Sharma Eye Clinic
              </span>
            </Link>
            <p
              style={{
                fontSize: "13px",
                color: "#64748b",
                lineHeight: 1.65,
                marginBottom: "20px",
                maxWidth: "280px",
              }}
            >
              Setting the gold standard in eye care with clinical excellence and
              patient-first values since 2005.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {[FaShareAlt, FaEnvelope].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#2563EB";
                    e.currentTarget.style.color = "#2563EB";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.color = "#64748b";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "12px",
                color: "#94a3b8",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Quick Links
            </h4>
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Patient Portal", href: "#" },
              { label: "Careers", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: "block",
                  fontSize: "14px",
                  color: "#475569",
                  textDecoration: "none",
                  marginBottom: "12px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#2563EB")}
                onMouseLeave={(e) => (e.target.style.color = "#475569")}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Location */}
          <div>
            <h4
              style={{
                fontWeight: 700,
                fontSize: "12px",
                color: "#94a3b8",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Location
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#475569",
                lineHeight: 1.65,
                marginBottom: "12px",
              }}
            >
              12, Clinic Plaza, South Extension,
              <br />
              New Delhi, India - 110049
            </p>
            <p style={{ fontSize: "14px", color: "#475569", fontWeight: 600 }}>
              Mon - Sat: 9AM - 7PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #f1f5f9" }}>
        <div
          className="container-xl"
          style={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
            © 2024 Dr. Sharma Eye Clinic. Precision in Vision.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "#94a3b8",
            }}
          >
            Powered by
            <span style={{ fontWeight: 700, color: "#2563EB" }}>
              VisionFlow
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}
