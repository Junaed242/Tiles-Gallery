import { Link } from "@heroui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">TileGallery</h3>
            <p className="text-gray-600 text-sm">
              Discover the perfect aesthetic for your home with our premium collection of globally sourced tiles.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-500">
              <Link href="#" color="foreground"><FaFacebook /></Link>
              <Link href="#" color="foreground"><FaTwitter /></Link>
              <Link href="#" color="foreground"><FaInstagram /></Link>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-600 text-sm">Email: info@tilegallery.com</p>
            <p className="text-gray-600 text-sm">Phone: +1 234 567 890</p>
            <p className="text-gray-600 text-sm">Address: 123 Tile St, Design City</p>
          </div>
        </div>
        <div className="border-t mt-10 pt-6 text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} TileGallery Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
}