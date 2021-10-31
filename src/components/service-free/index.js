import React from 'react';
import styles from './index.module.css';
import free from '../../icons/free.svg';
import { Title } from '../title';
import { SubTitle } from '../sub-title';
import { Advantages } from '../advantages';
import { ButtonPrimary } from '../button-primary';



export const ServiceFree = ({ title, subTitle, children, }) => {
    return (
        <div className={styles.container}>

            <div className={styles.text}>
                <Title text={title} />
                <SubTitle text={subTitle} />
            </div>

            <div className={styles.advantagesBlock}>
                <div className={styles.advantages}>
                    <Advantages value="1 %" text="от суммы — если платеж был обработан через виджеты на вашем сайте" />
                    <Advantages value="15 %" text="от суммы — при бронировании через площадку escapenavigator.com" />
                    <ButtonPrimary text="Оставить заявку" link="#"/>
                </div>

                <img src={free} alt="efe" />

            </div>


            {/* <div className={styles.childrenWrap}>
                {children}
            </div> */}

        </div>
    )
}
