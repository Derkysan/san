import React from 'react';

import styles from './styles.module.scss';

const Works = () => {
  return (
    <div className={`${styles['section-wrapper']}`}>
      <div className="p-20 ">
        <h2 style={{ fontFamily: "var(--font-titillium)" }} className="text-4xl mb-5 italic">Works</h2>
        <p className="font-light italic">Nuevos proyectos Próximamente...</p>
      </div>
    </div>
  )
}

export default Works