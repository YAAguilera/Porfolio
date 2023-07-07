import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { MdLanguage } from "react-icons/md";
const Nav = () => {

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };


  return (
    <header className='bg-bgPurple flex flex-row justify-center fixed top-0 left-0 w-full z-10'>
    <div className='flex flex-row justify-center gap-[5%] p-[1%] w-full text-lg text-white font-semibold italic'>
      <Link to="about" smooth={true} duration={900}>
        <button className='hover:text-pink transition-all duration-500 ease-in-out'>About me</button>
      </Link>

      <Link to="tech" smooth={true} duration={900}>
        <button className='hover:text-pink transition-all duration-500 ease-in-out'>Technologies</button>
      </Link>

      <Link to="exp" smooth={true} duration={900}>
        <button className='hover:text-pink transition-all duration-500 ease-in-out'>Experience</button>
      </Link>

      <Link to="projects" smooth={true} duration={900}>
        <button className='hover:text-pink transition-all duration-500 ease-in-out'>Projects</button>
      </Link>

      <Link to="contact" smooth={true} duration={900}>
        <button className='hover:text-pink transition-all duration-500 ease-in-out'>Contact</button>
      </Link>
    </div>

    <div className='flex flex-col justify-center align-middle items-center mr-[3%]'>
      <button
        className='text-white text-2xl hover:text-orange mr-[2%] transition-all duration-500 ease-in-out'
        onClick={toggleOptions}
      >
        <MdLanguage />
      </button>

      {showOptions && (
        <div className='mt-20 text-pink italic'>
          <button className='hover:font-bold'>English</button>
          <button className='hover:font-bold'>Español</button>
        </div>
      )}
    </div>
  </header>
);
}

export default Nav