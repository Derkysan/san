import React from 'react';

import styles from './styles.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const About = ( { avatar }: { avatar: string } ) => {
  return (
    <div id="about" className={`${styles['about-wrapper']} py-20 flex justify-center`}>
      <div className="container flex items-center justify-center">

        <div className="flex flex-col gap-8 mb-3 w-[90%] md:w-[100%] md:flex-row md:justify-center">
          <div className="flex md:justify-end">
            <div className={`${styles['picture']} mt-14 dark:border`}>
              <Image src="https://avatars.githubusercontent.com/u/11494389?v=4" width={150} height={150} alt="user-avatar" />
            </div>
          </div>
          <div className="shrink-0 md:w-[30%]">
            <h2 style={{ fontFamily: "var(--font-titillium)" }} className="text-2xl font-[600] mb-5 dark:text-gray-300">About</h2>
            <p className="text-[18px] font-extralight mb-4 dark:text-gray-300" style={{ fontFamily: "var(--font-titillium)" }}>Hi, I&apos;m Derky, Frontend Developer currently linving in Santiago de Chile, with knowledge on HTML, CSS, Javascript, skills to work with SASS, Angular, React; quick learning and interested in continous training and open to collaborating on interesting projects as a developer.</p>

            <div className="flex gap-5 mt-10 items-center">
              <span className={`text-xs uppercase tracking-wide dark:text-gray-300 ${styles['text-gradient']}`}>Tech Stack</span>
              <ul className="flex gap-5 text-2xl border-l border-gray-500 ps-6">
                <li className="text-[#999999]"><FontAwesomeIcon icon={faHtml5} /></li>
                <li className="text-[#999999]"><FontAwesomeIcon icon={faCss3} /></li>
                <li className="text-[#999999]"><FontAwesomeIcon icon={faJs} /></li>
                <li className="text-[#999999]"><FontAwesomeIcon icon={faReact} /></li>
                <li className="text-[#999999]"><FontAwesomeIcon icon={faAngular} /></li>
                <li className="text-[#999999]"><FontAwesomeIcon icon={faSass} /></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About