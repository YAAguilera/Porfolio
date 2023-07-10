import React from 'react'
import img from '../imgs/aboutme.svg'
import linkedin from '../imgs/linkedin.svg'
import git from '../imgs/github.svg'

const About = () => {
  return (
    <main id="about" className='bg-bgPurple h-full w-screen flex flex-col justify-center items-center xxl:p-[3%] xl:p-[3%] lg:p-[2%] md:p-[7%]'>
        <section className='flex flex-col justify-center 
        xxl:gap-[3%] xxl:mt-[5%] xxl:m-[2%]
        xl:gap-[3%] xl:mt-[5%] xl:m-[2%] 
        lg:gap-[3%] lg:mt-[5%] lg:m-[2%] 
        md:gap-[3%] md:mt-[5%] md:m-[2%]
        sm:gap-[3%] sm:mt-[5%] sm:m-[2%]
        xs:gap-[3%] xs:mt-[5%] xs:m-[2%]
        '>
        <div className='flex flex-row justify-center items-center align-middle gap-[2%] w-auto'>
            <h1 className='text-pink text-center 
            xxl:p-[2%] xxl:text-7xl xxl:w-[36%]
            xl:w-[40%] xl:text-4xl
            lg:w-[40%] lg:text-4xl
            md:w-[40%] md:text-2xl
            '>Hello! <span className='font-bold'>I'm Yoseli</span></h1>
            <div className="bg-gradient-to-r from-lilac via-pink to-orange
            xxl:w-[80em] xxl:h-8
            xl:w-[30em] xl:h-5
            lg:w-[30em] lg:h-5
            md:w-[20em] md:h-2
            "></div>
        </div>
        <div className='flex flex-row justify-center items-center align-middle gap-[2%] w-auto'>
            <div className="bg-gradient-to-r from-lilac via-pink to-orange 
            xxl:w-[70em] xxl:h-8
            xl:w-[27em] xl:h-5 
            lg:w-[27em] lg:h-5
            md:w-[18em] md:h-2
            "></div>
            <h1 className='text-orange font-bold italic text-center 
            xxl:text-6xl
            xl:text-3xl
            lg:text-3xl
            md:text-xl
            '>Front-End Developer</h1> 
        </div>
        </section>

        <section className='flex flex-row justify-center items-center w-[85%] '>
          <div className='flex flex-col justify-start gap-5'>
            <div className='flex flex-row justify-start items-center gap-5 '>
            <a href='https://www.linkedin.com/in/yoseli-aguilera-2766a1218/'>
            <img src={linkedin} alt="linkedin" className='transition-all duration-500 ease-in-out text-pink hover:transform hover:scale-110
            xxl:h-[6em]
            xl:h-[3em]  
            lg:h-[3em]
            md:h-[2em]  
            '/>
          </a>
          <a href='https://github.com/YAAguilera'>
            <img src={git} alt="github" className='transition-all duration-500 ease-in-out hover:transform hover:scale-110
            xxl:h-[6em] 
            xl:h-[3em]
            lg:h-[3em] 
            md:h-[2em] 
            ' />
          </a>
          <a href="./Yoseli Aguilera-Resumé.pdf" target='_blank' rel='noreferrer' className='bg-purple text-white font-semibold rounded-lg transition-all duration-500 ease-in-out hover:transform p-[1%] hover:scale-110
          xxl:text-3xl
          xl:text-lg
          lg:text-lg
          md:text-md
          '>My resume</a>
            </div>
            <div className='flex flex-col gap-2 ml'>
            <p className='text-white xxl:text-4xl xl:text-xl lg:text-lg md:text-sm'>I am 20 years old, I am from the USA and I currently live in Buenos Aires, Argentina. I am studying a Bachelor's degree in Business Administration and I am a Front-End oriented Full-Stack developer.</p>
            <p className='text-white xxl:text-4xl xl:text-xl lg:text-lg md:text-sm'>I value collaboration and creativity within a team. </p>
            <p className='text-white xxl:text-4xl xl:text-xl lg:text-lg md:text-sm'>I am always seeking opportunities to grow and stay up-to-date with the latest technologies.</p> 
            <p className='text-white xxl:text-4xl xl:text-xl lg:text-lg md:text-sm'>I am ready to work on challenging projects and take ideas to the next level!</p>
            </div>
            </div>
            <img src={img} alt="aboutme" className='xxl:h-[80%] xxl:w-[80%] xl:h-[50%] xl:w-[50%] lg:h-[50%] lg:w-[50%] md:h-[50%] md:w-[50%] p-[3%]'/>
        </section>
    </main>
  )
}

export default About