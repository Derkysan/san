'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-start px-20">
      <div className="flex">
        <motion.div style={{ background: "linear-gradient(0deg, rgba(240,125,0,1) 0%, rgba(249,176,0,1) 100%)" }}
          className="w-2 grow mr-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        ></motion.div>
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }} 
        >
          <h2 className="uppercase text-[60px] leading-[55px] font-extralight mb-4" style={{ fontFamily: "var(--font-inter)" }}>San</h2>
          <p className="uppercase text-[10px] leading-[10px] tracking-[7px] px-1">Front-end developer</p>
        </motion.div>
      </div>
      <ul className="flex gap-6 mt-10 ml-7">
        <motion.li 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a 
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray- text-white hover:text-[#F07D00] transition-all duration-300 ease-in-out" 
            href="mailto:derkysan19@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </motion.li>
        <motion.li 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .75 }}
        >
          <a 
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray- text-white hover:text-[#F07D00] transition-all duration-300 ease-in-out" 
            href="https://www.linkedin.com/in/derkysan/" 
            target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </motion.li>
      </ul>
    </div>
  )
}
