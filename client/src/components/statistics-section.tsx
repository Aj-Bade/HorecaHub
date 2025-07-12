import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/animations";

const StatisticsSection = () => {
  const stats = [
    { number: "500+", label: "Verified Suppliers" },
    { number: "10,000+", label: "Products Available" },
    { number: "2,000+", label: "Restaurants Served" },
    { number: "50,000+", label: "Orders Completed" }
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-white"
            >
              <motion.div
                className="text-5xl font-bold mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/80 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;
