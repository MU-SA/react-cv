import { StateCreator } from 'zustand';

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}

export interface LanguagesSlice {
  languages: Language[];
  addLanguage: () => void;
  removeLanguage: (id: string) => void;
  updateLanguage: (id: string, field: keyof Omit<Language, 'id'>, value: string) => void;
}

export const languagesSlice: StateCreator<LanguagesSlice, [], [], LanguagesSlice> = (set) => ({
  languages: [],

  addLanguage: () =>
    set((state: LanguagesSlice) => ({
      languages: [
        ...state.languages,
        {
          id: crypto.randomUUID(),
          name: '',
          proficiency: '',
        },
      ],
    })),

  removeLanguage: (id) =>
    set((state: LanguagesSlice) => ({
      languages: state.languages.filter((language) => language.id !== id),
    })),

  updateLanguage: (id, field, value) =>
    set((state: LanguagesSlice) => ({
      languages: state.languages.map((language) =>
        language.id === id ? { ...language, [field]: value } : language
      ),
    })),
});
