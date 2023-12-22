import './infoAdvantage.css'
import React from 'react';
import { useState } from 'react';

const InfoAdvantage = () => {
    const [clickedButton, setClickedButton] = useState([
            {id: 0, isClicked: true },
            {id: 1, isClicked: false },
            {id: 2, isClicked: false },
            {id: 3, isClicked: false }
        ]);

    function doClick(id) {
        let tempIsClicked = clickedButton.slice(0);

        tempIsClicked.forEach((currentClick) => {
            tempIsClicked[currentClick.id].isClicked = currentClick.id === id;
        })

        return tempIsClicked;
    }

    function doScroll(id, offset) {
        let scrollContainer = document.getElementById('scroll__container');
        if (scrollContainer !== null) {
            scrollContainer.scrollTop = offset;
            setClickedButton(doClick(id));
        }
    }

    // function a(id) {
    //     clickedButton.forEach((currentClick) => {
    //         console.log(currentClick.id === id);
    //         return currentClick.id === id;
    //     })
    //     return false;
    // }

    return (
        <section className={"infoAdvantage"}>
            <div className={"advantage__container"}>
                <div className={"advantage__title"}>
                    Почему следует выбрать нас?
                </div>
                <div className={"advantage__desc"}>
                    Нас стоит выбрать, потому что мы предлагаем систему с
                    отдельным взаимодейсвием менеджера и заказчика, тогда как
                    большинство CRM-систем предназначены для целых компаний.
                </div>

                <div className={"scroll__behavior"}>
                    <nav>
                        <label className={clickedButton[0].isClicked ? 'clicked' : 'notClicked'}
                               onClick={() => doScroll(0, 0)}>
                            <text>
                                Личный кабинет менеджера
                            </text>
                        </label>
                        <label className={clickedButton[1].isClicked ? 'clicked' : 'notClicked'}
                               onClick={() => doScroll(1, 430)}>
                            <text>
                                Личный кабинет заказчика
                            </text>
                        </label>
                        <label className={clickedButton[2].isClicked ? 'clicked' : 'notClicked'}
                               onClick={() => doScroll(2, 860)}>
                            <text>
                                Простота
                            </text>
                        </label>
                        <label className={clickedButton[3].isClicked ? 'clicked' : 'notClicked'}
                               onClick={() => doScroll(3, 1290)}>
                            <text>
                                Выгода
                            </text>
                        </label>
                    </nav>

                    <scroll-container id={"scroll__container"}>
                        <scroll-page>
                            <h1>Личный кабинет менеджера</h1>
                            <text>
                                Личный кабинет менеджера позволит достаточно просто отслеживать все свои проекты,
                                получать информацию о новых задачах, создавать кабинеты клиентов и предоставлять
                                до них доступ, взаимодействовать с задачами на канбан-доске, предлагать новые задачи,
                                создавать тарифные планы и выставлять счета.
                            </text>
                        </scroll-page>
                        <scroll-page>
                            <h1>Личный кабинет заказчика</h1>
                            <text>
                                Личный кабинет клиента позволит достаточно просто отслеживать все свои проекты,
                                предлагать задачи на оценку менеджеру, оставлять комментарии и оценивать задачи
                                которые находятся на проверке, переключать тарифы и генерировать отчеты.
                            </text>
                        </scroll-page>
                        <scroll-page>
                            <h1>Простота</h1>
                            <text>
                                Наша CRM-система в отличие от существующих, созданных в основном для работы целых
                                компаний, не перегружена и заточена на взаимодействие менеджера и клиента.
                                Клиенту проще добавить поправки: сделать предложение выставить цену и согласовать
                                её с менеджером. Легче контролировать свои задачи, которые ему назначают.
                                Всё находится в одном месте
                            </text>
                        </scroll-page>
                        <scroll-page>
                            <h1>Выгода</h1>
                            <text>
                                Большинство CRM-систем либо являются платными, либо имеют сильно играниченную
                                бесплатную версию. У нас с этим вы не столкнетесь
                            </text>
                        </scroll-page>
                    </scroll-container>
                </div>
            </div>
        </section>
    );
}

export default InfoAdvantage;