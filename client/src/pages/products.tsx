import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/product-card";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import type { Product, Category } from "@shared/schema";

const Products = () => {
  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: categories } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  if (productsLoading) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-4 animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-xl mb-4" />
                <div className="h-6 bg-gray-200 rounded mb-2" />
                <div className="h-6 bg-gray-200 rounded w-20 mb-4" />
                <div className="h-10 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover premium restaurant supplies and ingredients from verified suppliers
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
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
    </div>
  );
};

export default Products;
