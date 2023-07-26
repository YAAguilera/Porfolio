import React from 'react'
import figma from '../imgs/figma.svg'
import js from '../imgs/javascript.svg'
import react from '../imgs/react.svg'
import redux from '../imgs/redux.svg'
import tw from '../imgs/tailwind.svg'
import css from '../imgs/css.svg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Technology = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main id="tech" className='bg-bgPurple h-full w-screen flex flex-col justify-center items-center '>
      <h1 className='text-orange font-semibold p-[3%] italic mt-[5%]
      xxl:text-8xl
      xl:text-5xl xl:mt-32
      lg:text-5xl lg:mb-10
      md:text-4xl
      sm:text-4xl
      xs:text-3xl 
      '>Technologies</h1>
      <section className='grid grid-cols-3 grid-rows-2 xxl:gap-[15em] xl:gap-[6em] lg:gap-[4em] md:gap-[2em] sm:gap-[2em] xs:gap-[2em] p-[3%]'>
        <img data-aos="zoom-in" src={js} alt="js" className='xxl:w-[20em] xl:w-[10em] lg:w-[8em] md:w-[7em] sm:w-[6em] xs:w-[5em] ' />
        <img data-aos="zoom-in" src={react} alt="react" className='xxl:w-[20em] xl:w-[10em] lg:w-[8em] md:w-[7em] sm:w-[6em] xs:w-[5em]'/>
        <img data-aos="zoom-in" src={redux} alt="redux" className='xxl:w-[20em] xl:w-[10em] lg:w-[8em] md:w-[7em] sm:w-[6em] xs:w-[5em]'/>
        <img data-aos="zoom-in" src={css} alt='css' className='xxl:w-[20em] xl:w-[10em] lg:w-[8em] md:w-[7em] sm:w-[6em] xs:w-[5em]'/>
        <img data-aos="zoom-in" src={tw} alt="tw" className='xxl:w-[20em] xl:w-[10em] lg:w-[8em] md:w-[7em] sm:w-[6em] xs:w-[5em]'/>
        <img data-aos="zoom-in" src={figma} alt="figma" className='xxl:w-[20em] xl:w-[10em] lg:w-[8em] md:w-[7em] sm:w-[6em] xs:w-[5em]'/>
      </section>
    </main>
)}

export default Technology