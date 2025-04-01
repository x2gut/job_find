import { create } from "zustand";
import { SavedCandidateList } from "../types/types";

interface CompanyInfoStoreProps {
  id: number | null;
  profilePicture: null | string;
  profileBanner: null | File | string;
  companyName: null | string;
  aboutUs: null | string;
  location: null | string;
  savedCandidates: SavedCandidateList;
  isCompanyCompleted: boolean;
  setId: (id: number) => void;
  setProfilePicture: (profilePicture: null | string) => void;
  setProfileBanner: (profileBanner: File | null | string) => void;
  setCompanyName: (companyName: string) => void;
  setAboutUs: (aboutUs: string) => void;
  setLocation: (location: string) => void;
  setSavedCandidates: (candidates: SavedCandidateList) => void;
}

const useCompanyInfoStore = create<CompanyInfoStoreProps>((set) => ({
  id: null,
  profilePicture: null,
  profileBanner: null,
  companyName: null,
  aboutUs: null,
  location: null,
  savedCandidates: { candidates_ids: [], candidates_data: [] },
  isCompanyCompleted: false,

  setId: (id) => set({ id: id }),
  setProfilePicture: (profilePicture) =>
    set({ profilePicture: profilePicture }),
  setProfileBanner: (profileBanner) => set({ profileBanner: profileBanner }),
  setCompanyName: (companyName) =>
    set((state) => ({
      companyName: companyName,
      isCompanyCompleted: !!companyName && !!state.aboutUs && !!state.location,
    })),
  setAboutUs: (aboutUs) =>
    set((state) => ({
      aboutUs: aboutUs,
      isCompanyCompleted: !!state.companyName && !!aboutUs && !!state.location,
    })),
  setLocation: (location) =>
    set((state) => ({
      location: location,
      isCompanyCompleted: !!state.companyName && !!state.aboutUs && !!location,
    })),
  setSavedCandidates: (candidates) => set({ savedCandidates: candidates }),
}));

export default useCompanyInfoStore;
