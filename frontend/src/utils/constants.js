/* ── Navigation ─────────────────────────────────── */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ── High-quality Unsplash image URLs ───────────── */
export const IMAGES = {
  doctorHero:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80",
  doctorProfile:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  eyeExam:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  clinic:
    "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1200&q=80",
  eyeClose:
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
  microscope:
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
  teamMeeting:
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
  patient1:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  patient2:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  patient3:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
};

/* ── Home services ──────────────────────────────── */
export const HOME_SERVICES = [
  {
    icon: "👁️",
    title: "Cataract Surgery",
    desc: "Advanced micro-incision cataract surgery with premium IOL implants for crystal-clear vision.",
    color: "#EFF6FF",
  },
  {
    icon: "🔬",
    title: "A-RX Correction",
    desc: "Precise refractive error correction — myopia, hyperopia and astigmatism treated with LASIK.",
    color: "#F0FDF4",
  },
  {
    icon: "🩺",
    title: "General Checkup",
    desc: "Comprehensive eye health evaluation with retinal imaging, tonometry and visual field testing.",
    color: "#FFF7ED",
  },
];

/* ── All services ───────────────────────────────── */
export const ALL_SERVICES = [
  {
    icon: "🔭",
    tag: "Diagnostic",
    title: "Eye Testing",
    desc: "Full refraction and biometry using the latest digital equipment for pinpoint accuracy.",
    price: "₹500",
  },
  {
    icon: "💎",
    tag: "Surgical",
    title: "Cataract Surgery",
    desc: "Phacoemulsification with foldable IOL — daycare procedure, home the same day.",
    price: "₹25,000",
  },
  {
    icon: "👓",
    tag: "Vision",
    title: "Spectacle Fitting",
    desc: "Expert frame selection paired with prescription lenses — single, progressive or bifocal.",
    price: "₹1,500",
  },
  {
    icon: "👶",
    tag: "Pediatric",
    title: "Pediatric Care",
    desc: "Child-friendly squint correction, amblyopia therapy and school vision screening.",
    price: "₹800",
  },
  {
    icon: "📊",
    tag: "Screening",
    title: "Glaucoma Screening",
    desc: "Early detection with OCT and visual field analysis to prevent optic-nerve damage.",
    price: "₹1,200",
  },
  {
    icon: "💧",
    tag: "Treatment",
    title: "Dry Eye Clinic",
    desc: "Personalised Meibomian gland therapy and LipiFlow for chronic dry eye syndrome.",
    price: "₹900",
  },
];

/* ── FAQ ────────────────────────────────────────── */
export const FAQS = [
  {
    q: "How should I prepare for my first appointment?",
    a: "Bring any previous prescriptions or medical records. Avoid wearing contact lenses for 48 hours before a refraction test. Arrange for someone to drive you if dilation drops are expected.",
  },
  {
    q: "How long does a comprehensive eye exam take?",
    a: "A standard consultation takes 30–45 minutes. If additional diagnostic tests are required (OCT, visual field), allow up to 90 minutes.",
  },
  {
    q: "Do you accept health insurance plans?",
    a: "Yes, we accept most major insurance plans including Star Health, HDFC ERGO, Bajaj Allianz and government CGHS. Contact us to verify your specific plan.",
  },
  {
    q: "Is cataract surgery painful?",
    a: "No. The procedure uses topical anaesthetic drops. Most patients feel only mild pressure and return to normal activities within 24–48 hours.",
  },
  {
    q: "How often should I book a routine eye check?",
    a: "Adults under 40 should have a check every 2 years. Over 40, annually. Patients with diabetes, glaucoma risk or a family history of eye disease should visit every 6 months.",
  },
];

/* ── Testimonials ───────────────────────────────── */
export const TESTIMONIALS = [
  {
    name: "Rahul Chandra",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    text: "The cataract surgery completely changed my life. Dr. Sharma's team was incredibly professional and the procedure was seamless. I was reading my phone the very next day!",
    rating: 5,
  },
  {
    name: "Nav Ahktar",
    role: "Retired Teacher",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    text: "I've been coming here for 3 years. The glaucoma screening programme caught my condition early. Transparent doctors, modern equipment and a caring staff — highly recommend.",
    rating: 5,
  },
  {
    name: "Piyush Lohiya",
    role: "Business Owner",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    text: "Took my son for squint correction. The paediatric care was outstanding — the doctors kept him relaxed throughout. Result is brilliant. Thank you VisionFlow!",
    rating: 5,
  },
];

/* ── Timeline ───────────────────────────────────── */
export const JOURNEY = [
  {
    year: "2004",
    title: "Foundation",
    desc: "Dr. Sharma established the clinic with a single mission: world-class eye care at accessible prices.",
  },
  {
    year: "2010",
    title: "Innovation",
    desc: "Introduced phacoemulsification cataract surgery and the first OCT scanner in the region.",
  },
  {
    year: "2016",
    title: "Expansion",
    desc: "Opened the Dry Eye Clinic and Paediatric Wing — growing to a 12-specialist team.",
  },
  {
    year: "2020",
    title: "50,000+ Patients",
    desc: "Crossed the landmark of 50,000 satisfied patients while launching 24/7 tele-consultation.",
  },
];

/* ── Specializations ────────────────────────────── */
export const SPECIALIZATIONS = [
  {
    icon: "💎",
    title: "Cataract & Lasik",
    items: ["Micro-incision phaco", "LASIK & SMILE", "Premium IOL implants"],
  },
  {
    icon: "👶",
    title: "Pediatric Eyecare",
    items: ["Squint correction", "Amblyopia therapy", "Vision screening"],
  },
  {
    icon: "🔵",
    title: "Contact Lenses",
    items: ["Soft & rigid lens fitting", "Orthokeratology", "Scleral lenses"],
  },
];
