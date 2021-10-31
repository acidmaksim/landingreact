import React from 'react';
import styles from './index.module.css';
import { TitleInt } from '../title-int';
import { SubTitleInt } from '../sub-title-int';
import { IconInt } from '../icon-int';


export const TextBlockIconInt = ({ titleInt, subTitleInt, icon }) => {
    return (
        <div className={styles.container}>


            <div className={styles.block}>
                <IconInt icon={icon} />

                <div className={styles.text}>
                    <TitleInt text={titleInt} />
                    <SubTitleInt text={subTitleInt} />
                </div>

            </div>

        </div>
    )
}
