import React from 'react'
import henry from '../imgs/henry.svg'

const Experience = () => {
  return (
    <main id="exp" className='bg-bgPurple h-full w-full flex flex-col justify-center items-center p-[7%]'>
      <h1 className='text-5xl text-pink font-semibold italic p-[3%]'>Experience</h1>

      <section className='flex flex-col justify-center items-center gap-6 '>
      <article className='bg-purple w-[100%] h-[8em] flex flex-row justify-start align-middle items-center  text-white p-[2%]'>
      <img src={henry} alt="logo" className='h-[7em]'/>
        <div className='flex flex-col w-[25%]'>
        <h1 className='text-2xl font-bold text-pink'>Full Stack Developer-Henry Bootcamp</h1>
        <h3 className='text-xl italic'>Feb 2023 - Jun 2023</h3>
        </div>
        <div className='flex flex-row justify-center items-center align-middle '>
        <p className='w-[45%] font-semibold'>700+ hours of theorical-practical course of:</p>
        <div className='flex flex-row gap-1'>
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

      <article className='bg-purple w-auto h-[8em] flex flex-row justify-start align-middle items-center  text-white p-[2%]'>
      <img src={henry} alt="logo" className='h-[7em]'/>
        <div className='flex flex-col'>
        <h1 className='text-2xl font-bold text-pink'>Full Stack Teaching Assistant</h1>
        <h3 className='text-xl italic'>Apr 2023 - June 2023</h3>
        </div>
        <div className='flex flex-col text-sm'>
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