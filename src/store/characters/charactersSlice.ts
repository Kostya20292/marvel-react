import { createSlice } from '@reduxjs/toolkit';
import { getAllCharacters, getCharacter } from './charactersThunk';

const initialState = {};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCharacters.fulfilled, (state, action) => {
      console.log(action.payload.data.results);
    });
    builder.addCase(getCharacter.fulfilled, (state, action) => {
      console.log(action.payload.data.results);
    });
  },
});

export default charactersSlice.reducer;
