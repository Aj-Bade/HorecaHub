import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Star, Package, MapPin, Clock, Award, Shield, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerChildren, cardHover } from "@/lib/animations";
import type { Vendor } from "@shared/schema";

const VendorsSection = () => {
  const { data: vendors, isLoading } = useQuery<Vendor[]>({
    queryKey: ["/api/vendors"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
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
      </section>
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

  const vendorDetails = [
    { 
      location: "Mumbai, Maharashtra", 
      deliveryTime: "Same Day", 
      minOrder: "₹500", 
      specialties: ["Premium Supplies", "Bulk Orders", "Custom Solutions"],
      certifications: ["FSSAI", "ISO 22000"]
    },
    { 
      location: "Delhi, NCR", 
      deliveryTime: "2-4 Hours", 
      minOrder: "₹300", 
      specialties: ["Spices & Herbs", "Authentic Masalas", "Organic Range"],
      certifications: ["FSSAI", "Organic Certified"]
    },
    { 
      location: "Bangalore, Karnataka", 
      deliveryTime: "Next Day", 
      minOrder: "₹400", 
      specialties: ["Fresh Dairy", "Cold Chain", "Daily Supplies"],
      certifications: ["FSSAI", "ISO 9001"]
    },
    { 
      location: "Chennai, Tamil Nadu", 
      deliveryTime: "Same Day", 
      minOrder: "₹250", 
      specialties: ["Coffee & Tea", "Beverages", "Premium Blends"],
      certifications: ["FSSAI", "Fair Trade"]
    },
    { 
      location: "Pune, Maharashtra", 
      deliveryTime: "4-6 Hours", 
      minOrder: "₹350", 
      specialties: ["Cooking Oils", "Ghee", "Specialty Fats"],
      certifications: ["FSSAI", "BRC"]
    },
    { 
      location: "Hyderabad, Telangana", 
      deliveryTime: "Same Day", 
      minOrder: "₹600", 
      specialties: ["Gourmet Syrups", "Dessert Supplies", "International Brands"],
      certifications: ["FSSAI", "HACCP"]
    }
  ];

  return (
    <section id="vendors" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 to-brand-golden/5" />
      
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
              500+ Verified Suppliers • Pan-India Network
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Prime Vendors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All the Restaurant Suppliers you'll ever need - carefully vetted, quality assured, and ready to serve your business
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {vendors?.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              variants={fadeInUp}
              whileHover="whileHover"
              className="cursor-pointer group"
            >
              <Card className="h-full card-hover shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-golden/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Vendor badges */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        {vendor.isVerified && (
                          <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">
                            <Shield className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-1">
                          <Award className="h-3 w-3 mr-1" />
                          Premium
                        </Badge>
                      </div>
                    </div>

                    {/* Vendor icon */}
                    <div className="text-center mb-6">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${vendorIcons[index % vendorIcons.length].color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-3xl">
                          {vendorIcons[index % vendorIcons.length].icon}
                        </span>
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-2 text-brand-charcoal group-hover:text-brand-orange transition-colors">
                        {vendor.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {vendor.description}
                      </p>
                    </div>

                    {/* Vendor stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="font-semibold text-brand-charcoal">{vendor.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">Rating</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Package className="h-4 w-4 text-brand-orange mr-1" />
                          <span className="font-semibold text-brand-charcoal">{vendor.productCount}+</span>
                        </div>
                        <span className="text-xs text-gray-500">Products</span>
                      </div>
                    </div>

                    {/* Vendor details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-brand-orange" />
                        {vendorDetails[index]?.location || "Mumbai, Maharashtra"}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-brand-orange" />
                        {vendorDetails[index]?.deliveryTime || "Same Day"} Delivery
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Truck className="h-4 w-4 mr-2 text-brand-orange" />
                        Min Order: {vendorDetails[index]?.minOrder || "₹500"}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {vendorDetails[index]?.specialties?.slice(0, 2).map((specialty, i) => (
                          <Badge key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Certifications:</h4>
                      <div className="flex gap-1">
                        {vendorDetails[index]?.certifications?.map((cert, i) => (
                          <Badge key={i} className="bg-green-100 text-green-700 text-xs px-2 py-1">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-brand-orange hover:bg-orange-600 text-white"
                      >
                        View Products
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
                      >
                        Contact
                      </Button>
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
            Want to become a verified supplier? Join our network of trusted vendors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3"
            >
              Become a Vendor
            </Button>
            <Button 
              variant="outline" 
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3"
            >
              View All Vendors
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VendorsSection;
