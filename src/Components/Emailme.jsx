import React from 'react'

const Contact = () => {
  return (
    <main id='contact' className='bg-bgPurple h-full w-full flex flex-col justify-center items-center gap-12 p-[10%]'>
     <section className='flex flex-col justify-center items-center gap-6'>
     <h1 className='text-5xl text-pink font-semibold italic'>Let's connect!</h1>
     <div className="w-[70em] h-[1px] bg-gradient-to-r from-lilac via-pink to-orange"></div>
     </section>
     <p className='text-3xl text-center text-white font-thin'>I'm open to new opportunities! Feel free to reach out or say hi, and I'll do my best to get back to you.</p>
     <button
        className="rounded-xl p-[1%] bg-gradient-to-r from-lilac via-pink to-orange transition-all duration-500 ease-in-out hover:transform hover:scale-110"
      >
        <a
          className="text-decoration-none text-white text-lg font-bold text-center"
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