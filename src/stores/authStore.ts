import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  studentId: string | null;
  username: string | null;
  login: (studentId: string, username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  studentId: null,
  username: null,
  login: (studentId, username) => set({ isAuthenticated: true, studentId, username }),
  logout: () => set({ isAuthenticated: false, studentId: null, username: null }),
}));