# 🏺 TileGallery - Premium Aesthetic Surfaces

A sophisticated web application to showcase and manage a premium tile gallery, built with Next.js and BetterAuth.

**Live URL:** [Vercel](https://tiles-gallery-vert.vercel.app/)
**Server API:** [Render](https://tiles-api-1x4b.onrender.com/tiles)

## 🎯 Purpose
This project is designed to provide users with a seamless experience to discover, search, and view details of high-end architectural tiles. It emphasizes performance, secure authentication, and a clean, modern "Dark Studio" aesthetic.

## 🚀 Key Features
- **Secure Authentication:** Implemented BetterAuth with MongoDB adapter, featuring Email/Password and Google Social Login.
- **Dynamic Gallery:** Real-time search functionality on the "All Tiles" page.
- **Private Routes:** User profile and Tile Details are protected and require authentication.
- **Profile Management:** Users can update their display name and profile picture URL.
- **Optimized UI:** High-performance image loading using Next.js Image component and smooth animations via Animate.css.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop views.

## 🛠️ Tech Stack & Packages
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS & DaisyUI
- **Authentication:** BetterAuth
- **Database:** MongoDB (Users/Sessions) & JSON Server (Tile Data)
- **Libraries:** 
  - `animate.css` (Entrance animations)
  - `react-fast-marquee` (Hero announcements)
  - `react-hook-form` (Form handling)
  - `react-hot-toast` (Notifications)
  - `react-icons` (UI elements)