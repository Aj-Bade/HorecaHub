import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Flame, Award } from "lucide-react";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import ProductCard from "@/components/product-card";
import type { Product } from "@shared/schema";

const ProductsSection = () => {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
    queryFn: async () => {
      const response = await fetch("/api/products?topPicks=true");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-4 animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-xl mb-4" />
                <div className="h-6 bg-gray-200 rounded mb-2" />
                <div className="h-6 bg-gray-200 rounded w-20 mb-4" />
                <div className="h-10 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-golden/5" />
      
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
              <Flame className="h-4 w-4 mr-2" />
              Trending Now • Premium Quality
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Top Picks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Best-selling products from our marketplace - handpicked by restaurant owners and rated by professionals
          </p>
        </motion.div>

        {/* Featured stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-golden rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-brand-charcoal mb-2">50,000+</h3>
            <p className="text-gray-600">Products Sold This Month</p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-brand-charcoal mb-2">4.8/5</h3>
            <p className="text-gray-600">Average Product Rating</p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-brand-charcoal mb-2">100%</h3>
            <p className="text-gray-600">Quality Guaranteed</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {products?.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
            >
              <ProductCard product={product} />
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
          <div className="bg-gradient-to-r from-brand-orange to-brand-golden rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Discover 10,000+ Premium Products
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              From artisanal sauces to premium ingredients, find everything your restaurant needs with guaranteed quality and competitive pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-brand-orange hover:bg-gray-100 font-semibold px-8 py-3"
              >
                Browse All Products
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-orange font-semibold px-8 py-3"
              >
                Contact Sales Team
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
