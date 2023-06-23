import React from 'react';

import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngular, faCss3, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className={`${styles['about-wrapper']} bg-gray-100 py-10`}>
      <div className="p-20 ">

        <div className="flex flex-col gap-12 justify-center mb-3 md:flex-row">
          <div className="w-[100%] shrink-0 flex md:justify-end md:w-[25%]">
            <div className={styles['picture']}></div>
          </div>
          <div className="w-[100%] shrink-0 md:w-[30%]">
            <h2 style={{ fontFamily: "var(--font-titillium)" }} className="text-4xl mb-5">About</h2>
            <p className="text-[18px] text-gray-800 mb-4" style={{ fontFamily: "var(--font-titillium)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet.</p>
            <p className="text-[18px] text-gray-800" style={{ fontFamily: "var(--font-titillium)" }}>Doloribus, dolore facere eum maiores architecto aliquam nobis voluptates saepe similique assumenda necessitatibus consequuntur, ea impedit quod nostrum nulla provident quos velit</p>

            <div className="flex gap-5 mt-10 items-center">
              <span className="text-xs uppercase tracking-wide">Tech Stack</span>
              <ul className="flex gap-5 text-2xl border-l border-gray-500 ps-6">
                <li><FontAwesomeIcon icon={faReact} /></li>
                <li><FontAwesomeIcon icon={faAngular} /></li>
                <li><FontAwesomeIcon icon={faSass} /></li>
                <li><FontAwesomeIcon icon={faHtml5} /></li>
                <li><FontAwesomeIcon icon={faCss3} /></li>
                <li><FontAwesomeIcon icon={faJs} /></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default About