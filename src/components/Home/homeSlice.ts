import { createSlice } from '@reduxjs/toolkit';
import { TInitialStateHome } from '../../types/types';

const initialState: TInitialStateHome = {
  popup: false,
  id: 0,
  search: '',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    activePopup: (state, action) => {
      state.popup = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
    searchFind: (state, action) => {
      state.search = action.payload;
    },
  },
});
const { actions, reducer } = homeSlice;

export default reducer;
export const { activePopup, getId, searchFind } = actions;
