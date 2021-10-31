import React from 'react';
import styles from './index.module.css'


export const TitleInt = ({link, text}) => {
    return (
        <h1 href={link} className={styles.text} dangerouslySetInnerHTML={{__html:text}}/>
    )
}
