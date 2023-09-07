import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface PopupInterface {
  message: string | null;
  color: string | null;
}

interface PopupStateInterface {
  popupEntity: PopupInterface;
  isVisible: boolean;
}

// -------------------------------------- Slice --------------------------------------

const initialState: PopupStateInterface = {
  popupEntity: {
    message: null,
    color: null,
  },
  isVisible: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState: initialState as PopupStateInterface,
  reducers: {
    showPopup: (state, action: PayloadAction<PopupInterface>) => {
      state.popupEntity = action.payload;
      state.isVisible = true;
    },
    hidePopup: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;

export default popupSlice.reducer;

// -------------------------------------- Selectors --------------------------------------

export const popupStateSelector = (state: RootState) => state.popup;
export const isVisibleSelector = (state: RootState) => state.popup.isVisible;
