const logoImg = "img/images/icons/Logo.svg";
const iconPerson = "img/images/imgPersonalAccount/iconPerson.svg";
const searchImg = "img/images/imgPersonalAccount/search.svg";
const pointerWhiteImg = "img/images/imgPersonalAccount/pointerWhite.svg";

export function Header() {
    return (
        <div className={"personal__account__header"}>
            <div>
                <img src={logoImg} alt="Logo" />
            </div>
            <nav className={"personal__account__header__nav"}>
                <div className={"personal__account__header__nav__search"}>
                    <input className={"personal__account__header__nav__search__text"}
                           placeholder="Поиск по сайту" />
                    <a href={"#!"}>
                        <img src={searchImg} alt={"Search"} />
                    </a>
                </div>
                <li>
                    <a href="#!">Личный кабинет</a>
                </li>
                <div className={"personal__account__FL"}>
                    <input type={"checkbox"} className={"personal__account__FL-checkbox"}
                           id={"personal__account__FL__checkbox"} />

                    <label htmlFor={"personal__account__FL__checkbox"}>
                        <img src={iconPerson} alt="iconPerson" />
                    </label>

                    <div className={"personal__account__FL__more__info"}>
                        <img src={pointerWhiteImg} alt={"pointerWhiteImg"} />
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
    );
}