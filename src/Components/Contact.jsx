import React from 'react'

const Contact = () => {
  return (
    <main id='contact' className='bg-bgPurple h-screen w-screen flex flex-col justify-center items-center gap-12 p-[10%]'>
     <section className='flex flex-col justify-center items-center gap-6 '>
     <h1 className='xxl:text-8xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl text-pink font-semibold italic'>Let's connect!</h1>
     <div className="xxl:w-[120em] xl:w-[70em] lg:w-[45em] md:w-[30em] sm:w-[20em] xs:w-[20em] h-[1px] bg-gradient-to-r from-lilac via-pink to-orange"></div>
     </section>
     <p className='xxl:text-5xl xl:text-3xl lg:text-2xl md:text-xl sm:text-xl xs:text-lg text-center text-white font-thin'>I'm open to new opportunities! Feel free to reach out or say hi, and I'll do my best to get back to you.</p>
     <button
        className="rounded-xl xxl:p-[2%] xl:p-[2%] xxl:text-5xl xl:text-3xl lg:p-[1%] lg:text-xl md:text-xl md:p-[1%] sm:text-xl sm:p-[2%] xs:text-xl xs:p-[2%] bg-gradient-to-r from-lilac via-pink to-orange transition-all duration-500 ease-in-out hover:transform hover:scale-110"
      >
        <a
          className="text-decoration-none text-white font-bold text-center"
          href="mailto:yoseli21603@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email Me
        </a>
      </button>
    </main>
  )
}

export default Contact