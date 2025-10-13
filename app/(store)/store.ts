import { create } from "zustand";

interface I_store {
  is_form: boolean;
  set_is_form: (state: boolean) => void;
}

export const useStore = create<I_store>()((set) => ({
  is_form: false,

  // setter methods
  set_is_form: () => set((state) => ({ is_form: !state.is_form })),
}));
