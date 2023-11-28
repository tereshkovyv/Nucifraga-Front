import './personalAccount.css';
import footerLogo from "../../img/images/imgPersonalAccount/LogoWhite.svg";
import logoImg from "../../img/images/icons/Logo.svg";
import iconPerson from "../../img/images/imgPersonalAccount/iconPerson.svg";
import searchImg from "../../img/images/imgPersonalAccount/search.svg";
import pointerBlackImg from "../../img/images/imgPersonalAccount/pointerBlack.png";
import iconPersonMiniImg from "../../img/images/imgPersonalAccount/icoUserMini.png";
import timeIconImg from "../../img/images/imgPersonalAccount/timeIcon.png";
import pointerWhiteImg from "../../img/images/imgPersonalAccount/pointerWhite.svg";
import React, {useEffect, useState} from "react";
import authService from "../../components/api-authorization/AuthorizeService";

const PersonalAccount = () => {
    const [boards, setBoards] = useState([]);
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    async function getTasks() {
        const board = [
            { id: 0, title:"Идеи", items: []},
            { id: 1, title:"Нужно сделать", items: []},
            { id: 2, title:"Делается", items: []},
            { id: 3, title:"Сделано", items: []},
            { id: 4, title:"Просрочено", items: []}];
        //const token = await authService.getAccessToken();
        const response = await fetch('api/tasks',
                {method:'GET'})
                            .then(response => response.json())
                            .then(data => {
                                data.forEach(task => {
                                    board[task.status].items.push(task);
                                })
                            });
        setBoards(board);
    }
    async function updateTask(task){
        const response = await fetch(`api/tasks`, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
            "Content-type": "application/json"
            }
        })
        .then(response => response.json())
            .then(data => console.log(data));
    }

    useEffect(() => {
        getTasks();
    }, []);

    function dragOverHandler(e) {
        e.preventDefault();
    }

    function dragLeaveHandler(e) {
        
    }

    function dragStartHandler(e, board, item) {
        setCurrentBoard(board);
        setCurrentItem(item);
    }

    function dragEndHandler(e) { }

    function dragHandler(e, board, item) {
        item.status = board.id;
        updateTask(item).then();
        e.preventDefault();
        e.stopPropagation();
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1, 0, currentItem);

        setBoards(boards.map((b) => {
            if (b.id === board.id) {
                return board;
            }
            if (b.id === currentBoard.id) {
                return currentBoard;
            }
            return b;
        }))
    }
    function dropCardHandler(e, board) {
        board.items.push(currentItem);
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        setBoards(boards.map((b) => {
            if (b.id === board.id) {
                return board;
            }
            if (b.id === currentBoard.id) {
                return currentBoard;
            }
            return b;
        }))
    }

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
            <div className={"personal__account__info"}>
                <div className={"personal__account__info__title"}>
                    КАНБАН ДОСКА
                </div>
                <div className={"personal__account__info__blocks"}>
                    {boards?.map((board) => (
                        <div
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropCardHandler(e, board)}
                            className={"personal__account__info__blocks__text"}
                            key={board.id}>
                            <text>
                                {board.title}
                            </text>
                            {board?.items.map((item) => (
                                <div
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDragLeave={(e) => dragLeaveHandler(e)}
                                    onDragStart={(e) => dragStartHandler(e, board, item)}
                                    onDragEnd={(e) => dragEndHandler(e)}
                                    onDrop={(e) => dragHandler(e, board, item)}

                                    draggable={"true"}
                                    className={"personal__account__info__blocks__task"}
                                    key={item.id}>
                                    <text>
                                        {item.name}
                                    </text>

                                    <div className={"personal__account__info__blocks__footer"}>
                                        <div className={"personal__account__info__blocks__icons"}>
                                            <img src={iconPersonMiniImg} alt={"iconPersonMiniImg"}/>
                                            <img src={pointerBlackImg} alt={"pointerImg"}/>
                                            <img src={iconPersonMiniImg} alt={"iconPersonMiniImg"}/>
                                        </div>
                                        <div className={"personal__account__info__blocks__data"}>
                                            <img src={timeIconImg} alt={"timeIconImg"}/>
                                            <text>
                                                {item.time != null ? item.time.split('T')[0]:""}
                                            </text>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className={"personal__account__info__create__block"}>
                <div className={"personal__account__info__create__block-btn"}>
                    <a href="#!">Создать</a>
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
                        <a href={"#!"}>Ссылочка 1</a>
                        <a href={"#!"}>Ссылочка 2</a>
                        <a href={"#!"}>Ссылочка 3</a>
                        <a href={"#!"}>Ссылочка 4</a>
                        <a href={"#!"}>Ссылочка 5</a>
                        <a href={"#!"}>Ссылочка 6</a>
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

export default PersonalAccount;
