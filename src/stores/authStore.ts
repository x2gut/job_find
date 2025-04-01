import { create } from "zustand";

interface AuthStore {
  isLoading: boolean;
  isAuthenticated: boolean | null;
  accessToken: string | null;
  setIsAuthenticated: (value: boolean) => void;
  setAccessToken: (token: string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoading: true,
  isAuthenticated: null,
  accessToken: null,
  setIsAuthenticated: (value) => {
    set({ isAuthenticated: value, isLoading: false });
  },
  setAccessToken: (token) => {
    set({ accessToken: token, isLoading: false });
  },
}));

export default useAuthStore;
