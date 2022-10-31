import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/fetch-service";
import { UserInterface } from "../../../types";
import { FETCH_STATUS } from "../../types";
import { BASE_URL } from "../../const/url-endpoints";
import { RootState } from "../../store";

interface UserStateInterface {
  userEntity: UserInterface;
  status: FETCH_STATUS;
  error: string | null;
}

export const register: any = createAsyncThunk("auth/register", async (data) => {
  const response = await fetchData({
    method: "POST",
    url: `${BASE_URL}/api/v1/appuser/register`,
    data: data,
    responseType: "json",
  });
  const result = (await response) as UserInterface[];
  return result;
});

export const login: any = createAsyncThunk("auth/login", async (data) => {
  const response = await fetchData({
    method: "POST",
    url: `${BASE_URL}/login`,
    data: data,
    // responseType: "json",
  });
  const result = (await response) as UserInterface[];
  return result;
});

const initialState = {
  userEntity: {},
  status: FETCH_STATUS.IDLE,
  error: null,
} as UserStateInterface;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.userEntity = action.payload;
        state.status = FETCH_STATUS.REGISTERED;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = FETCH_STATUS.ERROR;
      })
      .addCase(login.pending, (state, action) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userEntity = action.payload;
        state.status = FETCH_STATUS.AUTHENTICATED;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = FETCH_STATUS.ERROR;
      })
      .addDefaultCase((state, action) => {
        return state;
      });
  },
});

// ------------------------------------ Selectors ------------------------------------

export const authSelector = (state: RootState) => state.auth;
export const userEntitySelector = (state: RootState) => state.auth.userEntity;
export const authStatusSelector = (state: RootState): FETCH_STATUS =>
  state.auth.status;
export const userRolesSelector = (state: RootState) =>
  state.auth.userEntity.roles;

export default authSlice.reducer;
