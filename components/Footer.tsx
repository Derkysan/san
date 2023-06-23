import React from 'react';
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles['footer']}>
      <span style={{ fontFamily: "var(--font-titillium)" }}>Copyright © 2023</span>
      <ul className="flex mt-10 ml-7 gap-10 text-sm">
          <li>
            <a className="h-10 flex items-center justify-center rounded-lg text-[#ffffff] hover:text-[#F07D00] transition-all duration-300 ease-in-out" 
              target="_blank"
              href="https://github.com/Derkysan">
                <FontAwesomeIcon icon={faGithubAlt} />
            </a>
          </li>
          <li>
            <a className="h-10 flex items-center justify-center rounded-lg text-[#ffffff] hover:text-[#F07D00] transition-all duration-300 ease-in-out" 
              href="https://www.linkedin.com/in/derkysan/" 
              target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
      </ul>
    </div>
  )
}

export default Footer