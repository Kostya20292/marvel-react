export type LoadingState = 'idle' | 'pending' | 'succeeded' | 'failed'

export type MarvelResponse<T> = {
  data: {
    results: T[];
  };
};

export type Thumbnail = {
  path: string;
  extension: string;
};

export type MarvelUrl = {
  url: string;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  urls: MarvelUrl[];
  comics: {
    items: string[];
  };
};

export type CharacterListItem = {
  id: number;
  name: string;
  imageUrl: string;
};

export type CharacterView = {
  name: string;
  description: string;
  imageUrl: string;
  homepageUrl: string;
  wikiUrl: string;
};

export type Comic = {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  thumbnail: Thumbnail;
  textObjects: {
    languages: string;
  };
  prices: {
    price: number;
  }[];
};

export type CharactersResponse = MarvelResponse<Character>;
export type ComicsResponse = MarvelResponse<Comic>;
