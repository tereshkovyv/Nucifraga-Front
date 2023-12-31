import '../loginPage/login.css';

const LogoImg = '../../img/images/icons/LogoLogin.svg';

const Registration = () => {
    return (
        <section className={"login"}>
            <div className={"login__header"}>
                <img className={"login__logoImg"} src={LogoImg} alt={"LogoImg"}/>
                <div className={"login__header__language"}>
                    <button>Eng</button>
                    <button>Rus</button>
                </div>
            </div>
            <div className={"entry__block"}>
                <div className={"login__block"}>
                    <h1 className={"email__block__title"}>Логин</h1>
                    <input name={"email"} type={"text"} placeholder={"Введите ваш email..."}/>
                </div>
                <div className={"password__block"}>
                    <h1 className={"password__block__title"}>Пароль</h1>
                    <input name={"password"} type={"password"} placeholder={"Введите ваш пароль..."}/>
                </div>
                <div className={"password__block"}>
                    <h1 className={"password__block__title"}>Повторите пароль</h1>
                    <input name={"password"} type={"password"} placeholder={"Введите ваш пароль..."}/>
                </div>
                <button className={"login__entry-btn"}>
                    <text className={"login__entry__text-btn"}>
                        Войти
                    </text>
                </button>
            </div>
            <div className={"login__footer"}>
                <p><a className={"login__footer__without__acc-btn"} href="/login">
                    Уже есть аккаунт?
                </a></p>
                <p><a className={"login__footer__more__details-btn"} href="#!">
                    Подробнее
                </a></p>
            </div>
        </section>
    );
}

export default Registration;