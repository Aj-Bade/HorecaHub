import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cardHover } from "@/lib/animations";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      variants={cardHover}
      whileHover="whileHover"
      className="cursor-pointer"
    >
      <Card className="h-full card-hover shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        <CardContent className="p-4">
          <div className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-brand-charcoal line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-brand-orange">
              ₹ {product.price}
            </span>
            <span className="text-sm text-gray-500">
              {product.unit}
            </span>
          </div>
          <Button className="w-full bg-brand-orange/10 text-brand-orange hover:bg-brand-orange hover:text-white transition-colors">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
