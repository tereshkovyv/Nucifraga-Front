import './infoPossibilities.css'
import './infoPossibilitiesAdaptability.css'

const InfoPossibilities = () => {
    return (
        <section className={"infoPossibilities"} id={"infoPossibilities"}>
            <div className={"possibilities__container"}>
                <div className={"possibilities__title"}>
                    Наши возможности
                </div>
                <div className={"possibilities__blocks"}>
                    <div className={"possibilities__start__block"}>
                        <text>
                            CRM-система для взаимодействия заказчика и исполнителя
                        </text>
                    </div>
                    <div className={"possibilities__blocks-1"}>
                        <div className={"possibilities__blocks__title-1"}>
                            Личный кабинет менеджера
                        </div>
                        <text className={"possibilities__blocks__text-1"}>
                            Здесь видны проекты от разных заказчиков
                        </text>
                    </div>
                    <div className={"possibilities__blocks-2"}>
                        <div className={"possibilities__blocks__title-2"}>
                            Личный кабинет заказчика
                        </div>
                        <text className={"possibilities__blocks__text-2"}>
                            Позволяет заказчику контролировать работу многих людей
                        </text>
                    </div>
                    <div className={"possibilities__blocks-3"}>
                        <div className={"possibilities__blocks__title-3"}>
                            Канбан-доска
                        </div>
                        <text className={"possibilities__blocks__text-3"}>
                            Удобное визуальное отображение задач с дедлайнами.
                        </text>
                    </div>
                    <div className={"possibilities__blocks-4"}>
                        <div className={"possibilities__blocks__title-4"}>
                            Генерация отчета
                        </div>
                        <text className={"possibilities__blocks__text-4"}>
                            Удобная генерация отчета для заказчика
                        </text>
                    </div>
                    <div className={"possibilities__end__block"}>
                        <div className={"possibilities__end__block__title"}>
                            Что хотим добавить в будущем
                        </div>
                        <text className={"possibilities__end__block__text"}>
                            Привлечь больше людей
                            Добавить больше возможностей
                            Продолжать развиваться
                        </text>
                    </div>
                </div>
                <div className={"get__info"}>
                    <li><a href="#!" className={"get__info-btn"}>
                        Узнать больше
                    </a></li>
                </div>
            </div>
        </section>
    );
}

export default InfoPossibilities;