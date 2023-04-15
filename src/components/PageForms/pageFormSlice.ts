import { createSlice } from '@reduxjs/toolkit';
import { TInitialStateForm } from '../../types/types';

const initialState: TInitialStateForm = {
  items: [],
  popup: false,
  fileName: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addItemForm: (state, action) => {
      state.items.push(action.payload);
    },
    changePopup: (state, action) => {
      state.popup = action.payload;
    },
    changeName: (state, action) => {
      state.fileName = action.payload;
    },
  },
});

const { actions, reducer } = formSlice;
export default reducer;

export const { addItemForm, changePopup, changeName } = actions;
