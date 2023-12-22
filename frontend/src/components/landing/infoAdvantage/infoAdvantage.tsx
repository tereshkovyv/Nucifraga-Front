import './infoAdvantage.css'

const InfoAdvantage = () => {

    function doScroll(offset)
    {
        let scrollContainer = document.getElementById('scroll__container');
        if (scrollContainer !== null) {
            scrollContainer.scrollTop = offset;
        }
    }

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
                        <label onClick={() => doScroll(0)}>Личный кабинет менеджера</label>
                        <label onClick={() => doScroll(430)}>Личный кабинет заказчика</label>
                        <label onClick={() => doScroll(860)}>Простота</label>
                        <label onClick={() => doScroll(1290)}>Выгода</label>
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