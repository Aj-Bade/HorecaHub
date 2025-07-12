import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Vendors", href: "/vendors" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <img
                src="https://horeca1.com/static/media/horecaLogo.89229439d8805b10b53b.png"
                alt="Horeca1 Logo"
                className="h-10 w-auto"
              />
              <div className="hidden md:flex items-center space-x-1 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-brand-orange" />
                <span>Bandra West - 400050</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.a
                  className={`text-gray-700 hover:text-brand-orange transition-colors font-medium ${
                    location === item.href ? "text-brand-orange" : ""
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.a>
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Search className="h-4 w-4 text-gray-600" />
              <Input
                placeholder="Search products..."
                className="border-none bg-transparent focus:ring-0 focus:outline-none"
              />
            </div>
            
            <Button className="bg-brand-orange hover:bg-orange-600 text-white">
              Login/Sign-up
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="text-lg font-medium text-gray-700 hover:text-brand-orange transition-colors">
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-2 mb-4">
                      <Search className="h-4 w-4 text-gray-600" />
                      <Input placeholder="Search products..." />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
