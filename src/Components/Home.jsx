import React from 'react'
import Nav from './Nav'
import About from './About'
import Technology from './Technology'
import Experience from './Experience'
import Proyects from './Proyects'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <main className='bg-bgPurple overflow-x-hidden w-full h-full'>
        <Nav/>
        <About/>
        <Technology/>
        <Experience/>
        <Proyects/>
        <Contact/>
        <Footer/>
    </main>
  )
}

export default Home