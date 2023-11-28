import './newsAboutUs.css'
import icon_1 from '../../img/images/ImgNewsAboutUs/Icon_1.svg'
import icon_2 from '../../img/images/ImgNewsAboutUs/Icon_2.svg'
import icon_3 from '../../img/images/ImgNewsAboutUs/Icon_3.svg'

const NewsAboutUs = () => {
    return (
        <section className={"infoNewsAboutUs"}>
            <div className={"newsAboutUs__container"}>
                <div className={"newsAboutUs__title"}>
                    Новости о нас
                </div>
                <div className={"newsAboutUs__info_blocks"}>
                    <div className={"newsAboutUs__info_block-1"}>
                        <img src={icon_1} alt={"icon-1"}/>
                        <div className={"newsAboutUs__info_block__title-1"}>
                            Штука 1
                        </div>
                        <text>
                            Съешь еще этих мягких французских булок,
                            да выпей же чаю. Съешь еще этих мягких
                            французских булок, да выпей же чаю. Съешь
                            еще этих мягких французских булок, да выпей
                            же чаю.
                        </text>
                    </div>
                    <div className={"newsAboutUs__info_block-2"}>
                        <img src={icon_2} alt={"icon-2"}/>
                        <div className={"newsAboutUs__info_block__title-2"}>
                            Штука 2
                        </div>
                        <text>
                            Съешь еще этих мягких французских булок,
                            да выпей же чаю. Съешь еще этих мягких
                            французских булок, да выпей же чаю. Съешь
                            еще этих мягких французских булок, да выпей
                            же чаю.
                        </text>
                    </div>
                    <div className={"newsAboutUs__info_block-3"}>
                        <img src={icon_3} alt={"icon-3"}/>
                        <div className={"newsAboutUs__info_block__title-3"}>
                            Штука 3
                        </div>
                        <text>
                            Съешь еще этих мягких французских булок,
                            да выпей же чаю. Съешь еще этих мягких
                            французских булок, да выпей же чаю. Съешь
                            еще этих мягких французских булок, да выпей
                            же чаю.
                        </text>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsAboutUs;