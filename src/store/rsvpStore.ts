import { create } from 'zustand';

interface RSVPFormState {
  name: string;
  guests: number;
  isAttending: boolean | null;
  message: string;
  setField: <K extends keyof RSVPFormState>(field: K, value: RSVPFormState[K]) => void;
  reset: () => void;
}

export const useRSVPStore = create<RSVPFormState>((set) => ({
  name: '',
  guests: 1,
  isAttending: null,
  message: '',
  setField: (field, value) => set({ [field]: value }),
  reset: () => set({ name: '', guests: 1, isAttending: null, message: '' }),
}));