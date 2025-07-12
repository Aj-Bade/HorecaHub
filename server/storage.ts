import { 
  categories, 
  vendors, 
  products, 
  faqs,
  type Category, 
  type Vendor, 
  type Product, 
  type FAQ,
  type InsertCategory,
  type InsertVendor,
  type InsertProduct,
  type InsertFAQ
} from "@shared/schema";

export interface IStorage {
  // Categories
  getCategories(): Promise<Category[]>;
  getCategoryById(id: number): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  
  // Vendors
  getVendors(): Promise<Vendor[]>;
  getVendorById(id: number): Promise<Vendor | undefined>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductsByCategory(categoryId: number): Promise<Product[]>;
  getProductsByVendor(vendorId: number): Promise<Product[]>;
  getTopPickProducts(): Promise<Product[]>;
  
  // FAQs
  getFaqs(): Promise<FAQ[]>;
}

export class MemStorage implements IStorage {
  private categories: Map<number, Category>;
  private vendors: Map<number, Vendor>;
  private products: Map<number, Product>;
  private faqs: Map<number, FAQ>;
  private currentCategoryId: number;
  private currentVendorId: number;
  private currentProductId: number;
  private currentFaqId: number;

  constructor() {
    this.categories = new Map();
    this.vendors = new Map();
    this.products = new Map();
    this.faqs = new Map();
    this.currentCategoryId = 1;
    this.currentVendorId = 1;
    this.currentProductId = 1;
    this.currentFaqId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed categories
    const categoriesData: InsertCategory[] = [
      {
        name: "Dips & Condiments",
        description: "Mayo, Spreads, Dips, Pickle, Papad",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/1/Dips.png",
        slug: "dips-condiments"
      },
      {
        name: "Gravy, Sauces & Purees",
        description: "Conti & Oriental Sauces, Gravies, Purees",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/2/Gravy.png",
        slug: "gravy-sauces-purees"
      },
      {
        name: "Specialty Products",
        description: "Noodles, Pasta, Canned, Coatings",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/3/Specialty.png",
        slug: "specialty-products"
      },
      {
        name: "Masala & Seasonings",
        description: "Herbs, Spices, Marinades, Seasonings",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/4/masalanSeasonings.png",
        slug: "masala-seasonings"
      },
      {
        name: "Kirana & Grocery",
        description: "Rice, Dal, Foodgrains, Dry Fruits",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/5/KirananGrocery.png",
        slug: "kirana-grocery"
      },
      {
        name: "Beverage Supplies",
        description: "Syrups, Premixes, Tea, Coffee, Crush, Juices",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/6/beverage.png",
        slug: "beverage-supplies"
      },
      {
        name: "Oil & Ghee",
        description: "Cooking Oil, Olive, Salad Oils, Ghee",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/7/OilnGhee.png",
        slug: "oil-ghee"
      },
      {
        name: "Bakery & Desserts",
        description: "Chocolate, Premixes, Bakery & Dessert",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/8/bakeryndessert.png",
        slug: "bakery-desserts"
      },
      {
        name: "Frozen Supplies",
        description: "Frozen snacks, Cold Cuts, Heat & Eat",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/9/Frozen.png",
        slug: "frozen-supplies"
      },
      {
        name: "Pan Asian",
        description: "Oriental, Thai, Korean, Japanese",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/10/PanAsian.png",
        slug: "pan-asian"
      },
      {
        name: "Dairy & Cheese",
        description: "Cream, Cheese, Butter, Paneer",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/11/DairynCheese.png",
        slug: "dairy-cheese"
      },
      {
        name: "Vegetables",
        description: "Exotic, Indian, Microgreens, Imported, Canned, Fruits",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/master/category/13/Vegetables.png",
        slug: "vegetables"
      }
    ];

    categoriesData.forEach(category => {
      const id = this.currentCategoryId++;
      this.categories.set(id, { ...category, id });
    });

    // Seed vendors
    const vendorsData: InsertVendor[] = [
      {
        name: "Horeca1",
        description: "Premium Restaurant Supplies",
        rating: "4.8",
        productCount: 1000,
        imageUrl: "",
        isVerified: true
      },
      {
        name: "Masala Central",
        description: "Spices & Seasonings Specialist",
        rating: "4.9",
        productCount: 500,
        imageUrl: "",
        isVerified: true
      },
      {
        name: "Dairy Direct Wholesale",
        description: "Fresh Dairy Products",
        rating: "4.7",
        productCount: 300,
        imageUrl: "",
        isVerified: true
      },
      {
        name: "Shree Enterprise Coffee Traders",
        description: "Coffee & Tea Suppliers",
        rating: "4.8",
        productCount: 250,
        imageUrl: "",
        isVerified: true
      },
      {
        name: "Vitocare Oil Depot",
        description: "Cooking Oils & Ghee",
        rating: "4.6",
        productCount: 180,
        imageUrl: "",
        isVerified: true
      },
      {
        name: "DaVinci Gourmet",
        description: "Premium Syrups & Sauces",
        rating: "4.9",
        productCount: 350,
        imageUrl: "",
        isVerified: true
      }
    ];

    vendorsData.forEach(vendor => {
      const id = this.currentVendorId++;
      this.vendors.set(id, { 
        ...vendor, 
        id,
        imageUrl: vendor.imageUrl || null,
        isVerified: vendor.isVerified ?? true
      });
    });

    // Seed products
    const productsData: InsertProduct[] = [
      {
        name: "Davinci Mango Smoothie Blend 1Ltr",
        description: "Premium mango smoothie blend perfect for restaurants",
        price: "768.64",
        unit: "1 pack",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/items/2/6388.png",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      },
      {
        name: "Davinci Passion Fruit Smoothie 1 Ltr",
        description: "Tropical passion fruit smoothie for beverages",
        price: "786.64",
        unit: "1 pack",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/items/2/4606.png",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      },
      {
        name: "Davinci Mixed Berry Smoothie 1 Ltr",
        description: "Delicious mixed berry smoothie blend",
        price: "786.64",
        unit: "1 pack",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/items/2/4647.png",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      },
      {
        name: "Davinci Chocolate Sauce 2 Ltr",
        description: "Rich chocolate sauce for desserts and beverages",
        price: "921.19",
        unit: "1 pack",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/items/2/6099.png",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      },
      {
        name: "Davinci Strawberry Syrup 750 ml",
        description: "Natural strawberry syrup for drinks",
        price: "439.83",
        unit: "1 pack",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/items/2/4085.png",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      },
      {
        name: "Davinci Tiramisu Syrup 750 ml",
        description: "Authentic tiramisu flavored syrup",
        price: "413.55",
        unit: "1 pack",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/items/2/4645.png",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      },
      {
        name: "Davinci Pink Grapefruit Syrup 750 ml",
        description: "Refreshing pink grapefruit syrup",
        price: "439.83",
        unit: "1 pack",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/items/2/Z0051.png",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      },
      {
        name: "Davinci Roasted Hazelnut Syrup 750 ml",
        description: "Premium roasted hazelnut syrup",
        price: "413.55",
        unit: "1 pack",
        imageUrl: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=400&fit=crop",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      },
      {
        name: "Davinci Peach Garden Syrup 750 Ml",
        description: "Sweet peach garden syrup for beverages",
        price: "439.83",
        unit: "1 pack",
        imageUrl: "https://user-files-horeca1.blr1.digitaloceanspaces.com/items/2/4084.png",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      },
      {
        name: "Davinci Green Apple Syrup 750 ml",
        description: "Fresh green apple syrup",
        price: "439.83",
        unit: "1 pack",
        imageUrl: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400&h=400&fit=crop",
        categoryId: 6,
        vendorId: 6,
        isTopPick: true,
        inStock: true
      }
    ];

    productsData.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { 
        ...product, 
        id,
        description: product.description || null,
        isTopPick: product.isTopPick ?? false,
        inStock: product.inStock ?? true
      });
    });

    // Seed FAQs
    const faqsData: InsertFAQ[] = [
      {
        question: "Where Can I see all My Orders?",
        answer: "Once you login to your account, your Dashboard provides details of all Previously Fulfilled Orders, Cancelled & Pending Orders.",
        order: 1
      },
      {
        question: "How can I Edit or cancel orders?",
        answer: "As a B2B platform, different products have different order modification & cancellation policy. In general most orders can be modified or cancelled (except daily provisions & perishables) till two hours of the order being placed. See order cancellation policy for each product category before placing your order.",
        order: 2
      },
      {
        question: "How Can I track my Order?",
        answer: "Once an order has been shipped, you will get a shipment confirmation email. The email will include the name of the logistic service provider company along with the consignment number which can then be tracked on the website of the logistic provider in most of the cases.",
        order: 3
      },
      {
        question: "Purchase Protection",
        answer: "As a B2B platform, we are committed to ensuring Purchase Protection for customers by offering genuine products, secure payments and easy grievance redressal for items purchased through Horeca1. However, please note that Horeca1 is a retailer/wholeseller platform ONLY, and claims no responsibilities for Manufacturer's warranties, post-sale services, etc which are exclusively the domain of the Manufacturer / Company Authorised Seller.",
        order: 4
      },
      {
        question: "Grievance Redressal",
        answer: "For any issues related to purchases on HCX Global, Customers can contact our Customer Service via email - sales@horeca1.com or call 7710920002. Our Customer Service Representatives will escalate the matter to respective parties to get the issue resolved at the earliest.",
        order: 5
      }
    ];

    faqsData.forEach(faq => {
      const id = this.currentFaqId++;
      this.faqs.set(id, { ...faq, id });
    });
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryById(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(cat => cat.slug === slug);
  }

  async getVendors(): Promise<Vendor[]> {
    return Array.from(this.vendors.values());
  }

  async getVendorById(id: number): Promise<Vendor | undefined> {
    return this.vendors.get(id);
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.categoryId === categoryId);
  }

  async getProductsByVendor(vendorId: number): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.vendorId === vendorId);
  }

  async getTopPickProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.isTopPick);
  }

  async getFaqs(): Promise<FAQ[]> {
    return Array.from(this.faqs.values()).sort((a, b) => a.order - b.order);
  }
}

export const storage = new MemStorage();
