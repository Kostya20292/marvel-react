import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CharactersResponse } from '../../types/marvel';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getAllCharacters = createAsyncThunk<CharactersResponse, void, { rejectValue: string }>(
  'characters/getAllCharacters',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/characters?limit=9&${API_KEY}`);

      if (!response.ok) {
        return rejectWithValue(`Ошибка ${response.status}: ${response.statusText}`);
      }

      return (await response.json()) as CharactersResponse;
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : 'Ошибка сети');
    }
  },
);

export const getCharacter = createAsyncThunk<CharactersResponse, number, { rejectValue: string }>(
  'characters/getCharacter',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/characters/${id}?${API_KEY}`);

      if (!response.ok) {
        return rejectWithValue(`Ошибка ${response.status}: ${response.statusText}`);
      }

      const data = (await response.json()) as CharactersResponse;

      if (!data.data.results[0]) {
        return rejectWithValue('Персонаж не найден');
      }

      return data;
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : 'Ошибка сети');
    }
  },
);
