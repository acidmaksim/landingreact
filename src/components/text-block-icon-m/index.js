import React from 'react';
import styles from './index.module.css';
import { TitleS } from '../title-s';
import { SubTitleS } from '../sub-title-s';


export const TextWithIconBlock = ({titleS, subTitleS, icon}) => {
    return (
        <div className={styles.container}> 


            <div className={styles.block}>
                {icon}

            <div className={styles.text}>
                <TitleS text={titleS}/>
                <SubTitleS text={subTitleS}/>
            </div>

            </div>

       </div>
    )
}
