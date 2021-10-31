import React from 'react';
import styles from './index.module.css';


export const Icon = ({ icon, isWhiteBg }) => {
    return (
        <div className={`${styles.backGround} ${isWhiteBg ? styles.whiteBg : styles.grayBg}`}> 
         <img className={styles.icon} src={icon} />
       </div>

       
    )
}
