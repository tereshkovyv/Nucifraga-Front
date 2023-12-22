import './createTask.css';
import { Header } from '../../components/header/header';
import { Footnote } from '../../components/footnote/footnote';
import { Footer } from '../../components/footer/footer';
import { NavPanel } from "../../components/navPanel/navPanel";
const clipImg = "img/images/ImgCreateTask/clip.svg";
const rubleImg = "img/images/ImgCreateTask/ruble.svg";
const xGray = "img/images/ImgCreateTask/xGray.svg";
const xBlue = "img/images/ImgCreateTask/xBlue.svg";

const CreateTask = () => {
    return (
        <section className={"personal__account"}>
            <Header />
            <NavPanel />

            <div className={"create__task"}>
                <nav className={"create__task__header"}>
                    <label>
                        Задача
                    </label>
                    <label>
                        Тарифный план
                    </label>
                    <label>
                        Кабинет клиента
                    </label>
                    <label>
                        Выставление счета
                    </label>
                </nav>

                <div className={"create__task__enter__name"}>
                    <input type={"text"} placeholder={"Введите название задачи"}/>
                </div>

                <div className={"create__task__enter__description"}>
                    <textarea placeholder={"Опишите задачу подробнее"}/>
                    <div className={"create__task__attach__file"}>
                        <label>
                            <img src={clipImg} alt={"clipImg"}/>
                            <input type={"file"}/>
                            <span>
                                Прикрепить файл
                            </span>
                        </label>
                    </div>
                </div>

                <div className={"create__task__order__description"}>
                    <div className={"create__task__responsible"}>
                        <div className={"create__task__responsible__description"}>
                            <h1>
                                Отвественный
                            </h1>
                            <div className={"create__task__choice__main"}>
                                <div class={"create__task__choice__main__responsible"}>
                                    <text>
                                        Светлана Иванова
                                    </text>
                                    <label>
                                        <img src={xGray} alt={"xGray"}/>
                                    </label>
                                </div>
                                <div class={"create__task__choice__main__add__more"}>
                                    <label>
                                        <img src={xBlue} alt={"xBlue"}/>
                                        <text>
                                            Добавить ещё
                                        </text>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"create__task__deadline"}>
                        <div className={"create__task__deadline__description"}>
                            <h1>
                                Крайний срок
                            </h1>
                            <div className={"create__task__deadline__input"}>
                                <input type="date" id="start" name="trip-start"
                                       min="2023-01-01" max="2060-12-31" />
                            </div>
                        </div>
                    </div>
                    <div className={"create__task__price"}>
                        <div className={"create__task__price__description"}>
                            <h1>
                                Стоимость
                            </h1>
                            <div className={"create__task__price__input"}>
                                <input type={"currency"}/>
                                <img src={rubleImg} alt={"rubleImg"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"create__task__footer"}>
                    <a className={"create__task__footer__send-btn"} href={"#!"}>
                        <text>
                            Отправить
                        </text>
                    </a>
                    <a className={"create__task__footer__approve-btn"} href={"#!"}>
                        Согласовать с заказчиком
                    </a>
                </div>
            </div>

            <Footer />
            <Footnote />
        </section>
    );
}

export default CreateTask;
