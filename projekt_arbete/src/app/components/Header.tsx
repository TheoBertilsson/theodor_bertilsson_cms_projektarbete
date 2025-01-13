import Link from "next/link";
import React from "react";
const Header: React.FC = () => {
  return (
    <header className="p-4 w-full flex justify-between items-center bg-[#436850] shadow-lg">
      <Link href="/" className="text-3xl font-semibold text-foreground h-11">
        TB
      </Link>
      <nav className="flex justify-evenly items-center gap-10">
        <Link
          href="/projects"
          className="no-underline text-foreground font-semibold text-xl hover:underline h-11"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="no-underline text-foreground font-semibold text-xl hover:underline h-11"
        >
          About me
        </Link>
        <Link
          href="/contact"
          className="no-underline text-foreground font-semibold text-xl hover:underline h-11"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
