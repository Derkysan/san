'use client'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className={`${styles['footer']} dark:bg-black`}>
      <div className="container flex flex-row justify-between items-center">
        <span style={{ fontFamily: "var(--font-titillium)" }}>Copyright © {currentYear}</span>
        <ul className="flex mt-10 ml-7 gap-10 text-sm">
            <li>
              <a className="h-10 flex items-center justify-center rounded-lg text-[#ffffff] hover:text-[#F07D00] transition-all duration-300 ease-in-out" 
                target="_blank"
                href="https://github.com/Derkysan">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </li>
            <li>
              <a className="h-10 flex items-center justify-center rounded-lg text-[#ffffff] hover:text-[#F07D00] transition-all duration-300 ease-in-out" 
                href="https://www.linkedin.com/in/derkysan/" 
                target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer