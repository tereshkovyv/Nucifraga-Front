import './infoAboutUs.css'
import './infoAboutUsAdaptability.css'
import firstImg from '../../img/images/ImgInfoAboutUsPage/Block_1.png'
import secondImg from '../../img/images/ImgInfoAboutUsPage/Block_5.png'
import thirdImg from '../../img/images/ImgInfoAboutUsPage/Block_6.png'

const InfoAboutUs = () => {
    return (
        <section className={"infoAboutUs"}>
            <div className={"info__container"}>
                <div className={"info__title"}>
                    <text>Чем мы занимаемся?</text>
                </div>
                <div className={"info__blocks"}>
                    <div className={"info__blocks-1"}>
                        <div className={"info__blocks__text-1"}>
                            <text className={"info__blocks__text__number-1"}>
                                01
                            </text>
                            <text className={"info__blocks__text__title-1"}>
                                Поможем найти исполнителя
                            </text>
                            <text className={"info__blocks__text__desc-1"}>
                                Удобно искать исполнителей для вашей задачи
                            </text>
                        </div>
                    </div>
                    <div className={"info__blocks-2"}>
                        <div className={"info__blocks__text-2"}>
                            <text className={"info__blocks__text__number-2"}>
                                02
                            </text>
                            <text className={"info__blocks__text__title-2"}>
                                Поможем найти заказчика
                            </text>
                            <text className={"info__blocks__text__desc-2"}>
                                Удобно искать заказчиков с интересующими вас задачами 
                            </text>
                        </div>
                    </div>
                    <div className={"info__blocks-3"}>
                        <img src={firstImg} alt={"firstImg"}/>
                    </div>
                    <div className={"info__blocks-4"}>
                        <img src={secondImg} alt={"secondImg"}/>
                    </div>
                    <div className={"info__blocks-5"}>
                        <div className={"info__blocks__text-5"}>
                            <text className={"info__blocks__text__number-5"}>
                                03
                            </text>
                            <text className={"info__blocks__text__title-5"}>
                                Упрощаем взаимодействие людей
                            </text>
                            <text className={"info__blocks__text__desc-5"}>
                                CRM-система для эффективного взаимодействия заказчика и исполнителя
                            </text>
                        </div>
                    </div>
                    <div className={"info__blocks-6"}>
                        <div className={"info__blocks__text-6"}>
                            <text className={"info__blocks__text__number-6"}>
                                04
                            </text>
                            <text className={"info__blocks__text__title-6"}>
                                Упрощаем огранизацию работы
                            </text>
                            <text className={"info__blocks__text__desc-6"}>
                                Организуйте эффективную работу над задачами и проектами на канбан-доске.
                            </text>
                        </div>
                    </div>
                    <div className={"info__blocks-7"}>
                        <img src={thirdImg} alt={"thirdImg"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoAboutUs;