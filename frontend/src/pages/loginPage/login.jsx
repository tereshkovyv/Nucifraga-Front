import './login.css';
import LogoImg from '../../img/images/icons/LogoLogin.svg';

const Login = () => {
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
                <div className={"helper__block"}>
                    <div>
                        <input type="checkbox" className="custom-checkbox" id="happy" name="happy" value="yes"/>
                        <label htmlFor="happy">Запомнить меня</label>
                    </div>
                    <p><a href="#!">Забыли пароль?</a></p>
                </div>
                <button className={"login__entry-btn"}>
                    <text className={"login__entry__text-btn"}>
                        Войти
                    </text>
                </button>
            </div>
            <div className={"login__footer"}>
                <p><a className={"login__footer__without__acc-btn"} href="/registration">
                    Нет аккаунта?
                </a></p>
                <p><a className={"login__footer__more__details-btn"} href="#!">
                    Подробнее
                </a></p>
            </div>
        </section>
    );
}

export default Login;