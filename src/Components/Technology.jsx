import React from 'react'
import figma from '../imgs/figma.svg'
import js from '../imgs/javascript.svg'
import react from '../imgs/react.svg'
import redux from '../imgs/redux.svg'
import tw from '../imgs/tailwind.svg'
import css from '../imgs/css.svg'

const Technology = () => {
  return (
    <main id="tech" className='bg-bgPurple h-full w-full flex flex-col justify-center items-center '>
      <h1 className='text-5xl text-orange font-semibold p-[3%] italic mt-[5%]'>Technologies</h1>
      <section className='grid grid-cols-3 grid-rows-2 gap-[6em] p-[3%]'>
        <img src={js} alt="js" className='w-[10em]' />
        <img src={react} alt="react" className='w-[10em]'/>
        <img src={redux} alt="redux" className='w-[10em]'/>
        <img src={css} alt='css' className='w-[10em]' />
        <img src={tw} alt="tw" className='w-[10em]'/>
        <img src={figma} alt="figma" className='w-[10em]'/>
      </section>
    </main>
)}

export default Technology