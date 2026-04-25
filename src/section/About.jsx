import React from "react";
import L from "../assets/L.jpeg";
import { motion } from "framer-motion";
import { label } from "framer-motion/client";

function About() {

  const stats = [
    {label : "Experience" , value : "1+ years"},
    {label : "Speciality" , value : "Full Stack"},
    {label : "Focus" , value : "preformance & UX"},

  ]
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      
      <div className="w-full max-w-5xl flex items-start gap-8">

        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-[140px] sm:w-[180px] md:w-[200px] h-[140px] sm:h-[180px] md:h-[200px] rounded-2xl overflow-hidden border border-[#1cd8d2]/30 shadow-xl"
        >
          <img
            src={L}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <div className="flex flex-col justify-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1cd8d2]">
            Lokesh Choudhary
          </h2>
          <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
            Full Stack Developer
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-base sm:text-lg max-w-2xl md:max-w-3xl">
            I build scalable, modern web applications with a strong focus on clean architecture, seamless user experience, and high performance. From crafting intuitive frontends to engineering robust backend systems and APIs, I turn ideas into production-ready products—ensuring reliability, speed, and long-term maintainability.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
            {stats.map((item,i)=>(
                <motion.div key={i} className="rounded-xl border border-white/10 bg-white/10 bg-white/5 px-4 py-3 text-center"
                initial={{opacity:0 ,y:10}}
                whileInView={{opacity:1, y:0}}
                transition={{delay:0.5 * i , duration:0.4}}
                viewport={{once:true , amount:0.3}}
                >
                  <div className="text-sm text-gray-400 ">{item.label}</div>
                  <div className="text-base font-semibold ">{item.value}</div>

                </motion.div>
            ))}
          </div>
          <div className="mt-6 flex flex-cal sm:flex-row gap-3 sm:gap-4 justify-center md-justify-start">
            <a href="#Projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition">View Projects</a>
            <a href="#Contact" className="px-5 py-3 inline-flex items-center bg-white/10 justify-center rounded-lg border border-white/20 transition hover:bg-white/20">Get in Touch</a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;