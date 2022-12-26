import authApi from "lib/api/auth";
import { saveToken } from "utils/authStore";
import createStore from "zustand";
import { StoreSlice } from "../types";

interface AuthSlice {
  user: null | Record<string, any>;
  error: null | any;
  login: (email: string, password: string) => void;
  reset: () => void;
}

const authSlice: StoreSlice<AuthSlice> = (set, get) => ({
  user: null,
  error: null,
  login: async (email, password) => {
    try {
      const res = await authApi.login(email, password);

      if (res.status !== 200) {
        return set({ error: res.data });
      }

      const {
        data: { user, access_token },
      } = res.data;

      // Save token to local storage
      saveToken({
        access_token_exp: 0,
        access_token,
        access_user: user,
      });

      return set({
        user,
        error: null,
      });
    } catch (err) {
      return set({ error: "An error occurred" });
    }
  },
  reset: () => {
    return set({ user: null, error: null });
  },
});

const authStore = createStore(authSlice);

export default authStore;
