import React from 'react';

import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className={`${styles['section-wrapper']}`}>
      <div className="p-20 flex gap-6">
        <div className="flex-grow gap-8 items-center text-end flex flex-row-reverse">
          <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full text-lg shadow-lg">
            <FontAwesomeIcon icon={ faLocationDot } />
          </div>
          <h2 style={{ fontFamily: "var(--font-titillium)" }} className="text-2xl">Santiago de Chile, Chile</h2>
        </div>
        <div className="flex-grow gap-8 items-center flex">
          <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full text-lg shadow-lg">
            <FontAwesomeIcon icon={ faEnvelope } />
          </div>
          <h2 style={{ fontFamily: "var(--font-titillium)" }} className="text-2xl">derkysan19@gmail.com</h2>
        </div>
        
      </div>
    </div>
  )
}

export default Contact