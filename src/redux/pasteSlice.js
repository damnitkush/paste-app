import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      console.log("paste is called", paste);
      state.pastes.push(paste);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("paste created successfully");
    },
    updateToPastes: (state, action) => {
      const { id, updatedPaste } = action.payload;
      const index = state.pastes.findIndex(paste => paste.id === id);
      if (index !== -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }
    },
    resetAllPaste: (state) => {
      state.pastes = [];
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pasteId);
      if (index >= 0) {
        state.pastes.splice(index, 1);
      }
      toast("removed successfully")
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
    },
  },
})

export const { removeFromPastes, resetAllPaste, updateToPastes, addToPastes } = pasteSlice.actions
export default pasteSlice.reducer