import './footerLanding.css'
const footerLogo = '/img/images/ImgFooter/FooterLogo.svg'
const buttonIcon = "/img/images/icons/ButtonIcon.svg";
const instagramBlueIcon = "/img/images/ImgFooter/InstagramWhiteBlueIcon.svg";
const whatsAppBlueIcon = "/img/images/ImgFooter/WhatsAppWhiteBlueIcon.svg";
const facebookBlueIcon = "/img/images/ImgFooter/FacebookWhiteBlueIcon.svg";
const linkedInBlueIcon = "/img/images/ImgFooter/LinkedInWhiteBlueIcon.svg";

const FooterLanding = () => {
    return (
        <section className={"info__footer-land"}>
            <div className={"footer__container-land"}>

                <div>
                    <div className={"footer__block-land"}>
                        <img src={footerLogo} alt={"FooterLogo"} />
                        <div className={"footer__block__links__mail-land"}>
                            <a className={"footer__block__link__gmail-land"} href={"#!"}>nucifraga@gmail.com</a>

                            <div className={"footer__block__social__media-land"}>
                                <div>
                                    <a href={"!#"}>
                                        <img src={instagramBlueIcon} alt={"instagramIcon"}/>
                                    </a>
                                </div>
                                <div>
                                    <a href={"!#"}>
                                        <img src={whatsAppBlueIcon} alt={"whatsAppIcon"}/>
                                    </a>
                                </div>
                                <div>
                                    <a href={"!#"}>
                                        <img src={facebookBlueIcon} alt={"facebookIcon"}/>
                                    </a>
                                </div>
                                <div>
                                    <a href={"!#"}>
                                        <img src={linkedInBlueIcon} alt={"linkedInIcon"}/>
                                    </a>
                                </div>
                            </div>

                            <a className={"footer__block__link__connect-land"} href={"#!"}>
                                Связаться
                                <img src={buttonIcon} alt={"buttonIcon"}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={"footer__block__links-land"}>
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

export default FooterLanding;