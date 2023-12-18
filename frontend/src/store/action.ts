import {createAction} from '@reduxjs/toolkit';
import { ProjectProps, TaskProps } from '../type/type';

enum Action{
    getTasks = 'get/tasks',
    getProjects = 'get/projects',
    getTask = 'get/Task'
}

export const getTasks = createAction<TaskProps[]>(Action.getTasks);
export const getTask = createAction<TaskProps>(Action.getTask);
export const getProjects = createAction<ProjectProps[]>(Action.getProjects);