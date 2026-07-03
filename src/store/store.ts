import { configureStore } from '@reduxjs/toolkit';
import randomCharacterReducer from './characters/randomCharacterSlice';
import charactersReducer from './characters/charactersSlice';
import characterInfoReducer from './characters/characterInfoSlice';

export const store = configureStore({
  reducer: {
    randomCharacter: randomCharacterReducer,
    characters: charactersReducer,
    characterInfo: characterInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
