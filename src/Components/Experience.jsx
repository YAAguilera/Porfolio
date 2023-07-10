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
    <main id="exp" className='bg-bgPurple h-full w-screen flex flex-col justify-center items-center p-[7%]'>
      <h1 className='text-pink font-semibold italic p-[3%]
      xxl:text-8xl
      xl:text-5xl
      lg:text-5xl 
      md:text-4xl
      '>Experience</h1>

      <section className='flex flex-col justify-center items-center gap-6 '>
      <article data-aos="fade-right" className='bg-purple flex flex-row justify-center items-center text-white p-[2%] xxl:w-[150%] xxl:h-[12em] xxl:gap-[3%] xl:w-[100%] xl:h-[8em] lg:w-[100%] lg:h-[8em] '>
      <img src={henry} alt="logo" className='h-[7em]'/>
        <div className='flex flex-col w-[40%]'>
        <h1 className='xxl:text-4xl xl:text-2xl lg:text-2xl font-bold text-pink'>Full Stack Developer-Henry Bootcamp</h1>
        <h3 className='xxl:text-2xl xl:text-xl lg:text-lg italic'>Feb 2023 - Jun 2023</h3>
        </div>
        <div className='flex flex-row justify-center items-center align-middle xxl:text-lg xl:text-sm lg:text-sm'>
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

      <article data-aos="fade-left" className='bg-purple xxl:w-[150%] xxl:h-[12em] xxl:gap-[3%] xl:w-[100%] lg:w-[100%] lg:h-[8em] xl:h-[8em] flex flex-row justify-center align-middle items-center  text-white p-[2%]'>
      <img src={henry} alt="logo" className='h-[7em]'/>
        <div className='flex flex-col'>
        <h1 className='xxl:text-4xl xl:text-2xl lg:text-2xl font-bold text-pink'>Full Stack Teaching Assistant</h1>
        <h3 className='xxl:text-2xl xl:text-xl lg:text-xl italic'>Apr 2023 - June 2023</h3>
        </div>
        <div className='flex flex-col xxl:text-lg xl:text-sm lg:text-sm'>
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