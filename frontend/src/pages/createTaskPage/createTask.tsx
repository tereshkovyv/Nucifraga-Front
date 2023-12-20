import '../personalAccountPage/personalAccount.css';
import '../../components/footer/footer.css';
import '../../components/footnote/footnote.css';
import './createTask.css';
import { Header } from '../../components/header/header';
import { InfoFootnote } from '../../components/footnote/infoFootnote';
import {Footer} from '../../components/footer/footer';

const clipImg = "img/images/ImgCreateTask/clip.svg";
const rubleImg = "img/images/ImgCreateTask/ruble.svg";

export function CreateTask(){
    return (
        <section className={"personal__account"}>
            <Header />

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
                            <text>
                                Отвественный
                            </text>
                            <div>
                                OBJ
                            </div>
                        </div>
                    </div>
                    <div className={"create__task__deadline"}>
                        <div className={"create__task__deadline__description"}>
                            <text>
                                Крайний срок
                            </text>
                            <div className={"create__task__deadline__input"}>
                                <input type="date" id="start" name="trip-start"
                                       min="2023-01-01" max="2060-12-31" />
                            </div>
                        </div>
                    </div>
                    <div className={"create__task__price"}>
                        <div className={"create__task__price__description"}>
                            <text>
                                Стоимость
                            </text>
                            <div className={"create__task__price__input"}>
                                <input type={"text"}/>
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
            <InfoFootnote />            
        </section>
    );
}
