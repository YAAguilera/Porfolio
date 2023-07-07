import React from 'react'
import teesa from '../imgs/teesa.png'
import poke from '../imgs/poke.png'

const Proyects = () => {
  return (
    <main id="projects" className='bg-bgPurple h-full w-full flex flex-col justify-center items-center p-[4%]'>
      <h1 className='text-5xl text-orange font-semibold italic p-[3%] mt-[-25px]'>Projects</h1>

      <section className='flex flex-row justify-center items-center gap-[10%]'>

        <article className='flex flex-col justify-center items-center w-[35em] h-[32em] gap-3 p-1 rounded-xl bg-gradient-to-r from-lilac via-pink to-orange'>
          <div className='w-full h-full rounded-xl p-[2%] bg-bgPurple flex flex-col justify-center items-center gap-3'>
          <h1 className='text-2xl text-pink font-semibold italic underline'>TEESA</h1>
          <img src={teesa} alt="teesa" className='rounded-lg'/>
          <h6 className='text-white text-sm text-center font-semibold'>An e-commerce platform dedicated to selling technology in food equipment.</h6>
          <div className='text-white text-sm'>
            <p>Technologies used:</p>
            <p>• Front-end: React and Redux-ToolKit</p>
            <p>• Back-end: Node.js and Express.</p>
            <p>• Database: PostgreSQL with Sequelize as the ORM.</p>
          </div>
          <div className='flex flex-row justify-center align-middle items-center gap-3'>
            <button className='bg-gradient-to-r from-lilac via-pink to-orange p-2 rounded-3xl text-white  transition-all duration-500 ease-in-out hover:transform hover:scale-110'>
              <a href="https://pf-teesa-front.vercel.app/">Live preview</a>
            </button>
            <button className='border-[1px] border-white p-2 rounded-3xl text-white transition-all duration-500 ease-in-out hover:transform hover:scale-110'>
              <a href="https://github.com/LauraCayuelaT/PFTeesa_Front">Check on Github</a>
            </button>
          </div>
          </div>
        </article>

        <article className='flex flex-col justify-center items-center w-[35em] h-[32em] gap-2 p-1 rounded-xl bg-gradient-to-r from-lilac via-pink to-orange'>
        <div className='w-full h-full rounded-xl p-[2%] bg-bgPurple flex flex-col justify-center items-center gap-3'>
          <h1 className='text-2xl text-pink font-semibold italic underline'>PokeNet</h1>
          <img src={poke} alt="poke" className='rounded-lg'/>
          <h6 className='text-white text-sm text-center font-semibold'>Pokémon website with details, searches, filters, orders, and a custom Pokémon creator.</h6>
          <div className='text-white text-sm '>
            <p>Technologies used:</p>
            <p>• Front-end: React and Redux</p>
            <p>• Back-end: Node.js and Express.</p>
            <p>• Database: PostgreSQL y Sequelize.</p>
          </div>
         
          <div className='flex flex-row justify-center align-middle items-center gap-3'>
            <button className='bg-gradient-to-r from-lilac via-pink to-orange p-2 rounded-3xl text-white  transition-all duration-500 ease-in-out hover:transform hover:scale-110'>
              <a href="https://github.com/YAAguilera/PI-Pokemon">Check out Github</a>
            </button>
          </div>
          </div>
        </article>
        
      </section>

    </main>
  )
}

export default Proyects