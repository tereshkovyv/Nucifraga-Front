import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskProps } from "../type/type";
import { ApiRoutes } from "../const";
import { AppDispatch } from '../type/state';
import { AxiosInstance } from 'axios';
import { State } from '../type/state';
import { setTasks } from './action';

export const loadTasksAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'tasks',
    async (_arg, { dispatch, extra: api }) => {
        const { data } = await api.get<TaskProps[]>(ApiRoutes.Tasks);
        setTasks(data);
    }
  );