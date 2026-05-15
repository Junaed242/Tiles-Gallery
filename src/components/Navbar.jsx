"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, authClient } from "@/lib/auth-client"; // Real Auth

export default function AppNavbar() {
  const pathname = usePathname();
  const { data: session } = useSession(); // Hook to get current user

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? "text-primary font-bold" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/all-tiles"
          className={pathname === "/all-tiles" ? "text-primary font-bold" : ""}
        >
          All Tiles
        </Link>
      </li>
      {session && (
        <li>
          <Link
            href="/my-profile"
            className={
              pathname === "/my-profile" ? "text-primary font-bold" : ""
            }
          >
            My Profile
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b px-4 md:px-8">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="text-xl font-bold italic">
          <span className="text-primary">Tile</span>Gallery
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {!session ? (
          <Link href="/login" className="btn btn-primary btn-sm">Login</Link>
        ) : (
          <div className="flex items-center gap-4">
             {/* User Avatar */}
             <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={session.user.image || "https://ui-avatars.com/api/?name=" + session.user.name} />
                </div>
             </div>
             <button onClick={handleLogout} className="btn btn-error btn-outline btn-sm">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}