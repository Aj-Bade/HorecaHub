import { pgTable, text, serial, integer, decimal, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  slug: text("slug").notNull().unique(),
});

export const vendors = pgTable("vendors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  rating: decimal("rating", { precision: 2, scale: 1 }).notNull(),
  productCount: integer("product_count").notNull(),
  imageUrl: text("image_url"),
  isVerified: boolean("is_verified").notNull().default(true),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  unit: text("unit").notNull(),
  imageUrl: text("image_url").notNull(),
  categoryId: integer("category_id").notNull(),
  vendorId: integer("vendor_id").notNull(),
  isTopPick: boolean("is_top_pick").notNull().default(false),
  inStock: boolean("in_stock").notNull().default(true),
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  order: integer("order").notNull(),
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
});

export const insertVendorSchema = createInsertSchema(vendors).omit({
  id: true,
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertFaqSchema = createInsertSchema(faqs).omit({
  id: true,
});

export type Category = typeof categories.$inferSelect;
export type Vendor = typeof vendors.$inferSelect;
export type Product = typeof products.$inferSelect;
export type FAQ = typeof faqs.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type InsertVendor = z.infer<typeof insertVendorSchema>;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertFAQ = z.infer<typeof insertFaqSchema>;
