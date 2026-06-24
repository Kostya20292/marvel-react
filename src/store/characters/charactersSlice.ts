import { createSlice } from '@reduxjs/toolkit';
import { getCharacter } from './charactersThunk';
import type { CharacterListItem, CharacterView } from '../../types/marvel';

interface CharactersState {
  characters: CharacterListItem[];
  character: CharacterView | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState: CharactersState = {
  characters: [],
  character: null,
  loading: 'idle',
  error: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getAllCharacters.pending, (state) => {
    //   state.characters = [];
    //   state.loading = 'pending';
    //   state.error = '';
    // });

    // builder.addCase(getAllCharacters.fulfilled, (state, action) => {
    //   state.characters = action.payload.data.results.map((character) => ({
    //     id: character.id,
    //     name: character.name,
    //     imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    //   }));
    //   state.loading = 'succeeded';
    //   state.error = '';
    // });

    // builder.addCase(getAllCharacters.rejected, (state, action) => {
    //   state.characters = [];
    //   state.loading = 'failed';
    //   state.error = action.payload ?? 'Неизвестная ошибка';
    // });

    builder.addCase(getCharacter.pending, (state) => {
      state.character = null;
      state.loading = 'pending';
      state.error = '';
    });

    builder.addCase(getCharacter.fulfilled, (state, action) => {
      const character = action.payload.data.results[0];

      state.loading = 'succeeded';
      state.character = {
        name: character.name || 'No name for this character',
        description: character.description || 'No description for this character',
        imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        homepageUrl: character.urls[0]?.url || '/',
        wikiUrl: character.urls[1]?.url || '/',
      };
      state.error = '';
    });

    builder.addCase(getCharacter.rejected, (state, action) => {
      state.character = null;
      state.loading = 'failed';
      state.error = action.payload ?? 'Неизвестная ошибка';
    });
  },
});

export default charactersSlice.reducer;
