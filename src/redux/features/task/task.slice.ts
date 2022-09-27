import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../../services/fetch-service';
import { TaskInterface } from '../../../types/TaskInterface';
import { FETCH_STATUS } from '../../types';

interface TaskStateInterface {
  tasks: TaskInterface[],
  status: FETCH_STATUS,
  error: null | string
}

export const fetchAllTasks: any = createAsyncThunk(
  'task/fetchAll',
  async () => {
    const response = await fetchData({
      method: 'GET',
      url: `http://localhost:8085/api/v1/task/all`,
      responseType: 'json'
    })
    const result = await response as TaskInterface[];
    return result;
  }
)

export const fetchTaskById = createAsyncThunk(
  'task/fetchById',
  async (userId: number) => {
    const response = await fetch(`http://localhost:8085/api/v1/task/${userId}`)
    const result = await response.json() as TaskInterface;
    return result;
  }
)

const initialState = { 
  tasks: [],
  status: FETCH_STATUS.IDLE,
  error: null
} as TaskStateInterface;

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTasks.pending, (state, action) => {
        state.status = FETCH_STATUS.LOADING
      })
      .addCase(fetchAllTasks.fulfilled, (state, action) => {
        state.tasks = action.payload
        state.status = FETCH_STATUS.LOADED
      })
      .addCase(fetchAllTasks.rejected, (state, action) => {
        state.status = FETCH_STATUS.ERROR
      })
      .addDefaultCase((state, action) => {
        return state
      })
  },
});

export default taskSlice.reducer