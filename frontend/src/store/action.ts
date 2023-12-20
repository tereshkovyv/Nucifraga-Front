import {createAction} from '@reduxjs/toolkit';
import { ProjectProps, TaskProps } from '../type/type';

enum Action{
    setTasks = 'set/tasks',
    setProjects = 'set/projects',
    setTask = 'set/Task'
}

export const setTasks = createAction<TaskProps[]>(Action.setTasks);
export const setTask = createAction<TaskProps>(Action.setTask);
export const setProjects = createAction<ProjectProps[]>(Action.setProjects);