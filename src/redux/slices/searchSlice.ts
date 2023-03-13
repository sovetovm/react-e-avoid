import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ISearchState {
  search: string;
}

const initialState: ISearchState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const selectSearch = (state: RootState) => state.search;
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
