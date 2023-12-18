import './newsAboutUs.css'

const icon_1 = 'img/images/ImgNewsAboutUs/Icon_1.svg'
const icon_2 = 'img/images/ImgNewsAboutUs/Icon_2.svg'
const icon_3 = 'img/images/ImgNewsAboutUs/Icon_3.svg'

const NewsAboutUs = () => {
    return (
        <section className={"infoNewsAboutUs"} id={"infoNewsAboutUs"}>
            <div className={"newsAboutUs__container"}>
                <div className={"newsAboutUs__title"}>
                    Новости о нас
                </div>
                <div className={"newsAboutUs__info_blocks"}>
                    <div className={"newsAboutUs__info_block-1"}>
                        <img src={icon_1} alt={"icon-1"}/>
                        <div className={"newsAboutUs__info_block__title-1"}>
                            Молодая команда
                        </div>
                        <text>
                            Мы молодая команда разработчиков.
                            Нам по 20 лет, мы готовы к развитию и изменениям
                        </text>
                    </div>
                    <div className={"newsAboutUs__info_block-2"}>
                        <img src={icon_2} alt={"icon-2"}/>
                        <div className={"newsAboutUs__info_block__title-2"}>
                            Пользователи важны
                        </div>
                        <text>
                            Мы считаем, что пользователи на первом месте. Мы внимательно относимся к мелочам и деталям. Постоянно получаем обратную связь
                        </text>
                    </div>
                    <div className={"newsAboutUs__info_block-3"}>
                        <img src={icon_3} alt={"icon-3"}/>
                        <div className={"newsAboutUs__info_block__title-3"}>
                            Постоянный прогресс
                        </div>
                        <text>
                            Мы постоянно учимся чему-то новому, экспериментируем и многое узнаём на практике
                        </text>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsAboutUs;