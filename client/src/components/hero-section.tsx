import { motion } from "framer-motion";
import { ChevronDown, Play, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, floatingAnimation } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Buy just about{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              anything
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            All your Restaurant Supplies & Suppliers under 1-roof
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-white text-brand-orange hover:bg-gray-100 font-semibold text-lg shadow-xl px-8 py-4"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Explore Products
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-orange font-semibold text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={floatingAnimation}
        animate="animate"
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
