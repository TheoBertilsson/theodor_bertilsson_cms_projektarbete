import React from "react";
const Header: React.FC = () => {
  return (
    <header className="p-4 w-full flex justify-between items-center bg-[#436850] shadow-lg">
      <a href="/" className="text-3xl font-semibold text-foreground">
        TB
      </a>
      <nav className="flex justify-evenly gap-10">
        <a
          href="/projects"
          className="no-underline text-foreground font-semibold text-xl hover:underline"
        >
          Projects
        </a>
        <a
          href="/about"
          className="no-underline text-foreground font-semibold text-xl hover:underline"
        >
          About me
        </a>
        <a
          href="/contact"
          className="no-underline text-foreground font-semibold text-xl hover:underline"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
