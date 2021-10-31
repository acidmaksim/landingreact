import React from 'react';
import styles from './index.module.css';



export const Advantages = ({ value, text }) => {
    return (
        <div className={styles.container}>
            <span className={styles.value}>{value}</span>
            <span className={styles.description}>{text}</span>
        </div>
    )
}
