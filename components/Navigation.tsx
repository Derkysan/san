import React from 'react';

import styles from './styles.module.scss';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className={`${styles['navigation']} dark:shadow-white`}>
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
    </div>
  )
}

export default Navigation