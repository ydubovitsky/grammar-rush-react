import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/fetch-service";
import { FETCH_STATUS } from "../../types";
import { BASE_URL } from "../../const/url-endpoints";
import { RootState } from "../../store";
import { ArticleInterface } from "../../../types";

interface ArticlesStateInterface {
  articlesEntities: ArticleInterface[];
  status: FETCH_STATUS;
  error: string | null;
}

export const getPage: any = createAsyncThunk(
  "articles/page",
  async (page) => {
    const PAGE_SIZE = 5; // make it flexible!
    const response = await fetchData({
      method: "GET",
      url: `${BASE_URL}/api/v1/article?size=${PAGE_SIZE}&page=${page}`,
      responseType: "json",
    });
    const result = (await response) as ArticleInterface[];
    console.log(result);
    return result;
  }
);

export const create: any = createAsyncThunk("articles/add", async (data) => {
  const response = await fetchData({
    method: "POST",
    url: `${BASE_URL}/api/v1/articles`,
    data: data,
    responseType: "json",
  });
  const result = (await response) as ArticleInterface[];
  return result;
});

export const update: any = createAsyncThunk("articles/login", async (data) => {
  const response = await fetchData({
    method: "PUT",
    url: `${BASE_URL}/api/v1/articles`,
    data: data,
    responseType: "json",
  });
  const result = (await response) as ArticleInterface[];
  return result;
});

const initialState = {
  articlesEntities: [],
  status: FETCH_STATUS.IDLE,
  error: null,
} as ArticlesStateInterface;

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //! Get by page
      .addCase(getPage.pending, (state, action) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(getPage.fulfilled, (state, action) => {
        state.articlesEntities = action.payload;
        state.status = FETCH_STATUS.REGISTERED;
      })
      .addCase(getPage.rejected, (state, action) => {
        state.status = FETCH_STATUS.ERROR;
      })
      //! Create
      .addCase(create.pending, (state, action) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.articlesEntities = action.payload;
        state.status = FETCH_STATUS.REGISTERED;
      })
      .addCase(create.rejected, (state, action) => {
        state.status = FETCH_STATUS.ERROR;
      })
      //! Update
      .addCase(update.pending, (state, action) => {
        state.status = FETCH_STATUS.LOADING;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.articlesEntities = action.payload;
        state.status = FETCH_STATUS.AUTHENTICATED;
      })
      .addCase(update.rejected, (state, action) => {
        state.status = FETCH_STATUS.ERROR;
      })
      .addDefaultCase((state, action) => {
        return state;
      });
  },
});

export default articlesSlice.reducer;

// ------------------------------------ Selectors ------------------------------------

export const articlesEntitiesSelector = (state: RootState) => state.articles.articlesEntities;
export const articleByIdSelector = (state: RootState, id: number) => state.articles.articlesEntities.filter(article => article.id === id)[0];
