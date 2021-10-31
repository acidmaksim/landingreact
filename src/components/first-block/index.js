import React from 'react';
import styles from './index.module.css';
import { ButtonPrimary } from '/Users/etotmac/Desktop/landingreact/src/components/button-primary'
import image from '/Users/etotmac/Desktop/landingreact/src/icons/first-image.svg'


export const FirstBlock = ({ textMain, textDescription, accentWords }) => {
    return (
        <div className={styles.firstBlock}>

            <div className={styles.textBlock}>
                <div className={styles.titleBlock}>
                    <h1 >
                        <span dangerouslySetInnerHTML={{ __html: textMain }} />
                        <span className={styles.accentWords} dangerouslySetInnerHTML={{ __html: accentWords }} />
                    </h1>
                    <p dangerouslySetInnerHTML={{ __html: textDescription }} />
                </div>
                {/* <div>
                </div> */}
            </div>

            <ButtonPrimary link=" #" text="Оставить заявку" />

            <div className={styles.picture}>
                <img src={image} alt="Графики" />
            </div>


        </div>
    )
}
