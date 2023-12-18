import './listProjects.css';
import React from 'react';
import { useState } from 'react';
import '../../components/landing/footer/footer.css';
import '../../components/landing/footnote/footnote.css';

const logoImg = "img/images/icons/Logo.svg";
const searchImg = "img/images/imgPersonalAccount/search.svg";
const searchIconBlack = "img/images/imgListProjects/searchIcons.svg";
const iconPerson = "img/images/imgPersonalAccount/iconPerson.svg";
const pointerWhiteImg = "img/images/imgPersonalAccount/pointerWhite.svg";
const footerLogo = "img/images/imgPersonalAccount/LogoWhite.svg";
const clipboardIcon = "img/images/imgListProjects/clipboardIcon.svg";
const invoiceTransactionIcon = "img/images/imgListProjects/invoiceTransactionIcon.svg";
const kanbanIcon = "img/images/imgListProjects/kanbanIcon.svg";
const menuIcon = "img/images/imgListProjects/menuIcon.svg";
const taskIcon = "img/images/imgListProjects/taskIcon.svg";
const groupIcon = "img/images/imgListProjects/groupProfileUsersIcon.svg";
const userIcon = "img/images/imgListProjects/userPersonProfileAvatarIcon.svg";

const ListProjects = () => {

    const [tasks] = useState([
        { Name: "сайт Nucifraga", Icon: groupIcon, Role: "руководитель", Tags: "#приоритетный",
            UsersInfo: { UsersInfoId: "users__info__1", AllUsers: "Миша Миша", Managers: "Миша Миша", Subordinates: "", UserIcon: userIcon }},
        { Name: "сайт Nucifraga", Icon: groupIcon, Role: "руководитель", Tags: "#приоритетный",
            UsersInfo: { UsersInfoId: "users__info__2", AllUsers: "Алеша Алеша", Managers: "", Subordinates: "Алеша Алеша", UserIcon: userIcon }},
        { Name: "сайт Nucifraga", Icon: groupIcon, Role: "руководитель", Tags: "#приоритетный",
            UsersInfo: { UsersInfoId: "users__info__3", AllUsers: "Саша Саша, Никита Никита", Managers: "Саша Саша", Subordinates: "Никита Никита", UserIcon: userIcon }},
        { Name: "сайт Nucifraga", Icon: groupIcon, Role: "руководитель", Tags: "#приоритетный",
            UsersInfo: { UsersInfoId: "users__info__4", AllUsers: "", Managers: "", Subordinates: "", UserIcon: userIcon }},
        { Name: "сайт Nucifraga", Icon: groupIcon, Role: "руководитель", Tags: "#приоритетный",
            UsersInfo: { UsersInfoId: "users__info__5", AllUsers: "", Managers: "", Subordinates: "", UserIcon: userIcon }},
        { Name: "сайт A", Icon: groupIcon, Role: "руководитель", Tags: "#приоритетный",
            UsersInfo: { UsersInfoId: "users__info__6", AllUsers: "A A", Managers: "A A", Subordinates: "", UserIcon: userIcon }}
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [taskPerPages] = useState(5);

    const lastTaskIndex = currentPage * taskPerPages;
    const firstTaskIndex = lastTaskIndex - taskPerPages;

    const nextList = pageNumber => setCurrentPage(pageNumber + 1 > Math.ceil(tasks.length / taskPerPages) ? pageNumber : pageNumber + 1);
    const previousList = pageNumber => setCurrentPage(pageNumber - 1 > 0 ? pageNumber - 1 : pageNumber);

    function getTaskPerBlock (tasks) {
        return tasks.slice(firstTaskIndex, lastTaskIndex);
    }

    return (
        <section className={"list__projects"}>
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

            <div className={"navigation__panel"}>
                <nav>
                    <a href={"/createTask"}>
                        <img src={menuIcon} alt={"menuIcon"}/>
                    </a>
                    <a href={"!#"}>
                        <img src={taskIcon} alt={"taskIcon"}/>
                    </a>
                    <a href={"/personalAccount"}>
                        <img src={kanbanIcon} alt={"kanbanIcon"}/>
                    </a>
                    <a href={"!#"}>
                        <img src={invoiceTransactionIcon} alt={"invoiceTransactionIcon"}/>
                    </a>
                    <a href={"/listProjects"}>
                        <img src={clipboardIcon} alt={"clipboardIcon"}/>
                    </a>
                </nav>
            </div>

            <div className={"nav__list__projects"}>
                <text>
                    Проекты
                </text>
                <div className={"create__task-btn"}>
                    <a href="/createTask">Создать</a>
                </div>
                <div className={"nav__list__projects__search"}>
                    <input className={"nav__list__projects__search__text"}
                           placeholder="Поиск + теги"/>
                    <a href={"#!"}>
                        <img src={searchIconBlack} alt={"Search"}/>
                    </a>
                </div>
            </div>

            <div className={"list__projects__block"}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div className={"list__projects__block__name"}>
                                    <input type={"checkbox"}/>
                                    <text>Название</text>
                                </div>
                            </th>
                            <th>
                                <text>Участники</text>
                            </th>
                            <th>
                                <text>Роль</text>
                            </th>
                            <th>
                                <text>Теги</text>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {getTaskPerBlock(tasks).map((task) => (
                        <tr>
                            <td>
                                <div className={"list__projects__block__name"}>
                                    <input type={"checkbox"}/>
                                    <text>
                                        {task.Name}
                                    </text>
                                </div>
                            </td>
                            <td>
                                <div className={"list__projects__block__FL"}>
                                    <input type={"checkbox"} className={"list__projects__block__FL-checkbox"}
                                           id={task.UsersInfo.UsersInfoId} />

                                    <label htmlFor={task.UsersInfo.UsersInfoId}>
                                        <img src={task.Icon} alt={task.Icon}/>
                                    </label>

                                    <div id={"list__projects__block__FL__users_info"}>
                                        <div className={task.UsersInfo.UsersInfoId}>
                                            <nav className={"list__projects__block__users__info__header"}>
                                                <label>
                                                    <text>Все</text>
                                                </label>
                                                <label>
                                                    <text>Руководители</text>
                                                </label>
                                                <label>
                                                    <text>Участники</text>
                                                </label>
                                            </nav>
                                            <div className={"list__projects__block__all__users"}>
                                                <img src={task.UsersInfo.UserIcon} alt={task.UsersInfo.UserIcon}/>
                                                <text>{task.UsersInfo.AllUsers}</text>
                                            </div>
                                            <div className={"list__projects__block__managers"}>
                                                {/*<text>{task.UsersInfo.Managers}</text>*/}
                                            </div>
                                            <div className={"list__projects__block__subordinates"}>
                                                {/*<text>{task.UsersInfo.Subordinates}</text>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <text>
                                    {task.Role}
                                </text>
                            </td>
                            <td>
                                <text>
                                    {task.Tags}
                                </text>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className={"list__projects__block__footer"}>
                    <div className={"list__projects__block__footer__noted"}>
                        <text>Отмечено: {currentPage}</text>
                    </div>
                    <div className={"list__projects__block__footer__total"}>
                        <text>Всего: {tasks.length}</text>
                    </div>
                    <div className={"list__projects__block__footer__pages"}>
                        <text>Страница: {currentPage}</text>
                    </div>
                    <div className={"list__projects__block__footer__pagination"}>
                        <label onClick={() => previousList(currentPage)} >&lt; Предыдущая </label>
                        <label onClick={() => nextList(currentPage)} >Следующая &gt;</label>
                    </div>
                </div>
                <div className={"list__projects__block__footnote"}>
                    <div className={"list__projects__block__footnote__open-btn"}>
                        <a href={"!#"}>Открыть</a>
                    </div>
                    <div className={"list__projects__block__footnote__edit-btn"}>
                        <a href={"!#"}>Редактировать</a>
                    </div>
                    <div className={"list__projects__block__footnote__delete-btn"}>
                        <a href={"!#"}>Удалить</a>
                    </div>
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

export default ListProjects;
