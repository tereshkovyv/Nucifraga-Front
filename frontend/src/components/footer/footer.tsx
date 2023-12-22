import './footer.css'
const footerLogo = 'img/images/ImgFooter/LogoWhiteFooter.svg'
const buttonIcon = 'img/images/icons/ButtonIcon.svg'
const instagramWhiteIcon = 'img/images/ImgFooter/InstagramWhiteIcon.svg'
const whatsAppWhiteIcon = 'img/images/ImgFooter/WhatsAppWhiteIcon.svg'
const facebookWhiteIcon = 'img/images/ImgFooter/FacebookWhiteIcon.svg'
const linkedInWhiteIcon = 'img/images/ImgFooter/LinkedInWhiteIcon.svg'

export function Footer(){
    return (
        <section className={"info__footer"}>
            <div className={"footer__container"}>
                <div>
                    <div className={"footer__block"}>
                        <img src={footerLogo} alt={"FooterLogo"} />
                        <div className={"footer__block__links__mail"}>
                            <a className={"footer__block__link__gmail"} href={"#!"}>nucifraga@gmail.com</a>
                            <div className={"footer__block__social__media"}>
                                <div>
                                    <a href={"!#"}>
                                        <img src={instagramWhiteIcon} alt={"instagramIcon"}/>
                                    </a>
                                </div>
                                <div>
                                    <a href={"!#"}>
                                        <img src={whatsAppWhiteIcon} alt={"whatsAppIcon"}/>
                                    </a>
                                </div>
                                <div>
                                    <a href={"!#"}>
                                        <img src={facebookWhiteIcon} alt={"facebookIcon"}/>
                                    </a>
                                </div>
                                <div>
                                    <a href={"!#"}>
                                        <img src={linkedInWhiteIcon} alt={"linkedInIcon"}/>
                                    </a>
                                </div>
                            </div>
                            <a className={"footer__block__link__connect"} href={"#!"}>
                                Связаться
                                <img src={buttonIcon} alt={"buttonIcon"}/>
                            </a>
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
