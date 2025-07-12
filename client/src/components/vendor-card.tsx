import { motion } from "framer-motion";
import { Star, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cardHover } from "@/lib/animations";
import type { Vendor } from "@shared/schema";

interface VendorCardProps {
  vendor: Vendor;
  iconData?: {
    icon: string;
    color: string;
  };
}

const VendorCard = ({ vendor, iconData }: VendorCardProps) => {
  return (
    <motion.div
      variants={cardHover}
      whileHover="whileHover"
      className="cursor-pointer"
    >
      <Card className="h-full card-hover shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-8 text-center">
          <motion.div
            className={`w-20 h-20 bg-gradient-to-br ${iconData?.color || 'from-brand-orange to-brand-golden'} rounded-full flex items-center justify-center mx-auto mb-4`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-3xl">
              {iconData?.icon || "🏪"}
            </span>
          </motion.div>
          <h3 className="text-2xl font-bold mb-2 text-brand-charcoal">
            {vendor.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {vendor.description}
          </p>
          {vendor.isVerified && (
            <Badge className="bg-green-100 text-green-800 mb-4">
              Verified
            </Badge>
          )}
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              {vendor.rating}
            </span>
            <span className="flex items-center">
              <Package className="h-4 w-4 text-brand-orange mr-1" />
              {vendor.productCount}+ Products
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VendorCard;
