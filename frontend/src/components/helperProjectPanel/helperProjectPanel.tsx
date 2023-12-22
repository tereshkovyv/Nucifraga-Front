import './helperProjectPanel.css'
const settingsIcon = "/img/images/icons/settingsIcon.svg";
const searchIconBlack = "/img/images/imgListProjects/searchIcons.svg";

export function HelperProjectPanel(){
    return (
        <div className={"nav__list__projects"}>
            <text>
                Проекты
            </text>
            <div className={"create__task-btn"}>
                <a href="/createTask">Создать</a>
            </div>
            <div className={"nav__list__projects__search"}>
                <input className={"nav__list__projects__search__text"}
                       placeholder="Поиск + теги"/>
                <a href={"#!"}>
                    <img src={searchIconBlack} alt={"Search"}/>
                </a>
            </div>
            <div className={"settings__block"}>
                <label className={"settings-btn"}>
                    <img src={settingsIcon} alt={"settingsIcon"}/>
                </label>
            </div>
        </div>
    );
}