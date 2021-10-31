import React from 'react';
import styles from './index.module.css';

// className

export const Container = ({children, withPadding = true, grayBg, id, noContainer}) => {
    return (
       <div id={id} className={`${withPadding ? styles.containerPadding : styles.container} ${noContainer ?styles.noContainer : ''} ${grayBg ? styles.grayBg : ''}`}> 
           <div className={styles.inner}>
                {children}
           </div>
       </div>
    )
}
