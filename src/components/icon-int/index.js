import React from 'react';
import styles from './index.module.css';


export const IconInt = ({ icon, isWhiteBg }) => {
    return (
        <div className={styles.icon}> 
         <img className={styles.icon} src={icon} />
       </div>

       
    )
}
