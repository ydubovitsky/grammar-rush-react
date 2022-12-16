import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../const/url-endpoints";
import { fetchData } from "../../../services/fetch-service";
import { TaskInterface, ThemeInterface } from "../../../types";
import { FETCH_STATUS } from "../../types";
import { RootState } from "../../store";

interface ThemeStateInterface {
  themeEntities: ThemeInterface[];
  status: FETCH_STATUS;
  error: null | string;
}

export const addNewTheme: any = createAsyncThunk("theme/add", async (data) => {
  const response = await fetchData({
    method: "POST",
    data: data,
    url: `${BASE_URL}/api/v1/theme/add`,
    responseType: "json",
  });
  const result = (await response) as ThemeInterface;
  return result;
});

export const fetchAllThemes: any = createAsyncThunk(
  "theme/getAll",
  async () => {
    const response = await fetchData({
      method: "GET",
      url: `${BASE_URL}/api/v1/theme/all`,
      responseType: "json",
    });
    const result = (await response) as ThemeInterface[];
    return result;
  }
);

const initialState = {
  themeEntities: [],
  status: FETCH_STATUS.IDLE,
  error: null,
} as ThemeStateInterface;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewTheme.pending, (state, action) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(addNewTheme.fulfilled, (state, action) => {
        state.status = FETCH_STATUS.LOADED;
      })
      .addCase(addNewTheme.rejected, (state, action) => {
        state.status = FETCH_STATUS.ERROR;
      })
      .addCase(fetchAllThemes.fulfilled, (state, action) => {
        state.themeEntities = action.payload;
        state.status = FETCH_STATUS.LOADED;
      })
      .addDefaultCase((state, action) => {
        return state;
      });
  },
});

// ------------------------------------ Selectors ------------------------------------

export const themesNameListSelector = (state: RootState): string[] =>
  state.theme.themeEntities.map((theme) => theme.name);

export const themeEntitiesSelector = (state: RootState): ThemeInterface[] =>
  state.theme.themeEntities;

export const taskListByThemeIdSelector = (
  themeId: string | null,
  state: RootState
): TaskInterface[] | undefined => {
  console.log(themeId);
  if (themeId) {
    return state.theme.themeEntities.find(
      (theme) => theme.id === parseInt(themeId)
    )?.taskList;
  }
  return [];
};

export const themeNameByThemeIdSelector = (
  themeId: string | null,
  state: RootState
): string | undefined => {
  return state.theme.themeEntities.find(
    (theme) => theme.id === parseInt(themeId ? themeId : "1")
  )?.name;
};

export const themeStatusSelector = (state: RootState): FETCH_STATUS =>
  state.theme.status;

export const getRandomThemeId = (state: RootState): number =>
  state.theme.themeEntities.length - 1;

// ------------------------------------ Default export ------------------------------------

export default themeSlice.reducer;
