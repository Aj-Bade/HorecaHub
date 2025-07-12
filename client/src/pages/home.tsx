import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import CategoriesSection from "@/components/categories-section";
import HowItWorksSection from "@/components/how-it-works-section";
import VendorsSection from "@/components/vendors-section";
import ProductsSection from "@/components/products-section";
import StatisticsSection from "@/components/statistics-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <CategoriesSection />
      <HowItWorksSection />
      <VendorsSection />
      <ProductsSection />
      <StatisticsSection />
      <FAQSection />
      <ContactSection />
    </motion.div>
  );
};

export default Home;
