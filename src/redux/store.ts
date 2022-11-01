import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "./features/task/task.slice";
import authReducer from "./features/auth/auth.slice";
import themeReducer from "./features/theme/theme.slice";
import PopupMiddleware from "./middleware/popup.middleware";
import popupReducer from "./features/popup/popup-slice";
import { loadState, saveState } from "../services/localStorageService";

const persistedState = loadState("auth");

const store = configureStore({
  reducer: {
    task: taskReducers,
    auth: authReducer,
    theme: themeReducer,
    popup: popupReducer
  },
  preloadedState: {
    auth: persistedState,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(PopupMiddleware)
});

//TODO Доработать, чтобы можно было передавать объект с множеством полей!
//! Save auth state
store.subscribe(() => {
  saveState("auth", store.getState().auth);
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
