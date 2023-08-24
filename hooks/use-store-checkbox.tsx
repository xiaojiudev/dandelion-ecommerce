import { create } from 'zustand'

interface useStoreCheckboxStore {
    isCheckedAll: boolean
    checkedAll: () => void
    uncheckedAll: () => void
}

export const useStoreCheckbox = create<useStoreCheckboxStore>((set) => ({
    isCheckedAll: false,
    checkedAll: () => set(() => ({ isCheckedAll: true })),
    uncheckedAll: () => set(() => ({ isCheckedAll: false })),
}))

