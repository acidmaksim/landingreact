import React from 'react';
import styles from './index.module.css';

import image from '/Users/etotmac/Desktop/landingreact/src/icons/fourth-image.svg'


export const FifthBlock = ({headText, subText}) => {
    return (
        <div className={styles.container}> 
            <div className={styles.leftBlock}>

            <div className={styles.textBlock}>

                <h2 className={styles.title} dangerouslySetInnerHTML={{__html:headText}}/>
                <h4 className={styles.description} dangerouslySetInnerHTML={{__html:subText}}/>
                
            </div>

            </div>

            <div className={styles.pictureBlock}>
                <img src={image} alt="finance"/>
            </div>

       </div>
    )
}
