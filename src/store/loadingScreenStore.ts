import { create } from "zustand";

type LoadingScreenState = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  toggleIsLoading: () => void;
};

const useLoadingScreenStore = create<LoadingScreenState>((set, get) => ({
  isLoading: false,

  setIsLoading: (state: boolean) => {
    set({ isLoading: true });
  },

  toggleIsLoading: () => {
    const { isLoading } = get();

    const prev = isLoading;

    set({ isLoading: !prev });
  },
}));

export default useLoadingScreenStore;
