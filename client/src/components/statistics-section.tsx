import { motion, useInView } from "framer-motion";
import { Store, Users, ShoppingCart, Award, Clock, MapPin, CreditCard, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sectionContainer, sectionTitle, gridItemStagger, gridItem, staggerChildren, statsCounter, fadeInUp } from "@/lib/animations";
import { useRef } from "react";

const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const stats = [
    {
      icon: Store,
      value: "500+",
      label: "Verified Vendors",
      description: "Across 50+ cities",
      color: "from-brand-orange to-brand-golden",
      growth: "+25% this month"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Customers",
      description: "Restaurant owners",
      color: "from-blue-500 to-blue-600",
      growth: "+40% this quarter"
    },
    {
      icon: ShoppingCart,
      value: "1M+",
      label: "Orders Delivered",
      description: "Monthly volume",
      color: "from-green-500 to-green-600",
      growth: "+60% YoY"
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction Rate",
      description: "Customer feedback",
      color: "from-purple-500 to-purple-600",
      growth: "Industry leading"
    }
  ];

  const additionalStats = [
    {
      icon: Clock,
      title: "Average Delivery Time",
      value: "24 Hours",
      description: "Same-day delivery in metro cities"
    },
    {
      icon: MapPin,
      title: "Cities Covered",
      value: "50+",
      description: "Across India with local suppliers"
    },
    {
      icon: CreditCard,
      title: "Credit Terms",
      value: "90 Days",
      description: "Flexible payment options"
    },
    {
      icon: TrendingUp,
      title: "Monthly Growth",
      value: "35%",
      description: "New customers joining"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-brand-charcoal relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-orange/10 to-brand-golden/10" />
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-golden/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionContainer}
        >
          <motion.div
            className="inline-block mb-6"
            variants={sectionTitle}
          >
            <Badge className="bg-brand-orange/20 text-brand-orange border-brand-orange/30 px-6 py-3 text-base font-medium backdrop-blur-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              Impact & Growth • Real-time Metrics
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={sectionTitle}
          >
            Our Success in Numbers
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={sectionTitle}
          >
            Building trust through quality service and reliable partnerships - see how we're revolutionizing restaurant supply chains across India
          </motion.p>
        </motion.div>

        {/* Main statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={gridItemStagger}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={gridItem}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 p-6">
                <CardContent className="p-0">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-brand-golden transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-gray-300 font-medium mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-400 mb-3">
                    {stat.description}
                  </p>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    {stat.growth}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={gridItemStagger}
        >
          {additionalStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={gridItem}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">
                  {stat.title}
                </h4>
                <p className="text-2xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-300 mb-6">
            Join thousands of restaurants who trust Horeca1 for their supply needs
          </p>
          <motion.button
            className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-200 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
