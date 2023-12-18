import '../personalAccountPage/personalAccount.css';
import '../../components/landing/footer/footer.css';
import '../../components/landing/footnote/footnote.css';
import './createTask.css';

const footerLogo = "img/images/imgPersonalAccount/LogoWhite.svg";
const logoImg = "img/images/icons/Logo.svg";
const iconPerson = "img/images/imgPersonalAccount/iconPerson.svg";
const searchImg = "img/images/imgPersonalAccount/search.svg";
const pointerWhiteImg = "img/images/imgPersonalAccount/pointerWhite.svg";
const clipImg = "img/images/ImgCreateTask/clip.svg";
const rubleImg = "img/images/ImgCreateTask/ruble.svg";

export function CreateTask(){
    return (
        <section className={"personal__account"}>
            <div className={"personal__account__header"}>
                <div>
                    <img src={logoImg} alt="Logo"/>
                </div>
                <nav className={"personal__account__header__nav"}>
                    <div className={"personal__account__header__nav__search"}>
                        <input className={"personal__account__header__nav__search__text"}
                               placeholder="Поиск по сайту"/>
                        <a href={"#!"}>
                            <img src={searchImg} alt={"Search"}/>
                        </a>
                    </div>
                    <li>
                        <a href="#!">Личный кабинет</a>
                    </li>
                    <div className={"personal__account__FL"}>
                        <input type={"checkbox"} className={"personal__account__FL-checkbox"}
                               id={"personal__account__FL__checkbox"}/>

                        <label htmlFor={"personal__account__FL__checkbox"}>
                            <img src={iconPerson} alt="iconPerson"/>
                        </label>

                        <div className={"personal__account__FL__more__info"}>
                            <img src={pointerWhiteImg} alt={"pointerWhiteImg"}/>
                            <nav>
                                <div>
                                    <a href="#!">Профиль</a>
                                </div>
                                <div>
                                    <a href="#!">Уведомление</a>
                                </div>
                                <div>
                                    <a href="#!">Выйти</a>
                                </div>
                            </nav>
                        </div>
                        <text>
                            Сапкалова Кристина
                        </text>
                    </div>
                </nav>
            </div>

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

            <section className={"infoFooter"}>
                <div className={"footer__container"}>
                    <div className={"footer__block"}>
                        <img src={footerLogo} alt={"FooterLogo"} />
                        <div className={"footer__block__links__mail"}>
                            <a className={"personal__account__footer__block__link__gmail"} href={"#!"}>nucifraga@gmail.com</a>
                            <a className={"footer__block__link__connect"} href={"#!"}>Связаться</a>
                        </div>
                    </div>
                    <div className={"footer__block__links"}>
                        <text>
                            Ссылки
                        </text>
                        <a href={"/listProjects"}>Список проектов</a>
                        <a href={"#mainPage"}>О нас</a>
                    </div>
                </div>
            </section>

            <section className={"infoFootnote"}>
                <div className={"personal__account__footnote"}>
                    <text>
                        Разработанно NuciFraga
                    </text>
                    <text>
                        Политика конфиденциальности
                    </text>
                    <text>
                        © 2023 IT  NuciFraga
                    </text>
                </div>
            </section>

        </section>
    );
}
