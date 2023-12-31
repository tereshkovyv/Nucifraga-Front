import { Header } from '../../components/header/header';
import { Footnote } from '../../components/footnote/footnote';
import { Footer } from '../../components/footer/footer';
import { NavPanel } from "../../components/navPanel/navPanel";
import { HelperProjectPanel } from "../../components/helperProjectPanel/helperProjectPanel";
import './personalAccount.css';
import React, { useState } from 'react';

const pointerBlackImg = "img/images/imgPersonalAccount/pointerBlack.png";
const iconPersonMiniImg = "img/images/imgPersonalAccount/icoUserMini.png";
const timeIconImg = "img/images/imgPersonalAccount/timeIcon.png";
const addTaskImage = "img/images/imgPersonalAccount/addTaskImage.svg";

const PersonalAccount = () => {

    const [boards, setBoards] = useState([
        { id: 1, title:"Идеи", items: [{id: 1, title: "Изучить технологию изготовления asdjhfaswojdfo " +
                    "askdjfokasjdfoj asodfjopias fojasn dfojpasdnofj nasjdf nsadj asldmnalk nsdl;kfnlkmasnd " +
                    "l;fasdnlkf masn;dfnkjla sdnbf asndfkjl", data: "8 jun" }]},
        { id: 2, title:"Нужно сделать", items: [{id: 2, title: "Изучить технологию изготовления", data: "1 jun" }]},
        { id: 3, title:"Делается", items: [{id: 3, title: "Изучить технологию изготовления", data: "1 jun" }]},
        { id: 4, title:"Сделано", items: [{id: 4, title: "фыв", data: "9 jun" }, {id: 5, title: "фыasdasd", data: "1 jun" }]},
        { id: 5, title:"Просрочено", items: [
                {id: 6, title: "1", data: "27 jun" },
                {id: 7, title: "2", data: "27 jun" },
                {id: 8, title: "3", data: "27 jun" },
                {id: 9, title: "4", data: "27 jun" },
                {id: 10, title: "5", data: "27 jun" },
                {id: 11, title: "6", data: "27 jun" },
                {id: 12, title: "7", data: "27 jun" },
                {id: 13, title: "8", data: "27 jun" },
                {id: 14, title: "9", data: "27 jun" }
            ]}
    ]);

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const [currentPages, setCurrentPages] = useState([
        {id: 1, currentBlock: 1},
        {id: 2, currentBlock: 1},
        {id: 3, currentBlock: 1},
        {id: 4, currentBlock: 1},
        {id: 5, currentBlock: 1}
    ]);


    const [taskPerPages] = useState(3);

    let lastTasksIndexes = [
        {id: 1, lastTaskIndex: 0 },
        {id: 2, lastTaskIndex: 0 },
        {id: 3, lastTaskIndex: 0 },
        {id: 4, lastTaskIndex: 0 },
        {id: 5, lastTaskIndex: 0 }
    ];

    currentPages.forEach((currentPage) =>
        lastTasksIndexes[currentPage.id - 1].lastTaskIndex = currentPage.currentBlock * taskPerPages
    );

    let firstTasksIndexes = [
        {id: 1, firstTaskIndex: lastTasksIndexes[0].lastTaskIndex - taskPerPages },
        {id: 2, firstTaskIndex: lastTasksIndexes[1].lastTaskIndex - taskPerPages },
        {id: 3, firstTaskIndex: lastTasksIndexes[2].lastTaskIndex - taskPerPages },
        {id: 4, firstTaskIndex: lastTasksIndexes[3].lastTaskIndex - taskPerPages },
        {id: 5, firstTaskIndex: lastTasksIndexes[4].lastTaskIndex - taskPerPages }
    ];

    function getChangeList(pageNumber, id) {
        let tempCurrentPages = currentPages.slice(0);

        tempCurrentPages.forEach((currentPage) => {
            if (currentPage.id === id) {
                tempCurrentPages[currentPage.id - 1].currentBlock = pageNumber;
            }
        })

        return tempCurrentPages;
    }

    function getNextChangeList(id, boardItems) {
        let tempCurrentPages = currentPages.slice(0);

        tempCurrentPages.forEach((currentPage) => {
            if (currentPage.id === id) {
                if (tempCurrentPages[currentPage.id - 1].currentBlock + 1 <= Math.ceil(boardItems.length / taskPerPages)) {
                    tempCurrentPages[currentPage.id - 1].currentBlock += 1;
                }
            }
        })

        return tempCurrentPages;
    }

    function getPreviousChangeList(id) {
        let tempCurrentPages = currentPages.slice(0);

        tempCurrentPages.forEach((currentPage) => {
            if (currentPage.id === id) {
                if (tempCurrentPages[currentPage.id - 1].currentBlock - 1 > 0) {
                    tempCurrentPages[currentPage.id - 1].currentBlock -= 1;
                }
            }
        })

        return tempCurrentPages;
    }

    function getStartChangeList(id) {
        let tempCurrentPages = currentPages.slice(0);

        tempCurrentPages.forEach((currentPage) => {
            if (currentPage.id === id) {
                tempCurrentPages[currentPage.id - 1].currentBlock = 1;
            }
        })

        return tempCurrentPages;
    }

    function getEndChangeList(id, boardItems) {
        let tempCurrentPages = currentPages.slice(0);

        tempCurrentPages.forEach((currentPage) => {
            if (currentPage.id === id) {
                tempCurrentPages[currentPage.id - 1].currentBlock = Math.ceil(boardItems.length / taskPerPages);
            }
        })

        return tempCurrentPages;
    }

    const paginate = (pageNumber, id) => setCurrentPages(getChangeList(pageNumber[0], id));
    const nextList = (id, boardItems) => setCurrentPages(getNextChangeList(id, boardItems));
    const previousList = id => setCurrentPages(getPreviousChangeList(id));
    const startList = id => setCurrentPages(getStartChangeList(id));
    const endList = (id, boardItems) => setCurrentPages(getEndChangeList(id, boardItems));


    function dragOverHandler(e) {
        e.preventDefault();
    }

    function dragLeaveHandler(e) {

    }

    function dragStartHandler(e, board, item) {
        setCurrentBoard(board);
        setCurrentItem(item);
    }

    function dragEndHandler(e) {

    }

    function dragHandler(e, board, item) {
        e.preventDefault();
        e.stopPropagation();

        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1, 0, currentItem);

        setBoards(boards.map((b) => {
            if (b.id === board.id) {
                return board;
            }
            if (b.id === currentBoard.id) {
                return currentBoard;
            }
            return b;
        }))
    }

    function dropCardHandler(e, board) {
        board.items.push(currentItem);
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex, 1);

        setBoards(boards.map((b) => {
            if (b.id === board.id) {
                return board;
            }
            if (b.id === currentBoard.id) {
                return currentBoard;
            }
            return b;
        }))
    }

    function getTaskPerBlock (board) {
        return board.items.slice(
            firstTasksIndexes[board.id - 1].firstTaskIndex,
            lastTasksIndexes[board.id - 1].lastTaskIndex);
    }

    function getPagination(taskPerPages, totalItems) {
        const pageNumbers : any[] = [];

        for (let i = 1; i <= Math.ceil(totalItems / taskPerPages); i++) {
            pageNumbers.push([i]);
        }

        return pageNumbers;
    }

    return (
        <section className={"personal__account"}>
            <Header/>
            <NavPanel/>
            <div className={"personal__account__info__title"}>
                КАНБАН ДОСКА
            </div>
            <HelperProjectPanel/>
            <div className={"personal__account__info"}>
                <div className={"personal__account__info__blocks"}>
                    {boards.map((board) => (
                        <div onDragOver={(e) => dragOverHandler(e)}
                             onDrop={(e) => dropCardHandler(e, board)}
                             className={"personal__account__info__blocks__text"}>

                            <text>
                                {board.title}
                            </text>

                            {getTaskPerBlock(board).map((item) => (
                                <div onDragOver={(e) => dragOverHandler(e)}
                                     onDragLeave={(e) => dragLeaveHandler(e)}
                                     onDragStart={(e) => dragStartHandler(e, board, item)}
                                     onDragEnd={(e) => dragEndHandler(e)}
                                     onDrop={(e) => dragHandler(e, board, item)}
                                     draggable={"true"}
                                     className={"personal__account__info__blocks__task"}>

                                    <text>
                                        {item.title}
                                    </text>

                                    {/*<div className={"personal__account__info__text"}>*/}
                                    {/*    <text>*/}
                                    {/*        {item.title}*/}
                                    {/*    </text>*/}

                                    {/*    <input type={"checkbox"} className={"personal__account__task-checkbox"}*/}
                                    {/*           id={"personal__account__task__checkbox"} />*/}
                                    {/*    <label htmlFor={"personal__account__task__checkbox"}>*/}
                                    {/*        <img src={threeDotsIcon} alt="threeDotsIcon" />*/}
                                    {/*    </label>*/}

                                    {/*    <div className={"personal__account__task__options"}>*/}
                                    {/*        <img src={pointerWhiteImg} alt={"pointerWhiteImg"} />*/}
                                    {/*        <nav>*/}
                                    {/*            <div>*/}
                                    {/*                <a href="#!">Редактировать</a>*/}
                                    {/*            </div>*/}
                                    {/*            <div>*/}
                                    {/*                <a href="#!">Удалить</a>*/}
                                    {/*            </div>*/}
                                    {/*        </nav>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <div className={"personal__account__info__blocks__footer"}>
                                        <div className={"personal__account__info__blocks__icons"}>
                                            <img src={iconPersonMiniImg} alt={"iconPersonMiniImg"}/>
                                            <img src={pointerBlackImg} alt={"pointerImg"}/>
                                            <img src={iconPersonMiniImg} alt={"iconPersonMiniImg"}/>
                                        </div>
                                        <div className={"personal__account__info__blocks__data"}>
                                            <img src={timeIconImg} alt={"timeIconImg"}/>
                                            <text>
                                                {item.data}
                                            </text>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={"add__task-btn"}>
                                <label>
                                    <img src={addTaskImage} alt={"addTaskImage"}/>
                                </label>
                            </div>


                            <div className={"pagination"}>
                                <label className={"pagination__quickly__nav"}
                                       onClick={() => startList(board.id)}>В начало</label>

                                <label className={"pagination__arrow"}
                                       onClick={() => previousList(board.id)} >&lt;</label>
                                {getPagination(taskPerPages, board.items.length).map((number) =>
                                    <div>
                                        <label className={"pagination__numbers"}
                                               onClick={() => paginate(number, board.id)} > {number} </label>
                                    </div>
                                )}
                                <label className={"pagination__arrow"}
                                       onClick={() => nextList(board.id, board.items)}>&gt;</label>

                                <label className={"pagination__quickly__nav"}
                                       onClick={() => endList(board.id, board.items)}>В конец</label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={"personal__account__info__create__block"}>
                <div className={"personal__account__info__create__block-btn"}>
                    <a href="/createTask">Создать</a>
                </div>
            </div>
            <Footer />
            <Footnote />
        </section>
    );
}

export default PersonalAccount;
