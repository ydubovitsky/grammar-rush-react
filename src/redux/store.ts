import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth.slice";
import PopupMiddleware from "./middleware/popup.middleware";
import popupReducer from "./features/popup/popup-slice";
import tenseReducer from "./features/tense/tense.slice";
import { loadState, saveState } from "../services/localStorageService";

const persistedState = loadState("auth");

const store = configureStore({
  reducer: {
    auth: authReducer,
    popup: popupReducer,
    tense: tenseReducer
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


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
