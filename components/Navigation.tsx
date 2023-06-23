import React from 'react';

import styles from './styles.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <div className={styles['navigation']}>
      <div className={styles['logo']}>
        <Link href={'/'}>Derkysan</Link>
      </div>
      <ul className={`${styles['menu']} hidden md:flex`}>
        <li>
          <Link href={''}>About</Link>
        </li>
        {/* <li>
          <Link href={''}>Works</Link>
        </li> */}
        <li>
          <Link href={''}>Contact</Link>
        </li>
      </ul>

      <div className="flex md:hidden">
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  )
}

export default Navigation