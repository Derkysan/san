import React from 'react';

import styles from './styles.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// import { faSun } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.div 
      className={`${styles['navigation']} dark:shadow-white`}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        delay: 2
      }}
      >
      <div className={`${styles['logo']} dark:text-gray-200`}>
        <Link href={'/san'}>Derkysan</Link>
      </div>
      <ul className={`${styles['menu']} hidden md:flex`}>
        {/* <li>
          <Link href={'#about'} className="text-neutral-700 dark:text-gray-200">About</Link>
        </li> */}
        {/* <li>
          <Link href={''} className="text-neutral-700 dark:text-gray-200">Lab</Link>
        </li> */}
        <li>
          {/* <Link href={'#contact'} className="text-neutral-700 dark:text-gray-200">Contact me!</Link> */}
          <a href="mailto:derkysan19@gmail.com">Contact me!</a>
        </li>
      </ul>

      {/* <div className="flex md:hidden">
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div> */}
    </motion.div>
  )
}

export default Navigation