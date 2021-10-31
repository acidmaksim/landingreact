import React from 'react';
import styles from './index.module.css'


export const TextWithIcon = ({icon, addInfo, advantages}) => {
    return (
        <div className={styles.strokeIconS}>

                <img className={styles.icon} src={icon} alt={addInfo}/>

            <span className={styles.text}>{advantages}</span>
        </div>
    )
}
