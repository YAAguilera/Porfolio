import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (to) => {
    setActiveLink(to);
  };


  return (
    <header className='bg-bgPurple flex flex-row justify-center fixed top-0 left-0 w-full z-10'>
      <div className='flex flex-row justify-center w-full text-white font-semibold italic 
      xxl:gap-[5%] xxl:p-[2%] xxl:text-4xl 
      xl:gap-[4%] xl:p-[1%] xl:text-lg 
      lg:gap-[4%] lg:p-[1%] lg:text-lg 
      md:gap-[4%] md:p-[1%] md:text-md
      sm:gap-[4%] sm:p-[1%] sm:text-sm
      xs:gap-[2%] xs:p-[1%] xs:text-sm
      '>
        <Link
          to="about"
          smooth={true}
          duration={900}
          spy={true}
          activeClass="active"
          onSetActive={handleSetActive}
        >
          <button className={`hover:text-pink transition-all duration-500 ease-in-out ${activeLink === "about" && 'text-pink'}`}>About me</button>
        </Link>

        <Link
          to="tech"
          smooth={true}
          duration={900}
          spy={true}
          activeClass="active"
          onSetActive={handleSetActive}
        >
          <button className={`hover:text-pink transition-all duration-500 ease-in-out ${activeLink === "tech" && 'text-pink'}`}>Technologies</button>
        </Link>

        <Link
          to="exp"
          smooth={true}
          duration={900}
          spy={true}
          activeClass="active"
          onSetActive={handleSetActive}
        >
          <button className={`hover:text-pink transition-all duration-500 ease-in-out ${activeLink === "exp" && 'text-pink'}`}>Experience</button>
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={900}
          spy={true}
          activeClass="active"
          onSetActive={handleSetActive}
        >
          <button className={`hover:text-pink transition-all duration-500 ease-in-out ${activeLink === "projects" && 'text-pink'}`}>Projects</button>
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={900}
          spy={true}
          activeClass="active"
          onSetActive={handleSetActive}
    
        >
          <button className={`hover:text-pink transition-all duration-500 ease-in-out ${activeLink === "contact" && 'text-pink'}`}>Contact</button>
        </Link>
      </div>

      {/* <div className='flex flex-row justify-center align-middle items-center gap-3 mr-[3%] text-white font-semibold '>
        <button className='hover:text-orange transition-all duration-500 ease-in-out'>EN</button>
        <button className='hover:text-orange transition-all duration-500 ease-in-out'>ES</button>
      </div> */}
    </header>
  );
};

export default Nav;