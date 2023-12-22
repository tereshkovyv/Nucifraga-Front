import './navPanel.css'
const menuIcon = "/img/images/imgListProjects/menuIcon.svg";
const taskIcon = "/img/images/imgListProjects/taskIcon.svg";
const kanbanIcon = "/img/images/imgListProjects/kanbanIcon.svg";
const invoiceTransactionIcon = "/img/images/imgListProjects/invoiceTransactionIcon.svg";
const clipboardIcon = "/img/images/imgListProjects/clipboardIcon.svg";


export function NavPanel() {
    return (
        <div className={"navigation__panel"}>
            <nav>
                <a href={"/createTask"}>
                    <img src={menuIcon} alt={"menuIcon"}/>
                </a>
                <a href={"!#"}>
                    <img src={taskIcon} alt={"taskIcon"}/>
                </a>
                <a href={"/personalAccount"}>
                    <img src={kanbanIcon} alt={"kanbanIcon"}/>
                </a>
                <a href={"!#"}>
                    <img src={invoiceTransactionIcon} alt={"invoiceTransactionIcon"}/>
                </a>
                <a href={"/listProjects"}>
                    <img src={clipboardIcon} alt={"clipboardIcon"}/>
                </a>
            </nav>
        </div>
    );
}