import { motion } from "framer-motion";
import { ChevronDown, Play, ShoppingCart, Star, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, floatingAnimation } from "@/lib/animations";

const HeroSection = () => {
  const features = [
    { icon: Star, label: "4.8★ Rating", value: "2000+ Reviews" },
    { icon: Award, label: "500+ Vendors", value: "Verified Suppliers" },
    { icon: Users, label: "10K+ Products", value: "Restaurant Supplies" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
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
          {/* Trust badges */}
          <motion.div
            className="flex justify-center mb-6"
            variants={fadeInUp}
          >
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              India's #1 Restaurant Supply Platform
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={fadeInUp}
          >
            Buy just about{" "}
            <span className="relative">
              <span className="text-gradient bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                anything
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            All your Restaurant Supplies & Suppliers under 1-roof
            <br />
            <span className="text-lg text-white/70">
              Get up to 90 days credit • Free delivery • 24/7 support
            </span>
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-8"
            variants={fadeInUp}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <feature.icon className="h-5 w-5 mr-2 text-yellow-300" />
                <span className="font-semibold text-sm">{feature.label}</span>
                <span className="text-xs text-white/70 ml-2">{feature.value}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <Button
              size="lg"
              className="bg-white text-brand-orange hover:bg-gray-100 font-semibold text-lg shadow-xl px-8 py-4 transform hover:scale-105 transition-all duration-200"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Explore Products
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-orange font-semibold text-lg px-8 py-4 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/70">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-white/70">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2K+</div>
              <div className="text-sm text-white/70">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm text-white/70">Orders</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        variants={floatingAnimation}
        animate="animate"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
