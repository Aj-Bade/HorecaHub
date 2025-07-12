import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Search, Star, Package, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerChildren, cardHover } from "@/lib/animations";
import type { Vendor } from "@shared/schema";

const Vendors = () => {
  const { data: vendors, isLoading } = useQuery<Vendor[]>({
    queryKey: ["/api/vendors"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 animate-pulse">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
                <div className="h-6 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded mb-4" />
                <div className="h-4 bg-gray-200 rounded w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const vendorIcons = [
    { icon: "🏪", color: "from-brand-orange to-brand-golden" },
    { icon: "🌶️", color: "from-brand-red to-red-600" },
    { icon: "🥛", color: "from-blue-500 to-blue-600" },
    { icon: "☕", color: "from-amber-500 to-amber-600" },
    { icon: "🫒", color: "from-yellow-500 to-yellow-600" },
    { icon: "🍷", color: "from-purple-500 to-purple-600" }
  ];

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
            Our Vendors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted suppliers and vendors for all your restaurant needs
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search vendors..."
              className="pl-10"
            />
          </div>
        </motion.div>

        {/* Vendors Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {vendors?.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              variants={fadeInUp}
              whileHover="whileHover"
              className="cursor-pointer"
            >
              <Card className="h-full card-hover shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${vendorIcons[index % vendorIcons.length].color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-3xl">
                        {vendorIcons[index % vendorIcons.length].icon}
                      </span>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 text-brand-charcoal">
                      {vendor.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {vendor.description}
                    </p>
                    {vendor.isVerified && (
                      <Badge className="bg-green-100 text-green-800">
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Rating</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{vendor.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Products</span>
                      <div className="flex items-center">
                        <Package className="h-4 w-4 text-brand-orange mr-1" />
                        <span className="font-medium">{vendor.productCount}+</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Location</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="font-medium text-sm">Mumbai</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Vendors;
