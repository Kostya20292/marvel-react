import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CharactersResponse } from '../../types/models';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const fetchCharacters = async (id?: number): Promise<CharactersResponse> => {
  const path = id !== undefined ? `/characters/${id}` : '/characters?limit=9';
  const separator = path.includes('?') ? '&' : '?';
  const response = await fetch(`${BASE_URL}${path}${separator}${API_KEY}`);

  if (!response.ok) {
    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  }

  const data = (await response.json()) as CharactersResponse;

  if (id !== undefined && !data.data.results[0]) {
    throw new Error('Персонаж не найден');
  }

  return data;
};

export const getAllCharacters = createAsyncThunk<CharactersResponse, void, { rejectValue: string }>(
  'characters/getAllCharacters',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchCharacters();
    } catch (e) {
      return rejectWithValue(e instanceof Error ? e.message : 'Ошибка сети');
    }
  },
);

const createCharacterThunk = (type: string) =>
  createAsyncThunk<CharactersResponse, number, { rejectValue: string }>(
    type,
    async (id, { rejectWithValue }) => {
      try {
        return await fetchCharacters(id);
      } catch (e) {
        return rejectWithValue(e instanceof Error ? e.message : 'Ошибка сети');
      }
    },
  );

export const getCharacter = createCharacterThunk('randomCharacter/getCharacter');
export const getCharacterInfo = createCharacterThunk('characterInfo/getCharacterInfo');
