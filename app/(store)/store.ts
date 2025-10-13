import { I_store } from "@/interfaces";
import { create } from "zustand";

export const useStore = create<I_store>()((set) => ({
  is_form: false,

  // setter methods
  set_is_form: () => set((state) => ({ is_form: !state.is_form })),
}));
