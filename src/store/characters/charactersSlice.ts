import { createSlice } from '@reduxjs/toolkit';
import type { CharacterListItem, LoadingState } from '../../types/models';
import { getCharacterImageUrl } from '../../utils/getCharacterImageUrl';
import { getAllCharacters } from './charactersThunk';

interface CharactersState {
  characters: CharacterListItem[];
  loading: LoadingState;
}

const initialState: CharactersState = {
  characters: [],
  loading: 'pending',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCharacters.pending, (state) => {
      state.characters = [];
      state.loading = 'pending';
    });

    builder.addCase(getAllCharacters.fulfilled, (state, action) => {
      state.characters = action.payload.data.results.map((character) => ({
        id: character.id,
        name: character.name,
        imageUrl: getCharacterImageUrl(character.thumbnail.path, character.thumbnail.extension),
      }));

      state.loading = 'succeeded';
    });

    builder.addCase(getAllCharacters.rejected, (state) => {
      state.characters = [];
      state.loading = 'failed';
    });
  },
});

export default charactersSlice.reducer;
