import './footer.css'
import footerLogo from '../../img/images/ImgFooter/FooterLogo.svg'

const Footer = () => {
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
                        <a href={"#!"}>Ссылочка 1</a>
                        <a href={"#!"}>Ссылочка 2</a>
                        <a href={"#!"}>Ссылочка 3</a>
                        <a href={"#!"}>Ссылочка 4</a>
                        <a href={"#!"}>Ссылочка 5</a>
                        <a href={"#!"}>Ссылочка 6</a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Footer;