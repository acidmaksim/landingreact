import React from 'react';
import styles from './index.module.css';
import image from '../../icons/setUpManandGirl.svg';


export const SetUp = ({headText, subText, children,}) => {
    return (
        <div className={styles.container}> 
            <div className={styles.leftBlock}>

            <div className={styles.textBlock}>
                <h2 className={styles.title} dangerouslySetInnerHTML={{__html:headText}}/>
                <h4 className={styles.description} dangerouslySetInnerHTML={{__html:subText}}/>
                    {children && (
                        <div className={styles.childrenWrapper}> 
                            {children} 
                        </div>
                    ) }
                    
            </div>

            </div>

            <div className={styles.pictureBlock}>
                <img src={image} alt="mobile app"/>
            </div>

       </div>
    )
}
