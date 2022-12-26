import profileApi from "lib/api/profile";
import create from "zustand";
import { StoreSlice } from "../types";

interface ProfileSlice {
  user: Record<string, any> | null;
  getProfile: () => void;
  resetProfile: () => void;
}

const profileSlice: StoreSlice<ProfileSlice> = (set, get) => ({
  user: null,
  getProfile: async () => {
    const res = await profileApi.getProfile();

    if (res.status !== 200) {
      window.location.href = "/logout";
    }

    const { data, error } = res.data;

    if (error) {
      // do nothing
      return;
    }

    set({ user: data });
  },
  resetProfile: () => {
    set({ user: null });
  },
});

const profileStore = create(profileSlice);

export default profileStore;
