import { Board } from "./type/type";

export enum ApiRoutes{
    Tasks = '/tasks/get',
    Projects = '/projects',
    Users = '/users',
}

export const InitialBoards: Board[] = [{ id: 1, title:"Идеи", items: []},
                                {id: 2, title: "Нужно сделать", items:[]},
                                { id: 3, title:"Делается", items: []},
                                { id: 4, title:"Сделано", items: []},
                                { id: 5, title:"Просрочено", items: []}];