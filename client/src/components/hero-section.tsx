import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, ShoppingCart, Star, Award, Users, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  heroContainer, 
  heroTitle, 
  heroSubtitle, 
  heroButton, 
  statsCounter, 
  featureBadge,
  floatingAnimation,
  backgroundFloat,
  backgroundPulse,
  backgroundRotate 
} from "@/lib/animations";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { icon: Star, label: "4.8★ Rating", value: "2000+ Reviews" },
    { icon: Award, label: "500+ Vendors", value: "Verified Suppliers" },
    { icon: Users, label: "10K+ Products", value: "Restaurant Supplies" }
  ];

  const stats = [
    { number: "500+", label: "Verified Suppliers", icon: Award },
    { number: "10K+", label: "Products", icon: ShoppingCart },
    { number: "2K+", label: "Restaurants", icon: Users },
    { number: "50K+", label: "Orders", icon: TrendingUp }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          variants={backgroundPulse}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"
          variants={backgroundFloat}
          animate="animate"
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          variants={backgroundPulse}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
        
        {/* Rotating background elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/20 rounded-full"
          variants={backgroundRotate}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-yellow-300/20 rounded-lg"
          variants={backgroundRotate}
          animate="animate"
          style={{ animationDelay: '5s' }}
        />
        
        {/* Sparkle effects */}
        <motion.div 
          className="absolute top-1/3 left-1/3"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="h-6 w-6 text-yellow-300/60" />
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/3"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Sparkles className="h-4 w-4 text-white/40" />
        </motion.div>
      </motion.div>
      
      {/* Enhanced background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40" />
      
      {/* Background pattern with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
        >
          {/* Trust badges with enhanced animation */}
          <motion.div
            className="flex justify-center mb-8"
            variants={featureBadge}
          >
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-base py-2 px-4">
              <Sparkles className="mr-2 h-4 w-4" />
              India's #1 Restaurant Supply Platform
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            variants={heroTitle}
          >
            Buy just about{" "}
            <span className="relative inline-block">
              <span className="text-gradient bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                anything
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="h-8 w-8 text-yellow-300/80" />
              </motion.div>
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed"
            variants={heroSubtitle}
          >
            All your Restaurant Supplies & Suppliers under 1-roof
            <br />
            <span className="text-lg text-white/70 block mt-2">
              Get up to 90 days credit • Free delivery • 24/7 support
            </span>
          </motion.p>

          {/* Enhanced feature highlights */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10"
            variants={heroContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20"
                variants={featureBadge}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)"
                }}
              >
                <feature.icon className="h-5 w-5 mr-3 text-yellow-300" />
                <span className="font-semibold text-sm">{feature.label}</span>
                <span className="text-xs text-white/70 ml-2">{feature.value}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={heroButton}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-brand-orange hover:bg-gray-100 font-semibold text-lg shadow-2xl px-10 py-6 rounded-full border-2 border-white/20"
              >
                <ShoppingCart className="mr-3 h-6 w-6" />
                Explore Products
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-orange font-semibold text-lg px-10 py-6 backdrop-blur-sm rounded-full"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced stats with icons */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={heroContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={statsCounter}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-yellow-300" />
                </div>
                <motion.div 
                  className="text-3xl font-bold text-white mb-1"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced floating scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        variants={floatingAnimation}
        animate="animate"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
