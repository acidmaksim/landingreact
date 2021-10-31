import React from 'react';
import styles from './index.module.css'
import {ButtonFunction} from '../button-function'


export const FunctionPanel = ({ link, text }) => {
    return (

        <div className={styles.border}>
                    <ButtonFunction text="Управление квестом" link="#"/>
                    <ButtonFunction text="Управление персоналом" link="#"/>
                    <ButtonFunction text="Виджеты и автоматизация" link="#"/>
        </div>
    )
}
