import React from 'react';
import styles from './index.module.css'


export const ButtonSecondary = ({link, text}) => {
    return (

        <a href={link} className={styles.button_text}> {text} </a>

    )
}
