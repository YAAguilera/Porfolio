import React from 'react'
import teesa from '../imgs/teesa.png'
import poke from '../imgs/poke.png'
import carp from '../imgs/carp.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Proyects = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <main id="projects" className='bg-bgPurple h-full w-full flex flex-col justify-center items-center p-[4%] xxl:gap-[2em] xl:gap-[2em] lg:gap-[2em] md:gap-[1em] sm:gap-[1em] xs:gap-[1em]'>
      <h1 className='text-orange font-semibold italic p-[3%] mt-[-25px] 
      xxl:text-8xl 
      xl:text-5xl 
      lg:text-5xl lg:mt-[10%]
      md:text-4xl
      sm:text-4xl
      xs:text-3xl 
      '>Projects</h1>

      <section className='flex xxl:flex-row xl:flex-row lg:flex-row justify-center items-center xxl:gap-[20%] xl:gap-[10%] lg:gap-[5%] md:flex-col md:gap-[1em]
      sm:flex-col sm:gap-[1em]
      xs:flex-col xs:gap-[1em]
      '>

        <article data-aos="flip-left" className='flex flex-col justify-center items-center rounded-xl bg-gradient-to-r from-lilac via-pink to-orange
        xxl:w-[55em] xxl:h-[52em] xxl:p-1
        xl:w-[35em] xl:h-[32em] xl:p-1
        lg:w-[30em] lg:h-[29em] lg:p-1
        md:w-[20em] md:h-[25em] md:p-1
        sm:w-[20em] sm:h-[25em] sm:p-1
        xs:w-[20em] xs:h-[25em] xs:p-1
        '>
          <div className='w-full h-full rounded-xl p-[2%] bg-bgPurple flex flex-col justify-center items-center xxl:gap-[7%] xl:gap-[2%] lg:gap-[2%] md:gap-[2%] sm:gap-[1%] xs:gap-[1%]'>
          <h1 className=' text-pink font-semibold italic underline
          xxl:text-4xl
          xl:text-2xl
          lg:text-2xl
          md:text-xl
          sm:text-xl
          xs:text-xl
          '>TEESA</h1>
          <img src={teesa} alt="teesa" className='rounded-lg'/>
          <h6 className='text-white xxl:text-md xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-sm text-center font-semibold'>An e-commerce platform dedicated to selling technology in food equipment.</h6>
          <div className='text-white xxl:text-md xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-sm'>
            <p>Technologies used:</p>
            <p>• Front-end: React and Redux-ToolKit</p>
            <p>• Back-end: Node.js and Express.</p>
            <p>• Database: PostgreSQL with Sequelize as the ORM.</p>
          </div>
          <div className='flex flex-row justify-center align-middle items-center gap-3'>
            <button className='bg-gradient-to-r from-lilac via-pink to-orange rounded-3xl text-white  transition-all duration-500 ease-in-out hover:transform hover:scale-110
            xxl:text-lg xxl:p-3
            xl:text-md xl:p-2
            lg:text-md lg:p-2
            md:text-sm md:p-1
            sm:text-sm sm:p-1
            xs:text-sm xs:p-1
            '>
              <a href="https://pf-teesa-front.vercel.app/">Live preview</a>
            </button>
            <button className='border-[1px] border-white rounded-3xl text-white transition-all duration-500 ease-in-out hover:transform hover:scale-110
            xxl:text-lg xxl:p-3
            xl:text-md xl:p-2
            lg:text-md lg:p-2
            md:text-sm md:p-1
            sm:text-sm sm:p-1
            xs:text-sm xs:p-1
            '>
              <a href="https://github.com/LauraCayuelaT/PFTeesa_Front">Check out Github</a>
            </button>
          </div>
          </div>
        </article>

        <article data-aos="flip-left" className='flex flex-col justify-center items-center rounded-xl bg-gradient-to-r from-lilac via-pink to-orange
        xxl:w-[55em] xxl:h-[52em] xxl:p-1
        xl:w-[35em] xl:h-[32em] xl:p-1
        lg:w-[30em] lg:h-[29em] lg:p-1
        md:w-[20em] md:h-[25em] md:p-1
        sm:w-[20em] sm:h-[25em] sm:p-1
        xs:w-[20em] xs:h-[25em] xs:p-1
        '>
        <div className='w-full h-full rounded-xl p-[2%] bg-bgPurple flex flex-col justify-center items-center xxl:gap-[7%] xl:gap-[2%] lg:gap-[2%] md:gap-[2%] sm:gap-[1%] xs:gap-[1%]'>
          <h1 className='text-pink font-semibold italic underline
          xxl:text-4xl
          xl:text-2xl
          lg:text-2xl
          md:text-xl
          sm:text-xl
          xs:text-xl
          '>PokeNet</h1>
          <img src={poke} alt="poke" className='rounded-lg'/>
          <h6 className='text-white text-center font-semibold
          xxl:text-md xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-sm
          '>Pokémon website with details, searches, filters, orders, and a custom Pokémon creator.</h6>
          <div className='text-white 
          xxl:text-md xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-sm
          '>
            <p>Technologies used:</p>
            <p>• Front-end: React and Redux</p>
            <p>• Back-end: Node.js and Express.</p>
            <p>• Database: PostgreSQL y Sequelize.</p>
          </div>
         
          <div className='flex flex-row justify-center align-middle items-center gap-3'>
            <button className='bg-gradient-to-r from-lilac via-pink to-orange p-2 rounded-3xl text-white  transition-all duration-500 ease-in-out hover:transform hover:scale-110
            xxl:text-lg xxl:p-3
            xl:text-md xl:p-2
            lg:text-md lg:p-2
            md:text-sm md:p-1
            sm:text-sm sm:p-1
            xs:text-sm xs:p-1
            '>
              <a href="https://github.com/YAAguilera/PI-Pokemon">Check out Github</a>
            </button>
          </div>
          </div>
        </article>
        
      </section>
      <section className='flex xxl:flex-row xl:flex-row lg:flex-row justify-center items-center xxl:gap-[20%] xl:gap-[10%] lg:gap-[5%] md:flex-col md:gap-[2%]
      sm:flex-col sm:gap-[1em]
      xs:flex-col xs:gap-[1em]
      '>
        <article data-aos="flip-left" className='flex flex-col justify-center items-center rounded-xl bg-gradient-to-r from-lilac via-pink to-orange
        xxl:w-[55em] xxl:h-[52em] xxl:p-1
        xl:w-[35em] xl:h-[32em] xl:p-1
        lg:w-[30em] lg:h-[29em] lg:p-1
        md:w-[20em] md:h-[25em] md:p-1
        sm:w-[20em] sm:h-[25em] sm:p-1
        xs:w-[20em] xs:h-[25em] xs:p-1
        '>
          <div className='w-full h-full rounded-xl p-[2%] bg-bgPurple flex flex-col justify-center items-center xxl:gap-[7%] xl:gap-[2%] lg:gap-[2%] md:gap-[2%] sm:gap-[1%] xs:gap-[1%]'>
          <h1 className=' text-pink font-semibold italic underline
          xxl:text-4xl
          xl:text-2xl
          lg:text-2xl
          md:text-xl
          sm:text-xl
          xs:text-xl
          '>Carpentry Aguilera</h1>
          <img src={carp} alt="carp" className='rounded-lg'/>
          <h6 className='text-white xxl:text-md xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-sm text-center font-semibold'>A landing page that showcases featured works, services offered, FAQs, and contact options with a captivating and functional design.</h6>
          <div className='text-white xxl:text-md xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-sm'>
            <p className='text-center'>Technologies used:</p>
            <p>JavaScript, React, Tailwind, Swiper, React icons and AOS </p>
          </div>
          <div className='flex flex-row justify-center align-middle items-center gap-3'>
            <button className='bg-gradient-to-r from-lilac via-pink to-orange rounded-3xl text-white  transition-all duration-500 ease-in-out hover:transform hover:scale-110
            xxl:text-lg xxl:p-3
            xl:text-md xl:p-2
            lg:text-md lg:p-2 
            md:text-sm md:p-1
            sm:text-sm sm:p-1
            xs:text-sm xs:p-1
            '>
              <a href="https://carpinteria-ruddy.vercel.app/">Live preview</a>
            </button>
            <button className='border-[1px] border-white rounded-3xl text-white transition-all duration-500 ease-in-out hover:transform hover:scale-110
            xxl:text-lg xxl:p-3
            xl:text-md xl:p-2
            lg:text-md lg:p-2
            md:text-sm md:p-1
            sm:text-sm sm:p-1
            xs:text-sm xs:p-1
            '>
              <a href="https://github.com/YAAguilera/Carpinteria">Check out Github</a>
            </button>
          </div>
          </div>
        </article> 
      </section>

    </main>
  )
}

export default Proyects