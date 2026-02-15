import { create } from 'zustand';

interface GetStartedStore {
  isOpen: boolean;
  serviceName?: string;
  open: (serviceName?: string) => void;
  close: () => void;
}

export const useGetStartedModal = create<GetStartedStore>((set) => ({
  isOpen: false,
  serviceName: undefined,
  open: (serviceName?: string) => set({ isOpen: true, serviceName }),
  close: () => set({ isOpen: false, serviceName: undefined }),
}));
