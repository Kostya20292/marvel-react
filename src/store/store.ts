import { configureStore } from '@reduxjs/toolkit';
import randomCharacterReducer from './characters/randomCharacterSlice';
import charactersReducer from './characters/charactersSlice';

export const store = configureStore({
  reducer: {
    randomCharacter: randomCharacterReducer,
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
