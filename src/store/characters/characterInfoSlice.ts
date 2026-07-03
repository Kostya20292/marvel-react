import { createSlice } from '@reduxjs/toolkit';
import type { CharacterInfo, IdleLoadingState } from '../../types/models';
import { getCharacterInfo } from './charactersThunk';
import { getCharacterImageUrl } from '../../utils/getCharacterImageUrl';

interface CharactersState {
  characterInfo: CharacterInfo | null;
  selectedId: number | null;
  loading: IdleLoadingState;
}

const initialState: CharactersState = {
  characterInfo: null,
  selectedId: null,
  loading: 'idle',
};

export const characterInfoSlice = createSlice({
  name: 'characterInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacterInfo.pending, (state, action) => {
      state.characterInfo = null;
      state.selectedId = action.meta.arg;
      state.loading = 'pending';
    });

    builder.addCase(getCharacterInfo.fulfilled, (state, action) => {
      const character = action.payload.data.results[0];

      state.loading = 'succeeded';
      state.characterInfo = {
        name: character.name || 'No name for this character',
        description: character.description || 'No description for this character',
        imageUrl: getCharacterImageUrl(character.thumbnail.path, character.thumbnail.extension),
        homepageUrl: character.urls[0]?.url || '',
        wikiUrl: character.urls[1]?.url || '',
        comics: character.comics.items,
      };
    });

    builder.addCase(getCharacterInfo.rejected, (state) => {
      state.characterInfo = null;
      state.loading = 'failed';
    });
  },
});

export default characterInfoSlice.reducer;
