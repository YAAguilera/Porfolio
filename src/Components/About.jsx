import React from 'react'
import img from '../imgs/aboutme.svg'
import linkedin from '../imgs/linkedin.svg'
import git from '../imgs/github.svg'

const About = () => {
  return (
    <main id="about" className='bg-bgPurple h-full w-full flex flex-col justify-center items-center '>
        <section className='flex flex-col justify-center gap-[3%] mt-[5%] m-[2%]'>
        <div className='flex flex-row justify-center items-center align-middle gap-[2%] w-auto'>
            <h1 className='text-pink  w-[40%] text-4xl'>Hello! <span className='font-bold'>I'm Yoseli</span></h1>
            <div className="w-[30em] h-5 bg-gradient-to-r from-lilac via-pink to-orange"></div>
        </div>
        <div className='flex flex-row justify-center items-center align-middle gap-[2%] w-auto'>
            <div className="w-[27em] h-5 bg-gradient-to-r from-lilac via-pink to-orange"></div>
            <h1 className='text-orange font-bold italic text-3xl'>Front-End Developer</h1>
        </div>
        </section>

        <section className='flex flex-row justify-center items-center'>
          <div className='flex flex-col justify-start gap-5'>
            <div className='flex flex-row justify-start items-center gap-5 ml-[10%] '>
            <a href='https://www.linkedin.com/in/yoseli-aguilera-2766a1218/'>
            <img src={linkedin} alt="linkedin" className='transition-all duration-500 ease-in-out h-[3em] text-pink hover:transform hover:scale-110'/>
          </a>
          <a href='https://github.com/YAAguilera'>
            <img src={git} alt="github" className='transition-all duration-500 ease-in-out h-[3em] hover:transform hover:scale-110' />
          </a>
          <a href="./Yoseli Aguilera-Resumé.pdf" target='_blank' rel='noreferrer' className='bg-purple text-white font-semibold p-[1%] rounded-lg transition-all duration-500 ease-in-out hover:transform hover:scale-110'>My resume</a>
            </div>
            <div className='flex flex-col gap-2'>
            <p className='text-white text-xl ml-[10%]'>I am 20 years old, I am from the USA and I currently live in Buenos Aires, Argentina. I am studying a Bachelor's degree in Business Administration and I am a Front-End oriented Full-Stack developer.</p>
            <p className='text-white text-xl ml-[10%]'>I value collaboration and creativity within a team. </p>
            <p className='text-white text-xl ml-[10%]'>I am always seeking opportunities to grow and stay up-to-date with the latest technologies.</p> 
            <p className='text-white text-xl ml-[10%]'>I am ready to work on challenging projects and take ideas to the next level!</p>
            </div>
            </div>
            <img src={img} alt="aboutme" className='h-[50%] w-[50%] p-[3%]'/>
        </section>
    </main>
  )
}

export default About