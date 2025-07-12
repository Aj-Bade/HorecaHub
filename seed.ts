import { db } from "./server/db";
import { categories, vendors, products, faqs } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  // Clear existing data
  await db.delete(products);
  await db.delete(faqs);
  await db.delete(vendors);
  await db.delete(categories);

  // Categories data
  const categoriesData = [
    {
      name: "Dips & Condiments",
      slug: "dips-condiments",
      description: "Mustard, Ketchup, Olives, Mayonnaise, Sauces & Condiments",
      imageUrl: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Masala & Spices",
      slug: "masala-spices",
      description: "Whole & Powdered Spices, Masala Mixes, Herbs & Seasonings",
      imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Beverages",
      slug: "beverages",
      description: "Soft Drinks, Juices, Smoothie Mixes, Tea & Coffee",
      imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Dairy Products",
      slug: "dairy-products",
      description: "Milk, Cheese, Butter, Yogurt, Cream & Other Dairy Items",
      imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Cooking Oils",
      slug: "cooking-oils",
      description: "Sunflower, Coconut, Olive, Mustard & Other Cooking Oils",
      imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Baking Essentials",
      slug: "baking-essentials",
      description: "Flour, Sugar, Baking Powder, Vanilla, Chocolate & Baking Supplies",
      imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Snacks & Appetizers",
      slug: "snacks-appetizers",
      description: "Chips, Nuts, Crackers, Frozen Snacks & Ready-to-Serve Items",
      imageUrl: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Meat & Seafood",
      slug: "meat-seafood",
      description: "Fresh & Frozen Meat, Poultry, Fish & Seafood Products",
      imageUrl: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Fruits & Vegetables",
      slug: "fruits-vegetables",
      description: "Fresh Produce, Organic Fruits & Vegetables",
      imageUrl: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Desserts & Sweets",
      slug: "desserts-sweets",
      description: "Ice Cream, Cakes, Pastries, Traditional Sweets & Dessert Mixes",
      imageUrl: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Packaging & Disposables",
      slug: "packaging-disposables",
      description: "Take-away Boxes, Cups, Plates, Cutlery & Packaging Supplies",
      imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Kitchen Equipment",
      slug: "kitchen-equipment",
      description: "Cookware, Utensils, Small Appliances & Kitchen Tools",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // Insert categories
  const insertedCategories = await db.insert(categories).values(categoriesData).returning();
  console.log(`Inserted ${insertedCategories.length} categories`);

  // Vendors data
  const vendorsData = [
    {
      name: "Horeca1",
      description: "Premium Restaurant Supply Solutions",
      rating: "4.8",
      productCount: 1200,
      imageUrl: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      isVerified: true
    },
    {
      name: "Spice World",
      description: "Authentic Indian Spices & Masalas",
      rating: "4.7",
      productCount: 850,
      imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      isVerified: true
    },
    {
      name: "Fresh Dairy Co.",
      description: "Fresh Dairy Products & Cold Storage",
      rating: "4.9",
      productCount: 650,
      imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      isVerified: true
    },
    {
      name: "Beverage Hub",
      description: "Complete Beverage Solutions",
      rating: "4.6",
      productCount: 450,
      imageUrl: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      isVerified: true
    },
    {
      name: "Golden Oils",
      description: "Premium Cooking Oils & Fats",
      rating: "4.8",
      productCount: 320,
      imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      isVerified: true
    },
    {
      name: "Packaging Pro",
      description: "Eco-Friendly Packaging Solutions",
      rating: "4.5",
      productCount: 980,
      imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      isVerified: true
    }
  ];

  // Insert vendors
  const insertedVendors = await db.insert(vendors).values(vendorsData).returning();
  console.log(`Inserted ${insertedVendors.length} vendors`);

  // Products data
  const productsData = [
    {
      name: "Davinci Mango Smoothie Blend 1Ltr",
      description: "Premium mango smoothie blend for restaurants",
      imageUrl: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "450.00",
      unit: "1 Ltr",
      categoryId: insertedCategories[2].id, // Beverages
      vendorId: insertedVendors[3].id, // Beverage Hub
      isTopPick: true,
      inStock: true
    },
    {
      name: "Garam Masala Premium 250g",
      description: "Traditional garam masala blend",
      imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "180.00",
      unit: "250g",
      categoryId: insertedCategories[1].id, // Masala & Spices
      vendorId: insertedVendors[1].id, // Spice World
      isTopPick: true,
      inStock: true
    },
    {
      name: "Fresh Mozzarella Cheese 500g",
      description: "Fresh mozzarella for pizzas and salads",
      imageUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "320.00",
      unit: "500g",
      categoryId: insertedCategories[3].id, // Dairy Products
      vendorId: insertedVendors[2].id, // Fresh Dairy Co.
      isTopPick: true,
      inStock: true
    },
    {
      name: "Extra Virgin Olive Oil 1L",
      description: "Cold-pressed extra virgin olive oil",
      imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "650.00",
      unit: "1L",
      categoryId: insertedCategories[4].id, // Cooking Oils
      vendorId: insertedVendors[4].id, // Golden Oils
      isTopPick: true,
      inStock: true
    },
    {
      name: "Tomato Ketchup 1kg",
      description: "Premium tomato ketchup for restaurants",
      imageUrl: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "125.00",
      unit: "1kg",
      categoryId: insertedCategories[0].id, // Dips & Condiments
      vendorId: insertedVendors[0].id, // Horeca1
      isTopPick: true,
      inStock: true
    },
    {
      name: "Eco-Friendly Food Containers",
      description: "Biodegradable takeaway containers",
      imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "8.00",
      unit: "per piece",
      categoryId: insertedCategories[10].id, // Packaging & Disposables
      vendorId: insertedVendors[5].id, // Packaging Pro
      isTopPick: true,
      inStock: true
    },
    {
      name: "Whole Wheat Flour 10kg",
      description: "Premium whole wheat flour for baking",
      imageUrl: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "380.00",
      unit: "10kg",
      categoryId: insertedCategories[5].id, // Baking Essentials
      vendorId: insertedVendors[0].id, // Horeca1
      isTopPick: true,
      inStock: true
    },
    {
      name: "Mixed Vegetables 1kg",
      description: "Fresh mixed vegetables for cooking",
      imageUrl: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      price: "120.00",
      unit: "1kg",
      categoryId: insertedCategories[8].id, // Fruits & Vegetables
      vendorId: insertedVendors[0].id, // Horeca1
      isTopPick: true,
      inStock: true
    }
  ];

  // Insert products
  const insertedProducts = await db.insert(products).values(productsData).returning();
  console.log(`Inserted ${insertedProducts.length} products`);

  // FAQs data
  const faqsData = [
    {
      question: "Where Can I see all My Orders?",
      answer: "You can view all your orders in the 'My Orders' section of your dashboard. This includes order history, tracking information, and delivery status.",
      order: 1
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is placed, you'll receive a tracking number via SMS and email. You can also track your order in real-time through your account dashboard.",
      order: 2
    },
    {
      question: "What are the payment options available?",
      answer: "We accept multiple payment methods including credit/debit cards, UPI, net banking, and we also offer credit terms up to 90 days for verified businesses.",
      order: 3
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer attractive bulk discounts for large orders. The discount percentage increases with order quantity. Contact our sales team for custom pricing.",
      order: 4
    },
    {
      question: "What is your return policy?",
      answer: "We have a flexible return policy. If you're not satisfied with your order, you can return it within 7 days of delivery. Perishable items have specific return conditions.",
      order: 5
    },
    {
      question: "Do you deliver on weekends?",
      answer: "Yes, we deliver 7 days a week including weekends. Our delivery hours are from 8 AM to 8 PM. Same-day delivery is available for orders placed before 2 PM.",
      order: 6
    }
  ];

  // Insert FAQs
  const insertedFaqs = await db.insert(faqs).values(faqsData).returning();
  console.log(`Inserted ${insertedFaqs.length} FAQs`);

  console.log("Database seeded successfully!");
}

// Run the seed function
seed().catch(console.error);