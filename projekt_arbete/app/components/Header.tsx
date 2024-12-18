import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='text-center p-2.5 w-full flex justify-between items-center border-b-black border'>
      <a href="/">
        <img
          src="./static/profil.png"
          alt="Profile picture"
          className="w-12 h-12 rounded-full m-2.5"
        />
      </a>
      <nav className='flex justify-evenly w-1/2'>
        <a href="/projects" className='no-underline text-black text-lg font-medium hover:underline'>Projects</a>
        <a href="/about" className='no-underline text-black text-lg font-medium hover:underline'>About me</a>
        <a href="/contact" className='no-underline text-black text-lg font-medium hover:underline'>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
