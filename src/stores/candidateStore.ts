import { create } from "zustand";

interface CandidateStore {
  id: number | null;
  fullName: string | null;
  biography: string | null;
  profilePicture: string | null;
  cvName: string | null;
  setFullname: (fullName: string) => void;
  setBiography: (biography: string) => void;
  setId: (id: number) => void;
  setProfilePicture: (profilePicture: string) => void;
  setCvName: (cvName: string) => void;
}

const useCandidateStore = create<CandidateStore>((set) => ({
  id: null,
  fullName: null,
  biography: null,
  profilePicture: null,
  cvName: null,
  setFullname: (fullName) =>
    set({
      fullName: fullName,
    }),
  setBiography: (biography) =>
    set({
      biography: biography,
    }),
  setId: (id) =>
    set({
      id: id,
    }),
  setProfilePicture: (profilePicture) =>
    set({
      profilePicture: profilePicture,
    }),
  setCvName: (cvName) =>
    set({
      cvName: cvName,
    }),
}));

export default useCandidateStore;
