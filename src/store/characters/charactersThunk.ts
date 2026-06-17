import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getAllCharacters = createAsyncThunk(
  'characters/getAllCharacters',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/characters?limit=9&${API_KEY}`);

      if (!response.ok) {
        return rejectWithValue(`Ошибка ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : 'Ошибка сети');
    }
  },
);

export const getCharacter = createAsyncThunk(
  'characters/getCharacter',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/characters/${id}?${API_KEY}`);

      if (!response.ok) {
        return rejectWithValue(`Ошибка ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : 'Ошибка сети');
    }
  },
);
