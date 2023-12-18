import './infoAdvantage.css'

const InfoAdvantage = () => {
    return (
        <section className={"infoAdvantage"}>
            <div className={"advantage__container"}>
                <div className={"advantage__title"}>
                    Почему следует выбрать нас?
                </div>
                <div className={"advantage__desc"}>
                    Нас стоит выбрать, потому что мы предлагаем систему с
                    отдельным взаимодейсвием менеджера и заказчика, тогда как 
                    большинство CRM-систем предназначены для целых компаний.
                </div>
            </div>
        </section>
    );
}

export default InfoAdvantage;