'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHand } from '@fortawesome/free-regular-svg-icons';

import { motion } from "framer-motion";

import styles from './styles.module.scss'
import { GithubUser } from '../model';

interface Props {
  user: GithubUser
}

const Banner = ({ user }: Props) => {

  return (
    <motion.div 
    className={`${styles['banner-wrapper']}`}
    initial={{
      borderBottom: 0
    }}
    animate={{
      borderBottom: '1px solid #484848'
    }}
    transition={{
      delay: 2
    }}
    >

      <div className="container w-[80%]">

        <div className="flex flex-col justify-center items-start">
          <div className="flex">
            <motion.div layout style={{ background: "linear-gradient(0deg, rgba(240,125,0,1) 0%, rgba(249,176,0,1) 100%)" }}
              className="w-2 grow mr-4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            ></motion.div>
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {
                !user 
                  ? (
                      <code>
                        Hi viewer! 
                        <motion.div 
                          className="inline-block ml-2" 
                          initial={{
                            rotate: 0
                          }}
                          animate={{ 
                              rotate: [ 20, -20, 20, -20, 20, -20, 0 ] 
                            }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        >
                          <FontAwesomeIcon icon={faHand} />
                        </motion.div>
                      </code>
                    )
                  : 
                    (
                      <>
                        <motion.h2 
                          initial={{ opacity: 0, scale: 0 }} 
                          animate={{ opacity: 1, scale: 1 }} 
                          className="uppercase text-[60px] leading-[55px] font-extralight mb-4 dark:text-[#bdbdbd]" style={{ fontFamily: "var(--font-titillium)" }}>
                            { user.name } 
                        </motion.h2>
                        <motion.p 
                          initial={{ y: -20 }}
                          animate={{ y: 0 }}
                          className="uppercase text-[10px] leading-[10px] tracking-[7px] px-1 dark:text-[#bdbdbd]">
                            { user.bio }
                        </motion.p>
                      </>
                    )
              }
            </motion.div>
          </div>

          <div className="w-[100%] flex mt-5">
            <div className="w-[100%] md:w-[40%]">
              {/* <motion.p 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-lg font-extralight dark:text-zinc-300" style={{ fontFamily: "var(--font-titillium)" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis quae deserunt rerum minima natus! Harum ullam perspiciatis quaerat rem iusto!
              </motion.p> */}
              <ul className="flex gap-8 mt-4 md:gap-6">
                <motion.li 
                  initial={{ y: -25, opacity: 0 }}
                  animate={{ y: 0, opacity: .75 }}
                  transition={{ delay: 1.75 }}
                >
                  <motion.a 
                    className="px-1 h-10 flex items-center justify-center rounded-lg text-2xl md:text-lg text-[#666666] hover:text-[#ebebeb] transition-all duration-300 ease-in-out dark:text-gray-500 dark:hover:text-[#ffffff]"
                    whileHover={{ scale: 1.1 }} 
                    target="_blank"
                    href="https://github.com/Derkysan">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                  </motion.a>
                </motion.li>
                <motion.li 
                  initial={{ y: -25, opacity: 0 }}
                  animate={{ y: 0, opacity: .75 }}
                  transition={{ delay: 2 }}
                >
                  <motion.a 
                    whileHover={{ scale: 1.1 }} 
                    className="px-1 h-10 flex items-center justify-center rounded-lg text-2xl md:text-lg text-[#666666] hover:text-[#ebebeb] transition-all duration-300 ease-in-out  dark:text-gray-500 dark:hover:text-[#ffffff]" 
                    href="https://www.linkedin.com/in/derkysan/" 
                    target="_blank">
                      <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </motion.a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

      </div>


    </motion.div>
  )
}

export default Banner