import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Customer Support", href: "#support" },
    { name: "Vendor Hub", href: "#vendor-hub" },
    { name: "Returns & Refund", href: "#returns" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Use", href: "#terms" }
  ];

  const categories = [
    { name: "Dips & Condiments", href: "#" },
    { name: "Beverage Supplies", href: "#" },
    { name: "Masala & Seasonings", href: "#" },
    { name: "Dairy & Cheese", href: "#" },
    { name: "Frozen Supplies", href: "#" }
  ];

  return (
    <footer className="bg-brand-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <img
              src="https://horeca1.com/static/media/horecaLogo.89229439d8805b10b53b.png"
              alt="Horeca1 Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4">HCX Global Private Limited</p>
            <p className="text-gray-400 text-sm">CIN: U74900DL2015PTC286208</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <a className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href}>
                    <a className="hover:text-white transition-colors">
                      {category.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange" />
                <span>+91-7710920002</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-orange" />
                <span>sales@horeca1.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange" />
                <span>Sanpada, Navi Mumbai</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Horeca1. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
