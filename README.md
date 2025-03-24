# Saclai EdTech Platform

A cutting-edge edtech platform designed for Saclai, a company that partners with business schools to deliver engaging and personalized learning experiences for business professionals.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Bilingual Support**: Complete English and French language translations
- **Course Catalog**: Interactive course discovery with filtering by category
- **Modern UI Components**: Using ShadcnUI with custom theming
- **Testimonials**: Showcasing user success stories with ratings
- **Company Information**: About page with company mission and values
- **Contact Form**: For user inquiries and support requests
- **Trusted Partners**: Showcase of business partners and clients

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: TailwindCSS with ShadcnUI components
- **Backend**: Express.js server
- **State Management**: React Context API
- **Internationalization**: Custom language context for multi-language support
- **Data Fetching**: TanStack React Query
- **Routing**: Wouter for client-side routing

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/ladame/saclai.git
   cd saclai
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Project Structure

- `/client` - React frontend application
  - `/src/components` - Reusable UI components
  - `/src/pages` - Page components for different routes
  - `/src/context` - Context providers for state management
  - `/src/lib` - Utility functions and constants
  - `/src/assets` - Static assets like icons

- `/server` - Express.js backend server
  - Main API routes and server configuration

- `/shared` - Shared types and schemas between frontend and backend

- `/attached_assets` - Original images and design assets