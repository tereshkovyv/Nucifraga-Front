import logoImg from "../../img/images/icons/Logo.svg";
import mottoImg from "../../img/images/ImgMainPage/Motto.svg";
import './mainScreen.css';
import './mainScreenAdaptability.css';

function MainScreen () {
    return (
        <section className={"mainScreen"}>
            <header className={"header"}>
                <div className={"container__main__screen"}>
                    <div>
                        <img src={logoImg} alt="Logo"/>
                    </div>
                    <nav className={"header__nav"}>
                        <ul>
                            <li><a href="#!">меню 1</a></li>
                            <li><a href="/personalAccount">Канбан доска</a></li>
                            <li><a href="/createTask">Запланировать задачу</a></li>
                            <li><a href="/authentication/register" className={"header__nav-btn"}>Вход</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={"motto"}>
                <img src={mottoImg} alt={"imgMotto"}/>
            </div>
            <div className={"start__work"}>
                <li><a href="/personalAccount" className={"start__work-btn"}>Начать работу</a></li>
            </div>
        </section>
    )
}

export default MainScreen;