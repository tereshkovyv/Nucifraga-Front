import './mainScreen.css';
import './mainScreenAdaptability.css';

const logoImg = "img/images/icons/Logo.svg";
const mottoImg = "img/images/ImgMainPage/Motto.svg";
function MainScreen () {
    return (
        <section className={"mainScreen"} id={"mainPage"}>
            <header className={"header"}>
                <div className={"container__main__screen"}>
                    <div>
                        <img src={logoImg} alt="Logo"/>
                    </div>
                    <nav className={"header__nav"}>
                        <ul>
                            <li><a href="#infoAboutUs">Почему мы</a></li>
                            <li><a href="#infoPossibilities">Особенности</a></li>
                            <li><a href="#infoNewsAboutUs">О нас</a></li>
                            <li><a href="/authentication/register" className={"header__nav-btn"}>Вход</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={"motto"}>
                <img src={mottoImg} alt={"imgMotto"}/>
            </div>
            <div className={"start__work"}>
                <li><a href="/listProjects" className={"start__work-btn"}>Начать работу</a></li>
            </div>
        </section>
    )
}

export default MainScreen;