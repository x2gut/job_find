import { create } from "zustand";
import { AccountTypeEnum } from "../types/types";

interface UserDataStore {
  id: number | null;
  isActive: boolean | null;
  username: string | null;
  email: string | null;
  accType: null | AccountTypeEnum;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setId: (id: number) => void;
  setIsActive: (status: boolean) => void;
  setAccType: (accType: AccountTypeEnum) => void;
  reset: () => void;
}

const initialState = {
  id: null,
  isActive: null,
  username: null,
  email: null,
  accType: null,
};

const useUserDataStore = create<UserDataStore>((set) => ({
  ...initialState,
  setUsername: (username) => set({ username }),
  setEmail: (email) => set({ email }),
  setId: (id) => set({ id }),
  setIsActive: (status) => set({ isActive: status }),
  setAccType: (accType) => set({ accType }),
  reset: () => set(initialState),
}));

export default useUserDataStore;
