import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { NAV_LINKS } from "../utils/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
          boxShadow: scrolled
            ? "0 1px 20px rgba(0,0,0,0.08)"
            : "0 1px 0 #f1f5f9",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="container-xl">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "68px",
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  background: "#2563EB",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MdOutlineRemoveRedEye
                  style={{ color: "white", fontSize: "18px" }}
                />
              </div>
              <span
                style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#0f172a",
                }}
              >
                Dr. Sharma Eye Clinic
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              style={{ display: "flex", alignItems: "center", gap: "36px" }}
              className="hidden lg:flex"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <NavLink
                  key={href}
                  to={href}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: isActive ? "#2563EB" : "#475569",
                    borderBottom: isActive
                      ? "2px solid #2563EB"
                      : "2px solid transparent",
                    paddingBottom: "2px",
                    transition: "all 0.2s ease",
                  })}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex">
              <button
                onClick={() => navigate("/appointment")}
                style={{
                  background: "#2563EB",
                  color: "white",
                  border: "none",
                  padding: "10px 22px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
                onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
                onMouseLeave={(e) => (e.target.style.background = "#2563EB")}
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen((p) => !p)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                color: "#374151",
              }}
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mob"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "68px",
              left: 0,
              right: 0,
              zIndex: 40,
              background: "white",
              borderBottom: "1px solid #f1f5f9",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
            className="lg:hidden"
          >
            <div
              style={{
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <NavLink
                  key={href}
                  to={href}
                  onClick={() => setMobileOpen(false)}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: isActive ? "#2563EB" : "#374151",
                  })}
                >
                  {label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  navigate("/appointment");
                }}
                style={{
                  background: "#2563EB",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  marginTop: "4px",
                }}
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
