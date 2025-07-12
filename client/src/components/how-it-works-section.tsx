import { motion } from "framer-motion";
import { UserPlus, Store, List, CreditCard, Clock, Shield, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Business Account",
      description: "Add Outlets, Add Team, assign roles & outlets",
      details: "Set up your restaurant profile, add multiple outlets, and manage team access with role-based permissions",
      color: "from-brand-orange to-brand-golden",
      time: "2 mins",
      features: ["Multi-outlet management", "Team roles & permissions", "Business verification"]
    },
    {
      icon: Store,
      title: "Browse Vendors",
      description: "Browse Vendors in your Pincode or Add your Own Vendors",
      details: "Discover verified suppliers in your area or add your existing vendors to the platform",
      color: "from-brand-golden to-yellow-400",
      time: "5 mins",
      features: ["Location-based vendors", "Verified suppliers", "Add custom vendors"]
    },
    {
      icon: List,
      title: "Create Orders",
      description: "Create Order Lists for easy ordering or Order directly",
      details: "Build custom order lists for recurring purchases or place direct orders with real-time pricing",
      color: "from-blue-500 to-blue-600",
      time: "3 mins",
      features: ["Smart order lists", "Bulk ordering", "Real-time pricing"]
    },
    {
      icon: CreditCard,
      title: "Pay & Get Credit",
      description: "Pay by Discco & get upto 90 days credit",
      details: "Enjoy flexible payment options with up to 90 days credit terms for your business",
      color: "from-brand-success to-green-600",
      time: "Instant",
      features: ["90 days credit", "Multiple payment options", "Instant approval"]
    }
  ];

  const benefits = [
    { icon: Clock, title: "Save Time", description: "Streamlined ordering process" },
    { icon: Shield, title: "Verified Suppliers", description: "Quality assured vendors" },
    { icon: Truck, title: "Fast Delivery", description: "Same-day delivery available" },
    { icon: CheckCircle, title: "Quality Guarantee", description: "100% satisfaction guaranteed" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-golden/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-golden" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 px-4 py-2 text-sm font-medium">
              Simple 4-Step Process
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            How Do I Use It?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            It's simple. Horeca1 allows you to explore, compare & purchase from verified F&B Suppliers with complete transparency and flexibility
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={fadeInUp}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-success rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-gray-600 text-xs px-2 py-1">
                      {step.time}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-brand-charcoal group-hover:text-brand-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {step.details}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-xs text-gray-500">
                        <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-brand-orange to-brand-golden transform translate-x-4" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits section */}
        <motion.div
          className="bg-gradient-to-r from-brand-orange to-brand-golden rounded-3xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why Choose Horeca1?</h3>
            <p className="text-white/90">Experience the benefits of India's most trusted restaurant supply platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-white/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">Ready to transform your restaurant supply chain?</p>
          <motion.button
            className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
