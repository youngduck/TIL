import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const userStore = create(
  persist(
    (set) => ({
      userState: { no: null, userId: null, authList: null },
      setUserData: (userData) =>
        set((state) => ({ ...state, userState: userData })),
    }),
    {
      name: "userState",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
