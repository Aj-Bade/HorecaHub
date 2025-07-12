import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, TrendingUp, Package, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerChildren, cardHover } from "@/lib/animations";
import type { Category } from "@shared/schema";

const CategoriesSection = () => {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  // Mock data for category stats
  const categoryStats = [
    { trending: true, products: 450, rating: 4.8 },
    { trending: false, products: 320, rating: 4.7 },
    { trending: true, products: 280, rating: 4.9 },
    { trending: false, products: 410, rating: 4.6 },
    { trending: true, products: 380, rating: 4.8 },
    { trending: false, products: 290, rating: 4.7 },
    { trending: true, products: 350, rating: 4.9 },
    { trending: false, products: 420, rating: 4.8 },
    { trending: true, products: 310, rating: 4.7 },
    { trending: false, products: 390, rating: 4.8 },
    { trending: true, products: 360, rating: 4.9 },
    { trending: false, products: 270, rating: 4.6 }
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
    <section id="categories" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
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
              12 Categories • 3,500+ Products
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of restaurant supplies and ingredients from verified suppliers across India
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
              className="cursor-pointer group"
            >
              <Card className="h-full card-hover shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-golden/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Category stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {categoryStats[index]?.trending && (
                          <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {categoryStats[index]?.rating || 4.7}
                        </span>
                      </div>
                    </div>

                    {/* Category icon */}
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-golden rounded-xl mb-4 flex items-center justify-center overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={category.imageUrl}
                        alt={category.name}
                        className="w-12 h-12 object-contain"
                      />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-2 text-brand-charcoal group-hover:text-brand-orange transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Product count */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-500">
                        <Package className="h-4 w-4 mr-1" />
                        <span className="text-sm">{categoryStats[index]?.products || 300}+ Products</span>
                      </div>
                    </div>

                    {/* View products link */}
                    <div className="flex items-center text-brand-orange group-hover:text-brand-golden transition-colors">
                      <span className="font-medium">View Products</span>
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We have thousands more products in our catalog
          </p>
          <motion.button
            className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Categories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
