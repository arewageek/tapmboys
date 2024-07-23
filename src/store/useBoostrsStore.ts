import { create } from "zustand";

export type BoostersStore = {
  refill: number;
  tapCommando: number;
  secondsLeft: number;

  decreaseRefill: () => void;
  decreaseTapCommando: () => void;
  decreaseSecondsLeft: () => void;
  setSecondsLeft: (val: number) => void;
};

export const useBoostersStore = create<BoostersStore>((set, get) => ({
  refill: 3,
  tapCommando: 3,
  secondsLeft: 0,

  decreaseRefill: () => {
    const { refill } = get();
    refill > 0 && set({ refill: refill - 1 });
  },
  decreaseTapCommando: () => {
    const { tapCommando } = get();
    set({ tapCommando: tapCommando - 1 });
  },

  decreaseSecondsLeft: () => {
    const s = get().secondsLeft;
    set({ secondsLeft: s - 1 });
  },
  setSecondsLeft: (val) => {
    set({ secondsLeft: val });
  },
}));
