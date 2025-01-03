import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='p-2.5 w-full flex justify-between items-center border-[#436850] border-b-black border-2 bg-[#436850] '>
      <a href="/">
        <img
          src="./static/profil.png"
          alt="Profile picture"
          className="w-12 h-12 rounded-full m-2.5 border-2 border-border"
        />
      </a>
      <nav className='flex justify-evenly w-1/2'>
        <a href="/projects" className='no-underline text-foreground font-semibold text-lg hover:underline'>Projects</a>
        <a href="/about" className='no-underline text-foreground font-semibold text-lg hover:underline'>About me</a>
        <a href="/contact" className='no-underline text-foreground font-semibold text-lg hover:underline'>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
