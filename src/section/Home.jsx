import React from 'react'
import { useMemo } from 'react'
import ParticlesBackground from "../components/ParticlesBackground"
import {hover, motion}  from "framer-motion"
import { FaLinkedin, FaXTwitter,FaGithub } from 'react-icons/fa6'
import { a, filter, label } from 'framer-motion/client'


function Home() {
const roles = useMemo(()=>["Web Developer" , "Software Developer" ],[])

const [index , setIndex] = React.useState(0);
const [subIndex , setSubIndex] = React.useState(0)
const [deleting , setDeleting] = React.useState(false)


const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },

  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },

  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};

const socials = [
  {icon : FaXTwitter , label : "X", href : "https://x.com/C99412571Lokesh"},
  {icon : FaLinkedin , label : "Linkedin", href : "https://www.linkedin.com/in/lokesh-choudhary-47054a243/h"},
  {icon : FaGithub , label : "GitHub", href : "https://github.com/CodebyLokesh-code"},


]


React.useEffect(() => {
  const current = roles[index];

  const timeout = setTimeout(() => {
    if (!deleting && subIndex < current.length) {
      setSubIndex((v) => v + 1);
    } 
    else if (!deleting && subIndex === current.length) {
      setDeleting(true);
    } 
    else if (deleting && subIndex > 0) {
      setSubIndex((v) => v - 1);
    } 
    else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((v) => (v + 1) % roles.length);
    }
  }, deleting ? 50 : 100);

  return () => clearTimeout(timeout);

}, [subIndex, index, deleting]);

  return (
    <section id='home' className='w-full h-screen relative bg-black' overflow-hidden>
      <ParticlesBackground/>
      <div className='absolute inset-0'>
        <div className='absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse'>

        </div>
        <div className='absolute bottom-0 right-0  w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500'>

        </div>
      </div>

      <div className='relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center h-full text-center lg:text-left relative'>
        <div className='w-full lg:pr-24 mx-auto max-w-[48rem]'>
          <motion.div
          className='mb-3 text-xl sm-text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]'
          initial={{opacity:0 , y: 12}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          >
            <span>
              {roles[index].substring(0,subIndex)}
            </span>

            <span className='inline-block w-[2px] ml-1 bg-white animate-pulse align-middle' style={{height:"1em"}}></span>
          </motion.div>

          <motion.h1 className='text-4xl sm:text-5xl md:text-6xl  lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] lg:whitespace-nowrap drop-shadow-lg'
          initial={{opacity:0, y:40}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1}}
          >
            Hello I'm
            <br />
            <span className='text-white font-bold text-4xl sm:text-6xl md:text-8xl lg:withespace-nowrap'>
              Lokesh Choudhary
            </span>
          </motion.h1>
          <motion.p className='mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0'
          initial={{opacity:0 , y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay: 0.4,duration:0.8}}
          >
            I turn complex ideas into seamless, high-impact <br />
            web experience -- building morden , scalable, and  <br />
            lightning-fast application that make a differance
          </motion.p>
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className='mt-10 flex flex-wrap items-center justify-center gap-6'
>
  <a 
    href="#Projects" 
    className='inline-block px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-transform duration-300'
  >
    View My Work
  </a>

  <a 
    href="/resume.pdf" download 
    className='inline-block px-6 py-3 rounded-full text-white border border-white hover:scale-105 transition-transform duration-300'
  >
    My Resume
  </a>
</motion.div>

<div className='mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start'>
  {socials.map(({icon,label,href})=>{
    <motion.a href="href"
    key={label}
    target='_blank'
    aria-label={label}
    rel="noopener noreferrer"
    variants={glowVariants}
    initial={initial}
    >

    </motion.a>
  })}
  
</div>



        </div>
        </div>

      </div>
    </section>
  )
}

export default Home