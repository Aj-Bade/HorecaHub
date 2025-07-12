import { motion } from "framer-motion";
import { UserPlus, Store, List, CreditCard } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Business Account",
      description: "Add Outlets, Add Team, assign roles & outlets",
      color: "from-brand-orange to-brand-golden"
    },
    {
      icon: Store,
      title: "Browse Vendors",
      description: "Browse Vendors in your Pincode or Add your Own Vendors",
      color: "from-brand-golden to-yellow-400"
    },
    {
      icon: List,
      title: "Create Orders",
      description: "Create Order Lists for easy ordering or Order directly",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CreditCard,
      title: "Pay & Get Credit",
      description: "Pay by Discco & get upto 90 days credit",
      color: "from-brand-success to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            How Do I Use It?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            It's simple. Horeca1 allows you to explore, compare & purchase from verified F&B Suppliers
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="relative mb-6">
                <motion.div
                  className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </motion.div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-success rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-charcoal">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
