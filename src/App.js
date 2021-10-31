import './App.css';
// import {ButtonPrimary} from './components/button-primary/index';
// import {ButtonSecondary} from './components/button-secondary/index';
// import {ButtonThirdly} from './components/button-thirdly/index';
import { Header } from './components/header/index';
import { Container } from './components/container';
import { FirstBlock } from './components/first-block';
import { SecondaryBlock } from './components/secondary-block';
import { ThirdlyBlock } from './components/thirdly-block';
import { FifthBlock } from './components/fifth-block';
import { SixthBlock } from './components/sixth-block';
import { EighthBlock } from './components/eighth-block';
import { NinthBlock } from './components/ninth-block';
import { SetUp } from './components/set-up';
import { ButtonPrimary } from './components/button-primary';
import { MarketingBlock } from './components/marketing-company';
import { TextWithIconBlock } from './components/text-block-icon-m';
import ticket from './icons/ticket.svg'
import gift from './icons/gift.svg'
import person from './icons/person.svg'
import stop from './icons/cancel.svg'
import credit from './icons/credit.svg'
import { Icon } from './components/iconBg'
import { AllFunction } from './components/all-function';
import { Integration } from './components/integration';
import { ServiceFree } from './components/service-free';



function App() {
  return (
    <div className="App">

      <Container withPadding={false}>
        <Header href="https://www.google.com/" />
      </Container>



      <Container >
        <FirstBlock textMain="Бесплатная CRM<br/> и онлайн запись " accentWords="для квестов" textDescription="Специализированная CRM система для квестов с молниеносной<br/> тех поддержкой, без багов,  простая в использовании, с мобильным</br> приложением! Жми на кнопку ниже и оставь заявку на презентацию!" />
      </Container>

      <Container noContainer>

        <SecondaryBlock  headText="Привлекайте новых клиентов" subText="Настройте расписание и ваши клиенты смогут записаться круглосуточно через сайт и социальные сети,  мобильное приложение и наш агрегатор." />
      </Container>

      <Container >
        <ThirdlyBlock headText="Наведите порядок<br/> в расписании" subText="Все записи из различных источников поступают в единый функциональный календарь. Вы можете легко настроить расписание на будущий период, установить выходной или праздничный день. </br></br>Управляйте бронированием в пару кликов: меняйте стоимость, добавляйте скидку, отслеживайте статус." />
      </Container>

      <Container >
        <MarketingBlock title="Запускайте маркетинговые компании" subTitle="Сертификаты и промокоды - это отличный инструмент для повышения посещаемости квестов.</br>Мы сделали маркетинговые кампании максимально гибкими и удобными в использовании.">
          <TextWithIconBlock titleS="Промокоды" subTitleS="Увеличьте посещаемость квестов в непопулярные утренние часы или в “черную пятницу”, предоставляя клиентам скидки по промокодам." icon={<Icon icon={ticket} />} />
          <TextWithIconBlock titleS="Сертификаты" subTitleS="Настройте и запустите продажу подарочных сертификатов на игры, отслеживая статус доставки и период действия сертификата." icon={<Icon icon={gift} />} />
          <TextWithIconBlock titleS="Акции" subTitleS="Придумывайте различные конверсионные акции и объявляйте о них информацию." icon={<Icon icon={person} />} />
        </MarketingBlock>
      </Container>



      <Container >
        <FifthBlock headText="Контролируйте финансы" subText="Получайте отчеты по выручке от игр, по расходам на закупку, зарплату и другим статьям расходов. Понятное визуальное отображение данных в цифрах и графиках позволяет планировать бюджет на следующий период.</br></br>Руководитель всегда будет знать о текущем положении финансов, а сотрудники легко фиксировать любые движения денежных средств." />
      </Container>

      <Container >
        <SixthBlock headText="Сократите опоздания</br> за счет Email и push уведомлений" subText="Гибкая система уведомлений напомнит клиенту о предстоящей игре, а администратору о необходимости заблаговременно подтвердить запись.  Ни одна бронь не потеряется из виду. Гибкая настройка позволит вам персонализировать уведомления под ваши нужды." />
      </Container>


      <Container >
        <MarketingBlock title="Уменьшайте количество<br/> отмененных броней" subTitle="Мы предоставляем инструменты, которые позволят снизить количество отмененных</br> и спам броней, а так же уменьшить число опозданий">
          <TextWithIconBlock titleS="Онлайн предоплата броней" subTitleS="Настройте частичную или полную предварительную оплату брони, чтобы минимизировать риск отмены игры" icon={<Icon icon={credit} />} />
          <TextWithIconBlock titleS="Индекс доверия команды" subTitleS="Если команда вела себя неподобающим образом или вовсе не пришла, то эта информация повлияет на формирование индекса доверия игроков" icon={<Icon icon={person} />} />
          <TextWithIconBlock titleS="Черный список номеров" subTitleS="Защитите себя от спама, заблокируйте нежелательный телефонный номер, чтобы злоумышленник не мог занять слоты в расписании" icon={<Icon icon={stop} />} />
        </MarketingBlock>
      </Container>

      <Container >
        <EighthBlock headText="Управляйте расписанием сотрудников" subText="Сотрудники смогут сами проставить интервалы и дни, в которые им удобно работать на несколько недель вперед.</br></br>Администратор в последствии может скорректировать расписание, добавить или удалить сотрудника из графика и выбрать ведущего, которому будет назначена бронь." />
      </Container>

      <Container >
        <NinthBlock headText="Используйте удобное мобильное приложение" subText="Полный функционал CRМ системы так же доступен и в мобильном приложении. Вы можете создавать брони, контролировать сотрудников и управлять расписанием из любой точки мира." />
      </Container>

      <Container grayBg id="functions" >
        <AllFunction title="Полный обзор функций сервиса">

          <TextWithIconBlock titleS="Гибкая настройка цен" subTitleS="Настройка по шаблонам тарифов, включая редактирование одного интервала, без изменения всего шаблона. Плюс планирование раписания на будущие периоды" icon={<Icon isWhiteBg icon={ticket} />} />
          <TextWithIconBlock titleS="Выходные и перерывы" subTitleS="Вы можете оперативно из календаря закрыть один день для записи, установить перерыв на интервал или закрыть запись на квест на несколько дней, например “На ремонт”" icon={<Icon isWhiteBg icon={gift} />} />
          <TextWithIconBlock titleS="Контрагенты и поставщики" subTitleS="Ведите взаиморасчеты с контрагентами и поставщиками через единый интерфейс" icon={<Icon isWhiteBg icon={person} />} />
          <TextWithIconBlock titleS="Флеш-отчеты" subTitleS="Информация о бронированиях: статусы, стоимость, количество и источники броней с привязкой ко времени" icon={<Icon isWhiteBg icon={ticket} />} />
          <TextWithIconBlock titleS="Клиентская база" subTitleS="Ведите базу клиентов с выгрузкой данных в Excel при необходимости. Все данные по командам, хранятся на сервере и у Вас всегда есть доступ к ним" icon={<Icon isWhiteBg icon={gift} />} />
          <TextWithIconBlock titleS="Учет финансов" subTitleS="Учитывайте поступления или списания с расчетного счета или физической кассы" icon={<Icon isWhiteBg icon={person} />} />

        </AllFunction>
      </Container>

      <Container>
        <Integration />
      </Container>

      <Container>
        <ServiceFree title="Сервис полностью бесплатен" subTitle="Сервис доступен без вступительного и ежемесячных взносов. Мы лишь удерживаем комиссию за обработку онлайн платежей, совершенных через виджеты онлайн записи."> </ServiceFree>
      </Container>

      <Container>
        <SetUp headText="Настроим систему за вас" subText="После получения Вашей заявки на регистрацию  наши специалисты помогут сконфигурировать  систему и проведут подробную экскурсию по продукту"> <ButtonPrimary text="Свяжитесь со мной" link="https://www.google.com/" />  </SetUp>
      </Container>

    </div>
  );
}

export default App;

