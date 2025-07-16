import { motion, useInView } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Flame, Award, Sparkles, ArrowRight } from "lucide-react";
import { sectionContainer, sectionTitle, gridItemStagger, gridItem, buttonHover, staggerChildren } from "@/lib/animations";
import ProductCard from "@/components/product-card";
import { useRef } from "react";
import type { Product } from "@shared/schema";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
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
              <motion.div 
                key={i} 
                className="bg-white rounded-2xl shadow-lg p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div 
                  className="aspect-square bg-gray-200 rounded-xl mb-4"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div 
                  className="h-6 bg-gray-200 rounded mb-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="h-6 bg-gray-200 rounded w-20 mb-4"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                />
                <motion.div 
                  className="h-10 bg-gray-200 rounded"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-golden/5" />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-20 w-20 h-20 bg-brand-orange/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-16 h-16 bg-brand-golden/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
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
            <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 px-6 py-3 text-base font-medium">
              <Flame className="h-4 w-4 mr-2" />
              Trending Now • Premium Quality
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-brand-charcoal mb-6"
            variants={sectionTitle}
          >
            Top Picks
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={sectionTitle}
          >
            Best-selling products from our marketplace - handpicked by restaurant owners and rated by professionals
          </motion.p>
        </motion.div>

        {/* Enhanced featured stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={gridItemStagger}
        >
          <motion.div 
            className="text-center"
            variants={gridItem}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-golden rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-brand-charcoal mb-2">50,000+</h3>
            <p className="text-gray-600">Products Sold This Month</p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={gridItem}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-brand-charcoal mb-2">4.8/5</h3>
            <p className="text-gray-600">Average Product Rating</p>
          </motion.div>
          <motion.div 
            className="text-center"
            variants={gridItem}
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
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={gridItemStagger}
        >
          {products?.map((product) => (
            <motion.div
              key={product.id}
              variants={gridItem}
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
