import { create } from "zustand";

type Points = {
  points: number;
  addPoints: (count?: number) => void;

  tapLimit: number;
  nextBenchmark: number;
  currentTapsLeft: number;
  decreaseTapsLeft: (count?: number) => void;
  increaseTapsLeft: (count?: number) => void;
};

export const usePointsStore = create<Points>((set, get) => ({
  points: 0,
  tapLimit: 500,
  nextBenchmark: 1000,
  currentTapsLeft: 500,
  lastTap: 0,
  addPoints: (count) => {
    const { points } = get();

    count = count ? count : 1;

    set({ points: points + count });
  },
  decreaseTapsLeft: (count) => {
    count = count ? count : 1;
    const { currentTapsLeft } = get();
    currentTapsLeft > 0 && set({ currentTapsLeft: currentTapsLeft - count });
  },
  increaseTapsLeft: (count) => {
    count = count ? count : 1;
    const { currentTapsLeft, tapLimit } = get();
    currentTapsLeft < tapLimit &&
      set({ currentTapsLeft: currentTapsLeft + count });
  },
}));
