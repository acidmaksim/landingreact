import React from 'react';
import styles from './index.module.css';
import { Title } from '../title';
import { SubTitle } from '../sub-title';



export const MarketingBlock = ({ title, subTitle, children }) => {
    return (
        <div className={styles.container}>

            <div className={styles.text}>
                <Title text={title} />
                <SubTitle text={subTitle} />
            </div>

            <div className={styles.childrenWrap}>
                {children}
            </div>

        </div>


    )
}
