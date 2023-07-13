import React from 'react';

import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact" className="flex border border-main-color border-b-0">
      <div className="grow w-[50%] p-5 border-r border-main-color">
        <div className="flex-grow gap-2 items-center flex justify-end"> 
          <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full text-lg">
            <FontAwesomeIcon icon={ faLocationDot } />
          </div>
          <h2 style={{ fontFamily: "var(--font-titillium)" }} className="text-lg font-extralight">Santiago de Chile, Chile</h2>
        </div>
      </div>

      <div className="grow w-[50%] p-5">
        <div className="flex-grow gap-2 items-center flex">
          <a href="mailto:derkysan19@gmail.com" className="flex items-center">
            <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full text-lg">
              <FontAwesomeIcon icon={ faEnvelope } />
            </div>
            <h2 style={{ fontFamily: "var(--font-titillium)" }} className="text-lg font-extralight">Contact me!</h2>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact