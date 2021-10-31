import React from 'react';
import logo from '/Users/etotmac/Desktop/landingreact/src/icons/Logo_Full_Blue.svg';
import de from '/Users/etotmac/Desktop/landingreact/src/icons/germany_m_color.svg';
import styles from './index.module.css';
import { ButtonThirdly } from '/Users/etotmac/Desktop/landingreact/src/components/button-thirdly/index';
import { ButtonSecondary } from '/Users/etotmac/Desktop/landingreact/src/components/button-secondary/index';


export const Header = ({}) => {
    return (
        <div className={styles.header}>
        
            <a className={styles.logo} href="/" alt='hello'>
                <img src={logo} alt="hello" />
            </a>

            <div className={styles.navigationMenu}>
                <ButtonThirdly text="Возможности" link="#functions" />
                <ButtonThirdly text="Приложение" link="https://www.google.com/" />
                <ButtonThirdly text="Цены" link="https://www.google.com/" />
                <ButtonThirdly text="Контакты" link="https://www.google.com/" />
            </div>

            <a className={styles.language} >
                <img src={de} alt="hello" />
            </a>

            <div className={styles.buttons}>
                <ButtonSecondary link="https://www.google.com/" text="Вход" />
                <ButtonSecondary link="https://www.google.com/" text="Регистрация" />
            </div>

        </div>
    )
}
