import React from 'react';
import styles from './index.module.css';
import { TextWithIcon } from '../text-with-icon-s'

import image from '../../icons/second-image.svg'
import icon1 from '../../icons/union.svg'
import icon2 from '../../icons/vector.svg'
import icon3 from '../../icons/union_star.svg'
import icon4 from '../../icons/stop.svg'


export const SecondaryBlock = ({ headText, subText }) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>

                <div className={styles.textBlock}>

                    <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: headText }} />
                    <h4 className={styles.description} dangerouslySetInnerHTML={{ __html: subText }} />

                </div>

                <div className={styles.advantagesBlock}>
                    <TextWithIcon icon={icon1} alt="secure" advantages="Полная или частичная онлайн оплата" />
                    <TextWithIcon icon={icon2} alt="secure" advantages="Чат и обратный звонок" />
                    <TextWithIcon icon={icon3} alt="secure" advantages="Онлайн покупка сертификатов" />
                    <TextWithIcon icon={icon4} alt="secure" advantages="Блокирование расписания за 1, 2, 3 часа до игры" />
                </div>

            </div>

            <div className={styles.pictureBlock}>
                <img src={image} alt="new client" />
            </div>

        </div>
    )
}
