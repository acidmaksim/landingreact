import React from 'react';
import styles from './index.module.css';
import { Title } from '../title';
import metric from '../../icons/metric.svg'
import google from '../../icons/google.svg'
import visa from '../../icons/visa.svg'
import cms from '../../icons/cms.svg'
import { TextBlockIconInt } from '../text-block-icon-int';



export const Integration = ({ title, children, text }) => {
    return (
        <div className={styles.container}>

            <div>
                <h2 className={styles.title}>Интеграция с крупнейшими<br/> площадками и сервисами</h2>
            </div>

            <div className={styles.infoBlock}>
                <TextBlockIconInt icon={metric} titleInt="Яндекс метрика и Google Analytics" subTitleInt="Настройте цели и отслеживайте все этапы записи клиента: от перехода с рекламы до оплаты игры"   >   </TextBlockIconInt>
                <TextBlockIconInt icon={google} titleInt="Google Calendar и Excel" subTitleInt="Настройте интеграцию и мы синхронизируем журнал записей с Google календарем. Выгружайте данные о бронировании квестов, пользователях и промо-кодах"   >   </TextBlockIconInt>
                <TextBlockIconInt icon={visa} titleInt="Платежные системы" subTitleInt="Принимайте платежи онлайн посредством подключения платежной системы"   >   </TextBlockIconInt>
                <TextBlockIconInt icon={cms} titleInt="CMS системы" subTitleInt="Escapenavigator совместим с любыми системами управления сайтом. Разместить виджет для онлайн записи сможет каждый"   >   </TextBlockIconInt>
            </div>

        </div>


    )
}
