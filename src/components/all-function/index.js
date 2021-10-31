import React from 'react';
import styles from './index.module.css';
import { Title } from '../title';

import { FunctionPanel } from '../function-panel';



export const AllFunction = ({ title, children, text }) => {
    return (
        <div className={styles.container}>



            <div className={styles.text}>
                <Title text={title} />
            </div>
            
            <div>
                <FunctionPanel text={text} />
            </div>

            <div className={styles.childrenWrap}>
                {children}
            </div>

        </div>


    )
}
