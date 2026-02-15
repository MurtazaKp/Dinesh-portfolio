import { motion, AnimatePresence } from 'motion/react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { create } from 'zustand';
import { GoogleCalendarBooking } from './GoogleCalendarBooking';

interface BookingStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useBookingModal = create<BookingStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export function BookingModal() {
  const { isOpen, close } = useBookingModal();

  return <GoogleCalendarBooking isOpen={isOpen} onClose={close} />;
}