import { create } from "zustand";


interface HistoryStore {
    history: string[]
    addToHistory: (username:string)=>void
}

export const userHistoryStore = create<HistoryStore>((set)=>({
    history:[],
    addToHistory:(username)=>set((state) =>({
        history: [username,...state.history.filter(h=>h !== username)].slice(0,5)
    }))
}))