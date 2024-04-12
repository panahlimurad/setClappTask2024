import create from "zustand";

const useStore = create((set:any, get:any) => ({
  dataLength: 0,
  updateDataLength: (length:any) => set({ dataLength: length }), 
  decrementDataLength: () => set((state:any) => ({ dataLength: Math.max(0, state.dataLength - 1) }))
}));

export default useStore;