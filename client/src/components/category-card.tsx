import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cardHover } from "@/lib/animations";
import type { Category } from "@shared/schema";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <motion.div
      variants={cardHover}
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
  );
};

export default CategoryCard;
