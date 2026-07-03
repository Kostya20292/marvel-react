import { createSlice } from '@reduxjs/toolkit';
import { getCharacter } from './charactersThunk';
import type { CharacterView, LoadingState } from '../../types/models';
import { getCharacterImageUrl } from '../../utils/getCharacterImageUrl';

interface RandomCharacterState {
  character: CharacterView | null;
  loading: LoadingState;
}

const initialState: RandomCharacterState = {
  character: null,
  loading: 'pending',
};

export const randomCharacterSlice = createSlice({
  name: 'randomCharacter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacter.pending, (state) => {
      state.character = null;
      state.loading = 'pending';
    });

    builder.addCase(getCharacter.fulfilled, (state, action) => {
      const character = action.payload.data.results[0];

      state.loading = 'succeeded';
      state.character = {
        name: character.name || 'No name for this character',
        description: character.description || 'No description for this character',
        imageUrl: getCharacterImageUrl(character.thumbnail.path, character.thumbnail.extension),
        homepageUrl: character.urls[0]?.url || '',
        wikiUrl: character.urls[1]?.url || '',
      };
    });

    builder.addCase(getCharacter.rejected, (state) => {
      state.character = null;
      state.loading = 'failed';
    });
  },
});

export default randomCharacterSlice.reducer;
