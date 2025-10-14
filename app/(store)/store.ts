import { I_store } from "@/interfaces";
import { create } from "zustand";

export const useStore = create<I_store>()((set) => ({
  is_form: false,
  is_tech: false,
  currently: true,

  // setter methods
  set_is_form: () =>
    set((state) => ({
      is_form: !state.is_form,
      is_tech: false,
      currently: false,
    })),
  set_is_tech: () =>
    set((state) => ({
      is_tech: !state.is_tech,
      is_form: false,
      currently: false,
    })),
  set_currently: () =>
    set((state) => ({
      currently: !state.currently,
      is_tech: false,
      is_form: false,
    })),
}));
