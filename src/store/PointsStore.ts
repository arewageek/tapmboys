import { getCurrentSkin } from "@/actions/skins.actions";
import { create } from "zustand";
import { useBoostersStore } from "./useBoostrsStore";

type Points = {
  points: number;
  addPoints: (count?: number) => void;
  reducePoints: (count?: number) => void;
  nextBenchmark: number;
  currentTapsLeft: number;
  decreaseTapsLeft: (count?: number) => void;
  increaseTapsLeft: (count?: number) => void;
  skin: string | null;
  setSkin: (image: string) => void;
  lastTap: number;
  tapInBoostMode: (count: number) => void;
  initializePoints: (initial: number) => void;
};

export const usePointsStore = create<Points>((set, get) => ({
  points: 0,
  nextBenchmark: 1000,
  currentTapsLeft: useBoostersStore.getState().energyCapacity,
  lastTap: 0,
  skin: "/assets/images/space-bg.avif",
  addPoints: (count) => {
    const { points } = get();

    count = count ? count : 1;

    set({ points: points + count, lastTap: Date.now() }); // Update lastTap
  },
  reducePoints: (count) => {
    const { points } = get();
    count = count ? count : 1;

    set({ points: points - count });
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
  setSkin: (image) => {
    set({ skin: image });
  },
  tapInBoostMode: (count) => {
    const { points } = get();
    set({ points: points + count });
  },
  initializePoints: (initial) => {
    set({ points: initial });
  },
}));
