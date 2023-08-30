import { create } from 'zustand'

interface useStoreVoucher {
    isDisable: boolean
    setEnable: () => void
    setDisable: () => void
}

export const useStoreVoucher = create<useStoreVoucher>((set) => ({
    isDisable: true,
    setEnable: () => set({ isDisable: false }),
    setDisable: () => set({ isDisable: true }),
}))