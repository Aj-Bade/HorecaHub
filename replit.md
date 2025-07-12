# Horeca1 Restaurant Supply Platform

## Overview

This is a full-stack web application for a restaurant supply platform called "Horeca1". The application is built with a modern React frontend and Express.js backend, designed to connect restaurants with verified suppliers and provide a comprehensive marketplace for restaurant supplies and ingredients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Animations**: Framer Motion for smooth interactions and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development**: Hot reloading with Vite middleware integration
- **API Design**: RESTful API with JSON responses

### Key Design Decisions

1. **Monorepo Structure**: Uses a shared folder for database schema and types, enabling type safety across frontend and backend
2. **Database-First Design**: Drizzle ORM with PostgreSQL for robust data management
3. **Component-Based UI**: Extensive use of Radix UI primitives with custom styling
4. **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
5. **Performance Optimization**: TanStack Query for efficient data fetching and caching

## Key Components

### Database Schema (shared/schema.ts)
- **Categories**: Product categories with slug-based routing
- **Vendors**: Supplier information with ratings and verification status
- **Products**: Inventory items with category and vendor relationships
- **FAQs**: Frequently asked questions with ordering

### API Endpoints (server/routes.ts)
- **Categories**: CRUD operations for product categories
- **Vendors**: Vendor management and listing
- **Products**: Product catalog with filtering capabilities
- **FAQs**: Static content management

### Frontend Pages
- **Home**: Hero section, categories, vendors, products, statistics, FAQs, contact
- **Products**: Product catalog with search and filtering
- **Vendors**: Vendor directory with ratings and verification badges
- **404**: Custom not found page

### UI Components
- **Reusable Cards**: Category, product, and vendor cards with hover animations
- **Navigation**: Responsive navbar with mobile menu
- **Forms**: Contact forms with validation
- **Animations**: Scroll-triggered animations and micro-interactions

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with database
3. **Database Operations**: Drizzle ORM executes PostgreSQL queries
4. **Response Handling**: JSON responses sent back to client
5. **Client Updates**: TanStack Query manages cache and updates UI

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessibility
- **Animations**: Framer Motion for smooth transitions
- **HTTP Client**: Built-in fetch with TanStack Query
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React icon library

### Backend Dependencies
- **Database**: Neon PostgreSQL with connection pooling
- **ORM**: Drizzle ORM with Zod schema validation
- **Session Management**: Express sessions with PostgreSQL store
- **Development Tools**: TSX for TypeScript execution

## Deployment Strategy

### Development Setup
- **Frontend**: Vite dev server with HMR
- **Backend**: Express server with Vite middleware integration
- **Database**: Neon PostgreSQL with environment-based configuration

### Production Build
- **Frontend**: Vite build to static assets
- **Backend**: ESBuild bundle for Node.js runtime
- **Database**: Drizzle migrations for schema management

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific configuration for development tools

The application follows modern web development practices with strong typing, component reusability, and performance optimization. The architecture supports easy scaling and maintenance while providing a smooth user experience for restaurant owners and suppliers.