import './footer.css'
const footerLogo = 'img/images/ImgFooter/FooterLogo.svg'

export function Footer(){
    return (
        <section className={"infoFooter"}>
            <div className={"footer__container"}>
                <div>
                    <div className={"footer__block"}>
                        <img src={footerLogo} alt={"FooterLogo"} />
                        <div className={"footer__block__links__mail"}>
                            <a className={"footer__block__link__gmail"} href={"#!"}>nucifraga@gmail.com</a>
                            <a className={"footer__block__link__connect"} href={"#!"}>Связаться</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={"footer__block__links"}>
                        <text>
                            Ссылки
                        </text>
                        <a href={"/listProjects"}>Список проектов</a>
                        <a href={"#mainPage"}>О нас</a>
                    </div>
                </div>

            </div>
        </section>
    );
}
