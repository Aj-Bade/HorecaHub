import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerChildren, cardHover } from "@/lib/animations";
import type { Category } from "@shared/schema";

const CategoriesSection = () => {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-xl mb-4" />
                <div className="h-6 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded mb-4" />
                <div className="h-4 bg-gray-200 rounded w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of restaurant supplies and ingredients
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {categories?.map((category, index) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              whileHover="whileHover"
              className="cursor-pointer"
            >
              <Card className="h-full card-hover shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-golden rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-charcoal">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-brand-orange">
                    <span className="font-medium">View Products</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
