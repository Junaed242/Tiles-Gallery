import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-100 border-t">
      <div className="md:px-20 mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="text-xl font-bold italic">
              <span className="text-primary">Tile</span>Gallery
            </Link>
            <p className="text-base-content/70 text-sm leading-relaxed">
              Elevating spaces with premium surfaces. Discover your perfect aesthetic with our curated collection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/all-tiles" className="hover:text-primary transition-colors">All Tiles</Link></li>
              <li><Link href="/my-profile" className="hover:text-primary transition-colors">My Profile</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm text-base-content/70">
              <li>info@tilegallery.com</li>
              <li>+1 (234) 567-890</li>
              <li>123 Studio St, Design District</li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Follow Us</h4>
            <div className="flex gap-5 text-xl">
              <Link href="#" className="text-base-content/60 hover:text-primary transition-all">
                <FaFacebook />
              </Link>
              <Link href="#" className="text-base-content/60 hover:text-primary transition-all">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-base-content/60 hover:text-primary transition-all">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-base-content/50">
            © {new Date().getFullYear()} TileGallery. Designed for aesthetic excellence.
          </p>
          <div className="flex gap-6 text-xs text-base-content/50">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}