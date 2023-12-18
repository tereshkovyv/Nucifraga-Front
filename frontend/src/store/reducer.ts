import { createReducer } from '@reduxjs/toolkit';
import { ProjectProps, TaskProps } from '../type/type';
import { getProjects as setProjects, getTasks as setTasks, getTask as setTask } from './action';
import { tasks } from '../mock/task';

type InitialState = {
    projects: ProjectProps[];
    tasks: TaskProps[];
    openedTask: TaskProps | null;
}

const initialState : InitialState = {
    projects: [],
    tasks: tasks,
    openedTask: null
};

const reducer = createReducer(initialState, (builder) => {
   builder.addCase(setTasks, (state, action) => {
       state.tasks = action.payload;
     })
     .addCase(setProjects, (state, action) =>
     {
        state.projects = action.payload;
     })
     .addCase(setTask, (state, action) =>{
        state.openedTask = action.payload;
     })
});

export { reducer };
