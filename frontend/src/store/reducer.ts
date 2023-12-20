import { createReducer } from '@reduxjs/toolkit';
import { ProjectProps, TaskProps } from '../type/type';
import { setProjects, setTasks, setTask } from './action';

type InitialState = {
    projects: ProjectProps[];
    tasks: TaskProps[];
    openedTask: TaskProps | null;
}

const initialState: InitialState = {
    projects: [],
    tasks: [],
    openedTask: null
};

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(setTasks, (state, action) => {
        console.log(action.payload);
        state.tasks = action.payload;
    })
        .addCase(setProjects, (state, action) => {
            state.projects = action.payload;
        })
        .addCase(setTask, (state, action) => {
            state.openedTask = action.payload;
        })
});

export { reducer };
