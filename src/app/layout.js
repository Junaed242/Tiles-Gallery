import { Inter } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TileGallery | Premium Aesthetics",
  description: "Browse our exclusive gallery of high-quality tiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
          <AppNavbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        
        <Toaster position="top-center" />
      </body>
    </html>
  );
}