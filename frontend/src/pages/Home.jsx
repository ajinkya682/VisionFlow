import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import StatsSection from "../components/home/StatsSection";
import BookVisit from "../components/home/BookVisit";

const PAGE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.35 },
};

export default function Home() {
  return (
    <motion.div {...PAGE}>
      <Hero />
      <ServicesSection />
      <StatsSection />
      <BookVisit />
    </motion.div>
  );
}
