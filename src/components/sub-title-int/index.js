import React from 'react';
import styles from './index.module.css'


export const SubTitleInt = ({link, text}) => {
    return (
        <h1 href={link} className={styles.text} dangerouslySetInnerHTML={{__html:text}}/>
    )
}
