import React from 'react';
import styles from './index.module.css'


export const ButtonPrimary = ({link, text}) => {
    return (

        <a href={link} className={styles.button_text}>{text}</a>
    )
}
