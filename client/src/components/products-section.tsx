import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
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
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center justify-between mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
              Top Picks
            </h2>
            <p className="text-xl text-gray-600">
              Best-selling products from our marketplace
            </p>
          </div>
          <Button className="bg-brand-orange hover:bg-orange-600 text-white">
            View All
          </Button>
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
      </div>
    </section>
  );
};

export default ProductsSection;
