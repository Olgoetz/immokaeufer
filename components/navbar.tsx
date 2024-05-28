import React from "react";
import { navLinks } from "./nabar-links";
import Link from "next/link";
function Navbar() {
  return (
    <main>
      <nav>
        <ul className="hidden md:flex justify-between max-w-[1000px] mx-auto h-24 items-center mb-5">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.label}
              className="rounded-md p-3 hover:bg-green-400 hover:text-white "
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
