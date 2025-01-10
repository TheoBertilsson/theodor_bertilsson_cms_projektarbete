import Link from "next/link";
import React from "react";
const Header: React.FC = () => {
  return (
    <header className="p-4 w-full flex justify-between items-center bg-[#436850] shadow-lg">
      <Link href="/" className="text-3xl font-semibold text-foreground">
        TB
      </Link>
      <nav className="flex justify-evenly gap-10">
        <Link
          href="/projects"
          className="no-underline text-foreground font-semibold text-xl hover:underline"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="no-underline text-foreground font-semibold text-xl hover:underline"
        >
          About me
        </Link>
        <Link
          href="/contact"
          className="no-underline text-foreground font-semibold text-xl hover:underline"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
