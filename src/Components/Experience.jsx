import React from 'react'
import henry from '../imgs/henry.svg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <main id="exp" className='bg-bgPurple h-full w-screen flex flex-col justify-center items-center xxl:p-[7%] xl:p-[7%] lg:p-[7%] md:p-[7%] sm:p-[4%]'>
      <h1 className='text-pink font-semibold italic p-[3%]
      xxl:text-8xl
      xl:text-5xl
      lg:text-5xl 
      md:text-4xl
      sm:text-4xl
      xs:text-3xl 
      '>Experience</h1>
      <section className='flex flex-col justify-center items-center gap-6 '>
      <article data-aos="fade-right" className='bg-purple flex justify-center items-center text-white p-[2%] xxl:flex-row xxl:w-[150%] xxl:h-[12em] xxl:gap-[3%] xl:flex-row xl:w-[100%] xl:h-[8em] lg:flex-row lg:w-[100%] lg:h-[8em] md:flex-row sm:flex-col sm:h-[17em] xs:flex-col xs:h-[15em] xs:w-[90%]'>
      <img src={henry} alt="logo" className='xxl:h-[7em] xl:h-[7em] lg:h-[7em] md:h-[7em] sm:h-[4em] xs:h-[4em]'/>
        <div className='flex flex-col xxl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[100%] xs:w-[100%] xxl:text-start xl:text-start lg:text-start md:text-start xs:text-center sm:text-center'>
        <h1 className='xxl:text-4xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-md xs:text-md font-bold text-pink'>Full Stack Developer-Henry Bootcamp</h1>
        <h3 className='xxl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-sm xs:text-sm italic'>Feb 2023 - Jun 2023</h3>
        </div>
        <div className='flex flex-row justify-center items-center align-middle xxl:text-lg xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-xs'>
        <p className='w-[45%] font-semibold'>700+ hours of theorical-practical course of:</p>
        <div className='flex flex-row gap-1 '>
        <div className='flex flex-col'>
        <p>• HTML</p>
        <p>• CSS</p>
        <p>• JavaScript</p>
        <p>• React</p>
        </div>
       <div  className='flex flex-col'>
       <p>• Redux</p>
        <p>• Express</p>
        <p>• MySQL</p>
        <p>• Node.js</p>
       </div>
       </div>
        </div>
      </article>

      <article data-aos="fade-left" className='bg-purple flex justify-center items-center text-white p-[2%] xxl:flex-row xxl:w-[150%] xxl:h-[12em] xxl:gap-[3%] xl:flex-row xl:w-[100%] xl:h-[8em] lg:flex-row lg:w-[100%] lg:h-[8em] md:flex-row sm:flex-col sm:h-[17em] xs:flex-col xs:h-[15em] xs:w-[90%]'>
      <img src={henry} alt="logo" className='xxl:h-[7em] xl:h-[7em] lg:h-[7em] md:h-[7em] sm:h-[4em] xs:h-[4em]'/>
        <div className='flex flex-col xxl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[100%] xs:w-[100%] xxl:text-start xl:text-start lg:text-start md:text-start xs:text-center sm:text-center'>
        <h1 className='xxl:text-4xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-md xs:text-md font-bold text-pink'>Full Stack Teaching Assistant</h1>
        <h3 className='xxl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-sm xs:text-sm italic'>Apr 2023 - June 2023</h3>
        </div>
        <div className='flex flex-col xxl:text-lg xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-xs'>
        <p>• Coordinate the group of students with the aim of achieving their adaptation to the program.</p>
        <p>• Guide students in the initial steps of the course and address their concerns.</p>
        <p>• Assist and support in solving exercises and promote group collaboration (Pair Programming).</p>
        <p>• Promote group cohesion and build community.</p>
        </div>
      </article>
      </section>
    </main>
  )
}

export default Experience