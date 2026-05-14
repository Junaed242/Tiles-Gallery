import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TileGallery | Premium Aesthetics",
  description: "Browse our exclusive gallery of high-quality tiles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <AppNavbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}