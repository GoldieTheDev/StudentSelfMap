import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  language: 'en' | 'ar';
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  language: 'en',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'ar' : 'en' })),
}));